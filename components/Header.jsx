import {
    ConnectWallet,
    darkTheme,
  } from "@thirdweb-dev/react";
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";


// const Header = () => {
//   return (
//     <>
//         <div className='flex flex-col md:flex-row max-w-[97rem] w-full justify-center md:justify-between  mb-20 items-center '>
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <h1 className='font-black text-2xl transition duration-300'>
                // <Link href={'/'} className="flex flex-row">
                //   <Image src={'/images/banano-mark.png'} width={"30"} height={"30"} className=" -rotate-12"/>
                // {/* ▲ banano.space */}
                // .space
                // {/* × */}
                
                // </Link>
//             </h1>
//             <Navigation/>
//           </div>
//           <div className="flex mt-8 md:m-0 h-12">
//             <ConnectWallet
//               btnTitle={"Connect"}
//               modalSize={"compact"}
//               welcomeScreen={{ title: "" }}
//               displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
//               theme={"dark"}
              
//           />
//           </div>
//         </div>
        
//     </>
//   )
// }

// export default Header

// Header.js

import React, { useState } from 'react';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
  };

    return (
        <div className="flex flex-col w-full items-center">
            {/* Desktop View */}
            {/* <div className="hidden md:flex justify-between items-center p-4"> */}
            <div className="hidden md:flex max-w-[97rem] mb-16 w-full justify-between items-center ">
                {/* <div className="flex flex-col md:flex-row items-center gap-8">
                    <span className="text-xl font-bold">Website Name</span>
                    <a href="#" className="ml-4">Link 1</a>
                    <a href="#" className="ml-4">Link 2</a>
                </div> */}
                <div className="flex flex-row items-center gap-8">
                <Link href={'/'} className="flex flex-row font-bold text-lg items-center">
                  <Image src={'/images/banano-mark.png'} width={"40"} height={"40"} className=""/>
                {/* ▲ banano.space */}
                {/* .space */}
                {/* × */}
                
                </Link>
                <div className='font-semibold text-sm text-neutral-600  flex flex-wrap'>
                    <Link href={"/projects"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Projects</Link>
                    <Link href={"/faucet"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Faucet</Link>
                    <Link href={"/swap"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Swap</Link>
                    <Link href={"/camo"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Camo</Link>
                    <Link href={"/about"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>About</Link>
                </div>
                </div>
                <div className="flex mt-8 md:m-0 h-12">
                      <ConnectWallet
                        btnTitle={"Connect"}
                        modalSize={"compact"}
                        welcomeScreen={{ title: "" }}
                        displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
                        theme={"dark"}
                        className={"connectButton"}          
                    />
                    </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex w-full justify-between items-center p-4">
                <Link href={'/'} className="flex flex-row font-bold text-lg items-center">
                  <Image src={'/images/banano-mark.png'} width={"40"} height={"40"} className=""/>
                {/* ▲ banano.space */}
                {/* .space */}
                {/* × */}
                
                </Link>
                <button onClick={() => setIsMenuVisible(true)}>
                    {/* Hamburger Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </button>
            </div>

          {/* Overlay for Blurry Background */}
          <div 
                className={`fixed inset-0 ${
                    isMenuVisible ? 'block' : 'hidden'
                }`}
                style={{ backdropFilter: isMenuVisible ? 'blur(5px)' : 'none', transition: 'backdrop-filter 0.3s ease-in-out' }}
                onClick={toggleMenu} // Close menu when clicking on the background
            />

            {/* Mobile Menu Modal */}
            <div
                className={`fixed px-2 bottom-0 left-0 w-full transform transition-transform ${
                    isMenuVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                <div className="flex flex-col bg-white border shadow-2xl rounded-t-3xl p-4 items-center">
                    <button onClick={toggleMenu} className="flex w-full justify-end mr-4 text-4xl font-semibold">
                        {/* Close Icon */}
                        {"×"}
                        {/* x */}
                    </button>
                    <Link href={"/projects"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Projects</Link>
                    <Link href={"/faucet"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Faucet</Link>
                    <Link href={"/swap"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Swap</Link>
                    <Link href={"/camo"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>Camo</Link>
                    <Link href={"/about"} className='hover:bg-neutral-100 px-3 py-2 rounded-full transition duration-300'>About</Link>
                    <div className="flex mt-4  h-12">
                      <ConnectWallet
                        btnTitle={"Connect"}
                        modalSize={"compact"}
                        welcomeScreen={{ title: "" }}
                        displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
                        theme={"dark"}             
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;