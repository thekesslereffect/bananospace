import {
    ConnectWallet,
    darkTheme,
  } from "@thirdweb-dev/react";
import Navigation from "./Navigation";
import Link from "next/link";

const Header = () => {
  return (
    <>
        <div className='flex flex-col md:flex-row w-full justify-center md:justify-between  mb-16 items-center '>
          <div className="flex flex-col md:flex-row items-end gap-8">
            <h1 className='font-extrabold text-4xl hover:text-amber-400 transition duration-300'>
                <Link href={'/'}>
                  banano.space
                </Link>
            </h1>
            <Navigation/>
          </div>
          <div className="flex mt-8 md:m-0">
            <ConnectWallet
              btnTitle={"Connect"}
              modalSize={"compact"}
              welcomeScreen={{ title: "" }}
              displayBalanceToken={{ 137: "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034"}}
              
          />
          </div>
        </div>
        
    </>
  )
}

export default Header