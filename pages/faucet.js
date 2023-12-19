import React, {useState} from "react";
import HeroText from "../components/HeroText";
import Button from "../components/Button";
import ToonButton from "../components/ToonButton";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";

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

					<div className="flex flex-col gap-8  text-neutral-700 rounded-3xl break-words w-full rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 bg-slate-100 border-8 border-white p-10 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
					<Image src={"/images/coinGrp1.PNG"} width={250} height={250} alt={"faucet_img"} className="absolute self-center -translate-y-48 filter brightness-[1.2]"/>
					<input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Banano address"
								className="flex w-full bg-white rounded-xl justify-end items-center py-3 px-3 text-neutral-700 z-10 mt-20"
            />

					<ToonButton label={"Claim"} onClick={claimBanano} className={"w-full -rotate-1"}/>
					{message && <div>{message}</div>}
					</div>
				
				</div>
        <div>Coming SoonTM</div>
				<div>Get free Banano!</div>
			</div>
		</>
	);
};

export default Faucet;
