import React, { FC } from 'react'

const SOCIALS = [
  { name: 'instagram', icon: '/socials/instagram.png' },
  { name: 'opensea', icon: '/socials/opensea.svg' },
  { name: 'twitter', icon: '/socials/twitter.svg' },
  { name: 'discord', icon: '/socials/discord.svg' },
]

const Footer: FC = () => (
  <div className='bg-green-400 flex flex-col items-center font-copper-black text-center py-12'>
    <div className='flex mb-4'>
      {SOCIALS.map(item => (
        <div key={`sc-${item.name}`} className='bg-white cursor-pointer flex justify-center items-center border border-4 border-black rounded-full w-9 h-9 mr-1 p-1'>
          <img src={item.icon} alt={item.name} />
        </div>
      ))}
    </div>
    <button className='bg-white text-xl py-1 px-10 border border-4 border-black rounded-full mb-3'>
      0xb47e...3bbb
    </button>
    <span className='text-xl'>©2022 DentedFeels. All rights reserved.</span>
  </div>
)

export default Footer