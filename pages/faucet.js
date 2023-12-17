import React, {useState} from "react";
import HeroText from "../components/HeroText";
import Button from "../components/Button";
import ToonButton from "../components/ToonButton";

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
				<div className="flex flex-col w-96  items-center justify-center rounded-lg p-4 gap-4 m-8">
					{/* <div className="flex w-full bg-neutral-100 rounded-md justify-end items-center py-3 px-3 font-bold gap-4"> */}
					<input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your Banano address"
								className="flex w-full bg-neutral-100 rounded-md justify-end items-center py-3 px-3 font-bold gap-4"
            />
					{/* </div> */}
					<ToonButton label={"Claim"} onClick={claimBanano} className={"w-full"}/>
					{message && <p>{message}</p>}
				</div>
        <div>Coming SoonTM</div>
				<div>Get free Banano!</div>
			</div>
		</>
	);
};

export default Faucet;
