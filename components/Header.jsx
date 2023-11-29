import {
    ConnectWallet,
    darkTheme,
  } from "@thirdweb-dev/react";
import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row max-w-[97rem] w-full justify-center md:justify-between  mb-20 items-center '>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <h1 className='font-black text-2xl transition duration-300'>
                <Link href={'/'} className="flex flex-row">
                  <Image src={'/images/banano-mark.png'} width={"30"} height={"30"} className=" -rotate-12"/>
                {/* ▲ banano.space */}
                .space
                {/* × */}
                
                </Link>
            </h1>
            <Navigation/>
          </div>
          <div className="flex mt-8 md:m-0 h-12">
            <ConnectWallet
              btnTitle={"Connect"}
              modalSize={"compact"}
              welcomeScreen={{ title: "" }}
              displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
              theme={"dark"}
              
          />
          </div>
        </div>
        
    </>
  )
}

export default Header