import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='font-semibold text-sm text-neutral-600 gap-2 flex flex-wrap'>
        <Link href={"/projects"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Projects</Link>
        <Link href={"/faucet"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Faucet</Link>
        <Link href={"/swap"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Swap</Link>
        <Link href={"/lotto"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Lotto</Link>
        <Link href={"/camo"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Camo</Link>
        <Link href={"/about"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>About</Link>
    </div>
  )
}

export default Navigation