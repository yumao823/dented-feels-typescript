import React, { FC, useEffect, useState } from 'react'
import { useWeb3React } from "@web3-react/core"
import { UserRejectedRequestError } from "@web3-react/injected-connector"
import { injected } from "../connectors"
import useEagerConnect from "../hooks/useEagerConnect"
import useENSName from "../hooks/useENSName"
import useMetaMaskOnboarding from "../hooks/useMetaMaskOnboarding"
import { shortenHex } from "../util"

const SOCIALS = [
  { name: 'opensea', icon: '/socials/opensea.svg' },
  { name: 'twitter', icon: '/socials/twitter.svg' },
  { name: 'discord', icon: '/socials/discord.svg' },
]

type AccountProps = {
  triedToEagerConnect: boolean;
};

const Header:FC = () => {
  const { active, error, activate, chainId, account, setError } =
    useWeb3React()

  const {
    isMetaMaskInstalled,
    isWeb3Available,
    startOnboarding,
    stopOnboarding,
  } = useMetaMaskOnboarding()

  const triedToEagerConnect = useEagerConnect()

  const [connecting, setConnecting] = useState(false)
  useEffect(() => {
    if (active || error) {
      setConnecting(false)
      stopOnboarding()
    }
  }, [active, error, stopOnboarding])

  const ENSName = useENSName(account)

  if (error) {
    return null;
  }

  if (!triedToEagerConnect) {
    return null;
  }

  return (
    <div className='bg-yellow-100 py-4 px-2'>
      <div className='container max-w-screen-xl mx-auto flex justify-between items-center'>
        <div className='hidden sm:flex w-full'>
          <img src='/logo.png' alt='logo' className='w-32 h-8' />
          <div className='flex items-center ml-auto'>
            {SOCIALS.map(item => (
              <div key={`sc-${item.name}`} className='bg-white cursor-pointer flex justify-center items-center border border-4 border-black rounded-full w-9 h-9 mr-1'>
                <img src={item.icon} alt={item.name} />
              </div>
            ))}
            {(typeof account !== "string") ? (
              isWeb3Available ? (
                <button
                  className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full'
                  disabled={connecting}
                  onClick={() => {
                    setConnecting(true);
      
                    activate(injected, undefined, true).catch((error) => {
                      if (error instanceof UserRejectedRequestError) {
                        setConnecting(false);
                      } else {
                        setError(error);
                      }
                    });
                  }}
                >
                  {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
                </button>
              ) : (
                <button className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full' onClick={startOnboarding}>Install Metamask</button>
              )
            ) : (
              <button className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 border border-4 border-black rounded-full'>
                {ENSName || `${shortenHex(account, 4)}`}
              </button>
            )}
          </div>
        </div>
        <div className='flex grid grid-cols-1 sm:hidden w-full'>
          <div className='flex items-center mb-2'>
            <img src='/logo.png' alt='logo' className='w-32 h-8 mr-auto' />
            {SOCIALS.map(item => (
              <div key={`sc-${item.name}`} className='bg-white cursor-pointer flex justify-center items-center border border-4 border-black rounded-full w-9 h-9 mr-1'>
                <img src={item.icon} alt={item.name} />
              </div>
            ))}
          </div>
          {(typeof account !== "string") ? (
            isWeb3Available ? (
              <button
                className='bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 ml-auto border border-4 border-black rounded-full'
                disabled={connecting}
                onClick={() => {
                  setConnecting(true);
    
                  activate(injected, undefined, true).catch((error) => {
                    if (error instanceof UserRejectedRequestError) {
                      setConnecting(false);
                    } else {
                      setError(error);
                    }
                  });
                }}
              >
                {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
              </button>
            ) : (
              <button className='w-fit bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 ml-auto border border-4 border-black rounded-full' onClick={startOnboarding}>Install Metamask</button>
            )
          ) : (
            <button className='w-fit bg-yellow-300 hover:bg-yellow-500 font-copper-black font-bold text-xl py-1 px-4 ml-auto border border-4 border-black rounded-full'>
              {ENSName || `${shortenHex(account, 4)}`}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header