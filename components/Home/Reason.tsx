import React, { FC } from 'react'

const Reason:FC = () => (
  <>
    <div className='bg-cyan-100 border-b-8 border-black py-32 px-6'>
      <div className="grid grid-cols-1 sm:grid-cols-5 container max-w-screen-xl mx-auto">
        <div className='sm:col-span-2 mb-10 sm:mb-0 px-10 lg:p-20'>
          <img src='/reason.png' className='w-full max-w-screen-sm' />
        </div>
        <div className='sm:col-span-3 flex flex-col justify-center'>
          <p className='font-copper-black text-4xl mb-2'>Why buy a DentedFeel?</p>
          <p className='text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
    </div>
    <img src='/smile.png' className='w-24 h-24 -my-12 mx-auto' />
  </>
)

export default Reason