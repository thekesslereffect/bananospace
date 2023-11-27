import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='font-semibold text-lg gap-4 flex flex-wrap'>
        <Link href={"/projects"} className='hover:text-amber-400 transition duration-300'>Projects</Link>
        <Link href={"/faucet"} className='hover:text-amber-400 transition duration-300'>Faucet</Link>
        <Link href={"/swap"} className='hover:text-amber-400 transition duration-300'>Swap</Link>
        <Link href={"/about"} className='hover:text-amber-400 transition duration-300'>About</Link>
    </div>
  )
}

export default Navigation