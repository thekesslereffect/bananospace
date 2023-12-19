import {
    ConnectWallet,
    darkTheme,
  } from "@thirdweb-dev/react";
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

import React, { useState } from 'react';
import { Squircle } from "@squircle-js/react";
import ToonButton from "./ToonButton";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
  };

    return (
        <div className="sticky top-0  flex flex-col w-full items-center z-50 ">
            {/* Desktop View */}
            <div className="hidden md:flex mb-16 py-4 mx-auto justify-between items-stretch px-10 max-w-none w-full backdrop-blur-md">
                <Link href={'/'} className={` flex flex-row  text-neutral-700 text-lg items-center`}>
                  <Image src={'/images/banano-mark-white.png'} width={"40"} height={"40"} alt={"bslogo"} className=" mr-4 filter brightness-[0.2]"/>
                  banano.space
                {/* ▲ banano.space */}
                {/* .space */}
                {/* × */}
                </Link>
                <div className="flex flex-row items-center gap-8  text-sm text-neutral-100 flex-wrap -ml-12">
                    <Link href={"/projects"} className='text-neutral-600 hover:text-neutral-900 transition duration-300'>Projects</Link>
                    <Link href={"/faucet"} className='text-neutral-600 hover:text-neutral-900 transition duration-300'>Faucet</Link>
                    <Link href={"/swap"} className='text-neutral-600 hover:text-neutral-900 transition duration-300'>Swap</Link>
                    <Link href={"/camo"} className='text-neutral-600 hover:text-neutral-900 transition duration-300'>Camo</Link>
                    <Link href={"/about"} className='text-neutral-600 hover:text-neutral-900 transition duration-300'>About</Link>
                </div>
                <div className="flex mt-8 md:m-0 h-14 justify-center items-center">
                <div className="flex rounded-2xl w-max h-full hover:-translate-y-1 hover:scale-105 duration-300 border-2 border-white/50 backdrop-blur-sm bg-[#ffffff30]  shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
                      <ConnectWallet
                        btnTitle={"Connect"}
                        modalSize={"compact"}
                        welcomeScreen={{ title: "" }}
                        displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
                        theme={"light"}
                        className={"connectButton"}          
                    />
                    </div>
                    </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex w-full justify-between items-center p-4 backdrop-blur-md">
                <Link href={'/'} className="flex flex-row font-bold text-lg items-center">
                  <Image src={'/images/banano-mark.png'} width={"40"} height={"40"} alt={"bslogo"} className=""/>
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
                className={`fixed z-50 px-2 bottom-0 left-0 w-full transform transition-transform ${
                    isMenuVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ transition: 'transform 0.3s ease-in-out' }}
            >
                <div className="flex flex-col rounded-2xl items-center text-2xl text-neutral-700 duration-300 max-h-[400px] min-h-[400px] border-2 border-white/50 backdrop-blur-sm bg-[#ffffff70]  p-8   col-span-4 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
                {/* <div className="flex flex-col text-neutral-700 bg-white border shadow-2xl rounded-t-3xl p-4 items-center"> */}
                    <button onClick={toggleMenu} className="flex w-full justify-end mr-4 text-4xl font-semibold">
                        {/* Close Icon */}
                        {"x"}
                        {/* x */}
                    </button>
                    <Link href={"/projects"} onClick={toggleMenu} className='hover:text-neutral-100 hover:bg-neutral-900 px-3 py-2 rounded-full transition duration-300'>Projects</Link>
                    <Link href={"/faucet"} onClick={toggleMenu} className='hover:text-neutral-100 hover:bg-neutral-900 px-3 py-2 rounded-full transition duration-300'>Faucet</Link>
                    <Link href={"/swap"} onClick={toggleMenu} className='hover:text-neutral-100 hover:bg-neutral-900 px-3 py-2 rounded-full transition duration-300'>Swap</Link>
                    <Link href={"/camo"} onClick={toggleMenu} className='hover:text-neutral-100 hover:bg-neutral-900 px-3 py-2 rounded-full transition duration-300'>Camo</Link>
                    <Link href={"/about"} onClick={toggleMenu} className='hover:text-neutral-100 hover:bg-neutral-900 px-3 py-2 rounded-full transition duration-300'>About</Link>
                    <div className="flex flex-col justify-center items-center shadow-lg shadow-lime-400/30 hover:shadow-xl hover:shadow-lime-300/30 overflow-visible rounded-full hover:rotate-0 hover:scale-105 hover:-translate-y-1   duration-300">
                    <div
                        className={`flex w-full justify-center text-3xl px-3 rounded-2xl  
                        bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300
                        text-white
                        duration-300  shadow-[inset_0_20px_40px_-10px_rgba(255,255,255,0.8)]`}
                    >
                            <ConnectWallet
                                btnTitle={"Connect"}
                                modalSize={"compact"}
                                welcomeScreen={{ title: "" }}
                                displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
                                theme={"light"}   
                                className={"connectButton"}
                                          
                            />
                    </div>
                    </div>
                {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;