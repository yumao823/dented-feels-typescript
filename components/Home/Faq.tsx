import React, { FC, useState } from 'react'

const FAQS = [
  'What is the supply and mint price?',
  'When is the launch date?',
  'What is the utility?',
  'What is an NFT?',
  'How can i purchase a DentedFeel?',
]

interface ItemProps {
  data: String
}

const Item: FC<ItemProps> = ({ data }) => {
  const [opened, setOpened] = useState(false)

  return (
    <div
      className='max-w-screen-sm bg-white font-copper-black text-xl border border-4 border-black p-4 mb-3 mx-auto rounded-4xl'
      >
        <div className='flex items-center cursor-pointer' onClick={() => setOpened(!opened)}>
          <p className='mr-2'>{data}</p>
          <p className='ml-auto'>{opened ? '-' : '+'}</p>
        </div>
        <div className={`transition-max-height duration-700 ease-in-out overflow-hidden ${opened ? "max-h-96" : "max-h-0"}`} >
          {[1, 2, 3, 4, 5].map(item => (
            <p key={`op-${item}`} className='mt-2 cursor-pointer'>Option {item}</p>
          ))}
        </div>
    </div>
  )
}

const Faq: FC = () => (
  <>
    <div className='bg-cyan-100 font-copper-black border-b-8 border-black py-24 px-6 '>
      <p className='text-4xl text-center mb-6'>FAQ</p>
      <div className='accordian  accordion-flush'>
        {FAQS.map((item, index) => <Item key={`faq-${index}`} data={item} />)}
      </div>
    </div>
    <img src='/star.png' className='w-20 h-20 -mt-16 -mb-4 mx-auto' />
  </>
)

export default Faq