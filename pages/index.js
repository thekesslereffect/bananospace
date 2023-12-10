import Link from "next/link";
import Button from "../components/Button";
import HeroText from "../components/HeroText";

export default function Home() {
	return (
		<>
			<div className="flex flex-col flex-grow justify-center items-center">
				<HeroText
					title={"Build the Future."}
					description={
						"Join our team of MonKeys in the fight for an instant and feeless future."
					}
					position={"center"}
				/>
				<Button label={"Let's Go"} className={"w-max bg-neutral-900 text-white "} href={"/projects"} />
			</div>
		</>
	);
}
