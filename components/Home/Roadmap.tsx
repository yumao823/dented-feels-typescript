import React, { FC } from 'react'

const ROADMAPS1 = [
  { id: 0, image: '/roadmap/merch.png', title: 'Exclusive Merch', content: 'Lorem Ipsum is simply dummy beta text of the printing and typesetting industry. Lorem Ipsum has been the indu.' },
  { id: 1, image: '/roadmap/wallet.png', title: 'Community Wallet', content: 'Lorem Ipsum is simply dummy beta text of the printing and typesetting industry. Lorem Ipsum has been the indu.' },
  { id: 2, image: '/roadmap/charity.png', title: 'Creative Charity', content: 'Lorem Ipsum is simply dummy beta text of the printing and typesetting industry. Lorem Ipsum has been the indu.' },
]

const ROADMAPS2 = [
  { id: 0, image: '/roadmap/merch.png', title: 'Exclusive Merch', content: 'Lorem Ipsum is simply dummy beta text of the printing and typesetting industry. Lorem Ipsum has been the indu.' },
  { id: 1, image: '/roadmap/wallet.png', title: 'Community Wallet', content: 'Lorem Ipsum is simply dummy beta text of the printing and typesetting industry. Lorem Ipsum has been the indu.' },
]

interface CardProps {
  data: {
    id: number
    image: string
    title: string
    content: string
  }
}

const Card: FC<CardProps> = ({ data }) => (
  <div className='flex flex-col align-center text-center max-w-xs p-10'>
    <img src={data.image} />
    <p className='font-copper-black text-2xl my-3'>{data.title}</p>
    <p className='text-lg mb-3'>{data.content}</p>
  </div>
)

const Roadmap = () => (
  <div className='relative'>
    <div className='border-b-8 border-black py-32 px-6'>
      <div className='container max-w-screen-xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='text-6xl sm:text-7xl font-copper-black mb-6'>The<br />Roadmap</div>
          <div className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.</div>
        </div>
        <div className='w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto'>
          {ROADMAPS1.map(item => <Card key={`rm1-${item.id}`} data={item} />)}
        </div>
        <div className='w-fit grid grid-cols-1 sm:grid-cols-2 mx-auto'>
          {ROADMAPS2.map(item => <Card key={`rm2-${item.id}`} data={item} />)}
        </div>
      </div>
    </div>
    <img src='/drop.png' className='w-18 h-24 -my-12 mx-auto' />
    <img src='/cloud3.png' className='hidden md:block absolute bottom-96 md:-right-20 lg:right-0 h-52' />
  </div>
)

export default Roadmap