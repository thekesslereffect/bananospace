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

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

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
			<div className="p-4 flex flex-col min-h-screen w-full items-center bg-white text-neutral-900">
				<Header />
				<div className="flex-grow flex flex-col max-w-[97rem] w-full ">
					<Component {...pageProps} />
				</div>
				<Footer />
			</div>
		</ThirdwebProvider>
	);
}

export default MyApp;
