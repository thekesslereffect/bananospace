import Button from "../components/Button";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";

const Swap = () => {
	return (
		<>
			<div>
				<HeroText title={"Swap"} />
			</div>
			<div className="flex flex-col flex-grow justify-center items-center">
				<div className="flex flex-col w-96  items-center justify-center rounded-lg p-4 gap-4 m-8">
					<div className="flex w-full bg-[#1d1c20] rounded-xl justify-end items-center py-3 px-3 font-bold gap-4">
						<div>20,000</div>
						<div>wBAN</div>
					</div>
					<ToonButton label={"↓"} className={"text-sm  rotate-0"}/>
					<div className="flex w-full bg-[#1d1c20] rounded-xl justify-end items-center py-3 px-3 font-bold gap-4">
						<div>100</div>
						<div>BAN</div>
					</div>
					<ToonButton label={"Swap"} className={"w-full"}/>
				</div>
        <div>Coming SoonTM</div>

				<div>Swap your Banano to wBan and back. </div>
			</div>
		</>
	);
};

export default Swap;
