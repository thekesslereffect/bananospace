import {
	ThirdwebProvider,
	metamaskWallet,
	coinbaseWallet,
	walletConnect,
	rainbowWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

import localFont from '@next/font/local'

// const myLocalFont = localFont({src: "fonts/Scrap.ttf"})
const myLocalFont = localFont({src: "fonts/Candy Beans.otf"})






// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";
import { SquircleNoScript } from "@squircle-js/react"

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			activeChain={activeChain}
			clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
			supportedWallets={[
				metamaskWallet({ recommended: true }),
				coinbaseWallet(),
				walletConnect(),
				rainbowWallet(),
			]}
		>
			{/* <div className="relative bg-gradient-to-br from-[#1e1e20] to-[#0e0e11]  text-neutral-50 w-full "> */}
			<div className="relative bg-gradient-to-br from-gray-100 via-slate-200 to-stone-300  text-neutral-50 w-full ">

				{/* Background with repeating image */}
				{/* <div
					className=" absolute top-0 bottom-0 left-0 right-0 w-full bg-[url('/images/banano_tile.png')] bg-cover bg-repeat"
					style={{ backgroundSize: "20%", opacity: "0.015" }} // Adjust the size as needed
				></div> */}

				{/* Content Wrapper */}
				<div className="relative w-full  ">
					<div className={myLocalFont.className}>
					<div className="p-4 flex flex-col min-h-screen w-full items-center">
						<Header />
						<div className="flex-grow flex flex-col max-w-[97rem] w-full">
							<SquircleNoScript />
							<Component {...pageProps} />
						</div>
						<Footer />
					</div>
					</div>
				</div>
			</div>
		</ThirdwebProvider>
	);
}

export default MyApp;
