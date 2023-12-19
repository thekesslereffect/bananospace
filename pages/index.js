import Link from "next/link";
import Button from "../components/Button";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="relative flex flex-col h-screen -mt-28 justify-center items-center ">
			
			
					<Image src={"/images/render1_bottom.png"} height={300} width={300} alt={"monkeybottom_img"} className="absolute z-0 translate-x-[0px] -translate-y-[240px] scale-125 filter brightness-[1.2]"/>
					<Image src={"/images/render1_top.png"} height={300} width={300} alt={"monkeytop_img"} className="absolute z-20 translate-x-[0px] -translate-y-[240px] scale-125 filter brightness-[1.2]"/>
			
				{/* <Image src={"/images/banano-mark-white.png"} height={200} width={200} className="absolute z-0 rotate-12 -translate-x-[300px] -translate-y-[300px] scale-50 filter brightness-[.2] opacity-10"/>
				<Image src={"/images/banano-mark-white.png"} height={200} width={200} className="absolute z-0  -rotate-6 translate-x-[500px] -translate-y-[140px] scale-50 filter brightness-[.2] opacity-10"/>
				<Image src={"/images/banano-mark-white.png"} height={300} width={300} className="absolute z-0 -rotate-12 -translate-x-[300px] translate-y-[340px] scale-75 filter brightness-[.2] opacity-10"/>
				<Image src={"/images/banano-mark-white.png"} height={200} width={200} className="absolute z-0  -rotate-12 -translate-x-[1000px] -translate-y-[0px] scale-75 filter brightness-[.2] opacity-10"/>
				<Image src={"/images/banano-mark-white.png"} height={300} width={300} className="absolute z-0  rotate-12 translate-x-[1000px] translate-y-[500px] scale-100 filter brightness-[.2] opacity-10"/>
				<Image src={"/images/banano-mark-white.png"} height={500} width={500} className="absolute z-0  -rotate-12 -translate-x-[800px] translate-y-[800px] scale-100 filter brightness-[.2] opacity-10"/> */}
				
				
				
				{/* <Image src={"/images/coin3.png"} height={200} width={200} className="absolute z-0 inset-0 m-auto -translate-x-[300px] -translate-y-[300px] scale-100 filter brightness-[1.2]"/>
				<Image src={"/images/coin2.png"} height={200} width={200} className="absolute z-0 inset-0 m-auto translate-x-[500px] -translate-y-[140px] scale-100 filter brightness-[1.2]"/>
				<Image src={"/images/coin1.png"} height={350} width={350} className="absolute z-0 inset-0 m-auto -translate-x-[300px] translate-y-[340px] scale-100 filter brightness-[1.2]"/> */}

				{/* <Image src={"/images/render1.png"} height={300} width={300} className="absolute z-0 inset-0 m-auto -translate-x-[400px] translate-y-[240px] scale-125"/> */}

				<HeroText
					title={"Build the Future."}
					description={
						"Join our team of MonKeys in the fight for an instant and feeless future."
					}
					position={"center z-10"}
				/>
				{/* <Button label={"Let's Go"} className={"w-max"} href={"/projects"} /> */}

					<ToonButton label={"Let's Go!"} href={"/projects"} className={"rotate-3"}/>
			
				
			</div>
			<div className="relative max-w-7xl mx-auto w-full">
				<div className="relative grid grid-rows-3 grid-cols-4 gap-6 pt-14">
				<div className="rounded-3xl overflow-clip rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] bg-[#1d1c20]  p-8   col-span-1 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
					<Image src={"/images/coinGrp1.png"} alt={"coingrp_img"} layout="fill" objectFit="contain" className="absolute inset-0 m-auto -translate-x-[0px] translate-y-[40px] scale-125 filter brightness-[1.2]"/>
						<div className="relative" id="card-info">
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
						</div>
					</div>
					<div className="rounded-3xl overflow-clip -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] bg-[#1d1c20]  p-8   col-span-2 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
						<div className="relative flex flex-col h-full justify-between" id="card-info">
							<div>
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
							</div>
							<div className="flex w-full justify-end">
							<ToonButton label={"Click Me"} className={"rotate-3"} href={"/projects"} />
							</div>
							
						</div>
					</div>
					<div className="rounded-3xl overflow-clip rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] bg-[#1d1c20]  p-8   col-span-1 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
						<div className="relative" id="card-info">
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
						</div>
					</div>

					<div className="rounded-3xl overflow-clip rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] bg-[#1d1c20]  p-8   col-span-2 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
						<div className="relative" id="card-info">
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
						</div>
					</div>
					<div className="rounded-3xl overflow-clip -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] border-8 border-white/50 backdrop-blur-sm bg-[#ffffff30]  p-8   col-span-2 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">
						<div className="relative flex flex-col h-full justify-between" id="card-info">
							<div>
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
							</div>
							<div className="flex w-full justify-center">
							<ToonButton label={"Click Me"} className={"-rotate-3"} href={"/projects"} />
							</div>
							
						</div>
					</div>
					<div className="rounded-3xl overflow-clip -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 max-h-[400px] min-h-[400px] border-8 border-white/50 backdrop-blur-sm bg-[#ffffff30]  p-8 col-span-4 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)]">
						<div className="relative" id="card-info">
							<div className="mt-0 mb-2 text-xl ">Heading</div>
							<div className=" text-neutral-500 font-medium">
								Description of the card.
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
