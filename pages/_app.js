import {  
	ThirdwebProvider,
    metamaskWallet,
    coinbaseWallet,
    walletConnect,
    rainbowWallet,
} from '@thirdweb-dev/react';
import '../styles/globals.css';
import Header from '../components/Header';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'polygon';

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
			<div className='relative sm:-8 p-4 min-h-screen flex flex-col justify-between w-full items-center bg-neutral-100 text-neutral-900'>
				<Header/>
				<div className='flex max-w-7xl w-full flex-grow flex-col'>
					<Component {...pageProps} />
				</div>
				<div className='w-full text-center'> 
					©Copyright 2023 Banano.Space
				</div>
			</div>
		</ThirdwebProvider>
	);
}

export default MyApp;
