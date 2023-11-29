import React from "react";
import HeroText from "../components/HeroText";
import Button from "../components/Button";

const Faucet = () => {
	return (
		<>
			<div>
				<HeroText title={"Faucet"} divider={true} />
			</div>
			<div className="flex flex-col flex-grow justify-center items-center">
				<div className="flex flex-col w-96  items-center justify-center rounded-lg p-4 gap-4 m-8">
					<div className="flex w-full bg-neutral-100 rounded-md justify-end items-center py-3 px-3 font-bold gap-4">
						<div>ban_123...</div>
					</div>
					<Button label={"Claim"} />
				</div>
        <div>Coming SoonTM</div>
				<div>Get free Banano!</div>
			</div>
		</>
	);
};

export default Faucet;
