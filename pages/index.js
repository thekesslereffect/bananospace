import Link from "next/link";
import Button from "../components/Button";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";
import { Squircle } from "@squircle-js/react";
import Image from "next/image";
import Frame from "../components/Frame";

export default function Home() {
	return (
		<>
			<div className="relative flex flex-col h-screen -mt-28 justify-center items-center ">
				<Image
					src={"/images/render1_bottom.png"}
					height={300}
					width={300}
					alt={"monkeybottom_img"}
					className="absolute z-0 translate-x-[0px] -translate-y-[240px] scale-125 filter brightness-[1.2]"
				/>
				<Image
					src={"/images/render1_top.png"}
					height={300}
					width={300}
					alt={"monkeytop_img"}
					className="absolute z-20 translate-x-[0px] -translate-y-[240px] scale-125 filter brightness-[1.2]"
				/>

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

				<ToonButton
					label={"Let's Go!"}
					href={"/projects"}
					className={"rotate-3 mt-16"}
				/>
			</div>
			<div className="relative max-w-7xl mx-auto w-full">

				<div className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-14 mb-8">
					<Frame color={""} className={"col-span-2 justify-between -rotate-1"}>
						<HeroText
							title={"Fast"}
							description={
								"8x faster and 8x more energy efficient than Nano!"
							}
							position={"center"}
							classNameTitle={"text-yellow-500"}
							classNameDescription={"text-yellow-500"}
						/>
						<ToonButton color={"yellow"} label={"Yellowpaper"} href={
							"https://banano.cc/yellowpaper#:~:text=On%20average%2C%20generation%20times%20are%208x%20faster%20for%20BANANO%20than%20for%20NANO%20while%20consuming%208x%20less%20electricity."
						} newWindow={true}/>
					</Frame>

					<Frame color={""} className={"col-span-2 justify-between rotate-1"}>
						<HeroText
							title={"Secure"}
							description={
								"Every Banano is secured by a decentralized network of community controlled nodes."
							}
							position={"center"}
							classNameTitle={"text-blue-500"}
							classNameDescription={"text-blue-500"}
						/>
						<ToonButton color={"blue"} label={"Run a Node!"} href={"https://github.com/BananoCoin/banano/wiki/Building-the-Bananode-Docker-image"} newWindow={true}/>
					</Frame>

					<Frame color={"black"} className={"col-span-2 justify-between -rotate-1"}>
						<HeroText
							title={"Private"}
							description={
								"With CamoBanano you can send your funds anonymously."
							}
							position={"center"}
						/>
						<ToonButton label={"Learn More"} color={"green"} href={"https://medium.com/banano/introducing-camo-banano-bananos-privacy-layer-98a5bb0ecdb1"} newWindow={true}/>
					</Frame>
				</div>
				<Frame color={""} className={"justify-between"}>
						<HeroText
							title={"Join the Community!"}
							description={
								"Join the Discord or Reddit to explore more!"
							}
							position={"center"}
						/>
						<div className="flex gap-4 items-center justify-center">
							<ToonButton label={"Discord"} color={"purple"} href={"https://chat.banano.cc/"} newWindow={true}/>
							<ToonButton label={"Reddit"} color={"orange"} href={"https://www.reddit.com/r/banano/"} newWindow={true}/>
						</div>
					</Frame>
			</div>
		</>
	);
}
