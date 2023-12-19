import Image from "next/image";
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
				<div className="flex flex-col w-full max-w-md  items-center justify-center rounded-lg p-4 gap-4 m-8">

				<div className="flex flex-col gap-8 text-neutral-700 rounded-3xl break-words w-full rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 bg-slate-100 border-8 border-white p-10 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
				<Image src={"/images/coin1.PNG"} width={200} height={200} className="absolute self-center -translate-y-36 filter brightness-[1.2]"/>
				<div className="flex gap-4 mt-20">
						<div className="flex w-full bg-white rounded-xl justify-end items-center py-3 px-3">
							100.00
						</div>
						<div className="shadow-lg shadow-indigo-200 rounded-xl">
						<div className="flex rounded-xl justify-end items-center py-3 px-3 text-white bg-gradient-to-r from-purple-300 to-indigo-400 shadow-[inset_0_20px_20px_-10px_rgba(255,255,255,0.8)] cursor-pointer">
							wBAN
						</div>
						</div>
					</div>
					{/* <ToonButton label={"↓"} className={"text-sm  rotate-0"}/> */}
					<div className="self-center">You'll get...</div>
					<div className="flex gap-4">
						<div className="flex w-full shadow-lg shadow-amber-200 rounded-xl">
							<div className="flex w-full bg-slate-200 rounded-xl justify-center items-center py-3 px-3 text-white bg-gradient-to-r from-yellow-300 to-amber-300 shadow-[inset_0_20px_20px_-10px_rgba(255,255,255,0.8)]">
								100.00 BAN
							</div>
						</div>
					</div>
					
					<ToonButton label={"Swap"} className={"w-full"}/>
					</div>
				</div>
        <div>Coming SoonTM</div>

				<div>Swap your Banano to wBan and back. </div>
			</div>
		</>
	);
};

export default Swap;
