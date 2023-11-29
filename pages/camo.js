import React from "react";
import HeroText from "../components/HeroText";
import Button from "../components/Button";

const Camo = () => {
	return (
		<>
			<div>
				<HeroText title={"Camo"} divider={true} />
			</div>
			<div className="flex flex-col w-full items-center">
				<div className="flex flex-col w-96 bg-gray-200 items-center justify-center rounded-lg p-4 gap-4 m-8">
					<div className="flex w-full bg-neutral-100 rounded-md justify-end items-center py-3 px-3 font-bold gap-4">
						<div>█████</div>
					</div>
					<Button label={"obfuscate."} />
				</div>
        <div>Coming SoonTM</div>
				<p>████priv█cy.lay█r████</p>
				<div></div>
			</div>
		</>
	);
};

export default Camo;
