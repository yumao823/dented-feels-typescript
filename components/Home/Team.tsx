import React, { FC } from 'react'

const TEAMS = [
  { id: 0, image: '/teams/team1.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter', 'youtube'] },
  { id: 1, image: '/teams/team2.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter'] },
  { id: 2, image: '/teams/team3.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter'] },
  { id: 3, image: '/teams/team4.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter'] },
  { id: 4, image: '/teams/team5.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter'] },
  { id: 5, image: '/teams/team6.png', title: 'Member', content:'Web Dev, part of the developer team behind DentedFeels.', socials: ['twitter'] },
]

interface CardProps {
  data: {
    id: number
    image: string
    title: string
    content: string
    socials: string[]
  }
}

const ProfileCard:FC<CardProps> = ({ data }) => (
  <div className='flex flex-col align-center text-center max-w-xs p-10'>
    <img src={data.image} />
    <p className='font-copper-black text-2xl my-3'>{data.title}</p>
    <p className='text-lg mb-3'>{data.content}</p>
    <div className='flex justify-center'>
      {data.socials.map((item, index) => (
          <div key={`sc-${index}`} className='bg-white cursor-pointer flex justify-center items-center border border-4 border-black rounded-full w-9 h-9 mr-2'>
          <img src={`/socials/${item}.svg`} alt={item} />
        </div>
      ))}
    </div>
  </div>
)

const Team: FC = () => (
  <>
    <div className='bg-cyan-100 border-b-8 border-black py-32 px-6'>
      <div className="container max-w-screen-xl mx-auto">
        <p className='font-copper-black text-center text-4xl mb-2'>The Team</p>
        <div className='w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto'>
          {TEAMS.map(item => <ProfileCard key={`pc-${item.id}`} data={item} />)}
        </div>
      </div>
    </div>
    <img src='/cloud-small.png' className='w-24 h-16 -my-8 mx-auto' />
    <div className='bg-blue-400 border-b-8 border-black py-32 px-6'>
      <div className="grid grid-cols-1 sm:grid-cols-2 container max-w-screen-xl mx-auto">
        <div className='flex flex-col font-copper-black mb-10 sm:mb-0'>
          <p className='text-6xl sm:text-8xl mb-3'>Stay<br />Connected</p>
          <div className='flex text-xl'>
            <button className='bg-yellow-300 hover:bg-yellow-500 font-bold py-1 px-4 border border-4 border-black rounded-full'>
              Discord
            </button>
            <button className='bg-white py-1 px-4 border border-4 border-black rounded-full ml-2'>
              Twitter
            </button>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src='/stay-connected.png' className='w-full max-w-xs' />
        </div>
      </div>
    </div>
  </>
)

export default Team