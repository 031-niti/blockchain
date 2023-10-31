"use client"
import { formatEther, parseUnits } from "@ethersproject/units"
import { initializeConnector } from "@web3-react/core"
import { MetaMask } from "@web3-react/metamask"
import { ethers } from "ethers"
import React, { useState, useEffect } from "react"
import abi from "./abi.json"

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
  const handleSetNitiValue = (e) =>{
    setNitiValue(e.target.value);
  }
  

  const handleBuy = async() =>{
    try{
      if (nitiValue <= 0) {
        return;
      }
      const signer = provider.getSigner();
      const smartContract = new ethers.Contract(
        contractAddress, abi, signer
      )
      const buyValue = parseUnits(nitiValue.toString(), "ether");
      const tx = await smartContract.buy({
        value:buyValue.toString()
      });
      console.log("Transaction hash!!",tx.hash);
    }catch(err){
      console.log(err);
    }
  };
  
  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start ">
          <a className="btn btn-link no-underline hover:no-underline  text-xl text-base-100">
            BlockChain
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
      {/* card */}
      <div className="flex justify-center items-center m-24 text-center drop-shadow-lg ">
        <div className="card w-[36rem] bg-base-100 shadow-lg w-[20rem] items-center drop-shadow border">
          <div className="card-body ">
            <div className="mt-5">
              <div className="indicator font-bold mb-2">
                <span className="indicator-item indicator-top indicator-center badge text-lg border-none w-24 bg-base-200 p-3">ChainId</span>
                <p className="input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 ">{chainid}</p>
              </div>
              {/* <p>IsActive:  {isActive.toString()}</p> */}
              <div className="mt-5">
                <div className="indicator font-bold mb-2">
                  <span className="indicator-item indicator-top indicator-center badge border-none text-[18px] w-28 bg-base-200 p-3">Accounts</span>
                  <p className="input input-bordered w-[26rem] flex justify-center items-center text-sm p-6 bg-base-200 ">{accounts ? accounts[0] : ''}</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="indicator font-bold mb-2">
                  <span className="indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3">Balance</span>
                  <p className="input input-bordered w-36 flex justify-center items-center text-sm p-6 bg-base-200 ">{isActive && balance}</p>
                </div>
              </div>
              <div className="mt-5">
                <div className="indicator font-bold mb-2">
                  <span className="indicator-item indicator-top indicator-center badge border-none text-[18px] w-24 bg-base-200 p-3">Buy</span>
                  <input className="input input-bordered w-48 flex justify-center items-center text-sm p-6 bg-base-200 text-center" onChange={handleSetNitiValue} />
                </div>
              </div>
              <a className="btn btn-error text-neutral w-28 hover:bg-red-500 hover:text-base-100" onClick={handleBuy}>BUY</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
