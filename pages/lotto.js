import React, { useState } from "react";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";
import Image from "next/image";
import Frame from "../components/Frame";

const Lotto = () => {
	return (
		<>
			
			<HeroText title={"Lotto"} className={"p-4"}/>
			
			<div className="flex flex-col flex-grow justify-center items-center">
				<div className="flex flex-col w-full max-w-md items-center justify-center rounded-lg p-4 gap-4 m-8">
					<Frame className={""}>
						<Image
							src={"/images/render1.png"}
							width={250}
							height={250}
							alt={"faucet_img"}
							className="absolute self-center -translate-y-64 filter brightness-[1.2]"
						/>
						<div className="flex aspect-square bg-white rounded-2xl items-center justify-center">
							QR CODE GOES HERE
						</div>
						<div className="flex flex-col items-center ">
							<div className="text-6xl">20,030</div>
							<div className="text-5xl">BANANO!</div>
						</div>
					</Frame>
					<Frame className={"-rotate-1"}>
						<div>Next Drawing in INFINITE minutes...</div>
					</Frame>
				</div>
				<div>Coming SoonTM</div>
			</div>
		</>
	);
};

export default Lotto;
