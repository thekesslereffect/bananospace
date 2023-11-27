import React from 'react'
import HeroText from '../components/HeroText'
import Button from '../components/Button'

const faucet = () => {
  return (
    <>
    <div>
        <HeroText title={"faucet."} description={"Coming SoonTM"}/>
    </div>
    <div className='flex flex-col w-full items-center'>
    <div className='flex flex-col w-96 bg-gray-200 items-center justify-center rounded-2xl p-4 gap-4 m-8'>
      <div className='flex w-full bg-neutral-100 rounded-xl justify-end items-center py-3 px-3 font-bold gap-4'>
        <div>
          ban_123...
        </div>
      </div>
    <Button label={"claim."}/>

    </div>

    <div>
      Get free Banano!
    </div>
  </div>
  </>
  )
}

export default faucet