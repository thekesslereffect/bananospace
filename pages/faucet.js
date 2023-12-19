import React, {useState} from "react";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";
import Image from "next/image";
import Frame from "../components/Frame";

const Faucet = () => {
	const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const claimBanano = async () => {
        const response = await fetch('/api/faucet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ address }),
        });

        const data = await response.json();
        setMessage(data.message || data.error);
    };
	return (
		<>
			<div>
				<HeroText title={"Faucet"} />
			</div>
			<div className="flex flex-col flex-grow justify-center items-center">
				<div className="flex flex-col w-full max-w-md items-center justify-center rounded-lg p-4 gap-4 m-8">
					<Frame className={"rotate-1"}>
						<Image src={"/images/coinGrp1.png"} width={250} height={250} alt={"faucet_img"} className="absolute self-center -translate-y-48 filter brightness-[1.2]"/>
						<input
									type="text"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									placeholder="Enter your Banano address"
									className="flex w-full bg-white rounded-xl justify-end items-center py-3 px-3 text-neutral-700 z-10 mt-20"
							/>
						<ToonButton label={"Claim"} onClick={claimBanano} className={"w-full -rotate-1"} color={"blue"}/>
						{message && <div>{message}</div>}
					</Frame>
				</div>
        <div>Coming SoonTM</div>
				<div>Get free Banano!</div>
			</div>
		</>
	);
};

export default Faucet;
