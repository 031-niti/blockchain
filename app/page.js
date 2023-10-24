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

  return (
    <>
      <div className="navbar bg-neutral">
        <div className="navbar-start ">
          <a className="btn btn-link no-underline hover:no-underline  text-xl text-base-100">
            BlockChain
          </a>
        </div>
        <div className="navbar-center outline outline-2 outline-neutral-content rounded-full p-2">
          <span className="text-base-300">Accounts : {accounts ? accounts[0] : ''}</span>
        </div>
        <div className="navbar-end flex-3">
          {isActive ?
            <button class="btn btn-ghost text-error" type='button' onClick={handleDisconnect} value={'Disconnect'}>Disconnect</button>
            :
            <button class="btn btn-ghost text-primary" type='button' onClick={handleConnect} value={'Connect'}>Connect</button>
          }
        </div>
      </div>
      {/* card */}
      <div class="flex justify-center items-center m-24">
        <div class="card w-96 bg-base-200 shadow-lg w-[20rem] items-center">
        <div class="card-body">
            <h2 class="card-title">ChainId:  {chainid}</h2>
            <p>IsActive:  {isActive.toString()}</p>
        </div>
      </div>
      </div>  
    </>
  )
}
