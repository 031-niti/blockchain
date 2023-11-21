"use client"
import { formatEther, parseUnits } from "@ethersproject/units"
import { initializeConnector } from "@web3-react/core"
import { MetaMask } from "@web3-react/metamask"
import { ethers } from "ethers"
import React, { useState, useEffect } from "react"
import abi from "./abi.json"
import Poke from "./components/Poke"

const [metaMask, hooks] = initializeConnector((actions) => new MetaMask({ actions }));
const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;
const contractChain = 11155111
const contractAddress = '0x73aA3dbF13B962B9B901B80cCd54bff7F324dc06'

export default function Page() {
  const chainid = useChainId();
  const accounts = useAccounts();
  const isActive = useIsActive();
  const provider = useProvider();
  const [error, setError] = useState(undefined)
  const [transactionHash, setTransactionHash] = useState(null);

  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug('Failed to connect eagerly to metamask')
    })
  }, [])
  const handleConnect = () => {
    metaMask.activate()
  }
  const handleDisconnect = () => {
    metaMask.resetState()
  }

  const [balance, setBalance] = useState("");
  useEffect(() => {
    const fetchbalance = async () => {
      const signer = provider.getSigner();
      const smartContract = new ethers.Contract(
        contractAddress, abi, signer
      )
      const myBalance = await smartContract.balanceOf(accounts[0])
      console.log(formatEther(myBalance));
      setBalance(formatEther(myBalance))
    }
    if (isActive) {
      fetchbalance();
    }
  }, [isActive]);

  const [nitiValue, setNitiValue] = useState(0);
  const handleSetNitiValue = (e) => {
    setNitiValue(e.target.value);
  }

  const handleBuy = async () => {
    try {
      if (nitiValue <= 0) {
        return;
      }
      const signer = provider.getSigner();
      const smartContract = new ethers.Contract(
        contractAddress, abi, signer
      );
      const buyValue = parseUnits(nitiValue.toString(), "ether");
      const tx = await smartContract.buy({
        value: buyValue.toString()
      });
      console.log("Transaction hash!!", tx.hash);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>

      <div className="navbar bg-neutral h-20">
        <div className="navbar-start ">
          <a className="btn btn-link no-underline hover:no-underline text-xl text-base-100">
            Buy Pokemon
          </a>
        </div>
        <div className="navbar-center outline outline-2 outline-neutral-content rounded-full p-2">
          <span className="text-base-300 px-3">Accounts : {accounts ? accounts[0] : ''}</span>
        </div>
        <div className="navbar-end flex-3">
          {isActive ?
            <button className="btn btn-ghost text-error" type='button' onClick={handleDisconnect} value={'Disconnect'}>Disconnect</button>
            :
            <button className="btn btn-ghost text-info" type='button' onClick={handleConnect} value={'Connect'}>Connect</button>
          }
        </div>
      </div>
      {isActive && (
        <div className="flex justify-center items-center py-9 text-center drop-shadow-lg bg-base-200">
          <div className="card w-[90vh] bg-base-100 shadow-lg items-center drop-shadow border">
            <div className="card-body ">
              <Poke handleBuy={handleBuy} handleSetNitiValue={handleSetNitiValue} />
            </div>
          </div>
        </div>
      )}
      {!isActive && (
        <div className="bg-base-200 h-[91vh]">
          <div className="container mx-auto h-[70vh] flex justify-center items-center py-8">
            <p className="text-3xl">Please connect To MetaMask!!</p>
          </div>
        </div>
      )}
    </>
  )
}