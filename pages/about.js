import Button from "../components/Button";
import Frame from "../components/Frame";
import Hero2Text from "../components/Hero2Text";
import HeroText from "../components/HeroText";
import ToonButton from "../components/ToonButton";
import {
	bananoSpaceContract,
	githubProject,
	wrappedBananoContract,
} from "../utils";

const About = () => {
	return (
		<>
			<HeroText
				title={"About"}
				description={"Dont Trust. Verify."}
				className={"p-4"}
			/>

			<div className="flex flex-col flex-grow justify-center items-center">
				<div className="flex flex-col md:flex-row w-full max-w-7xl items-start md:items-center justify-center p-4 gap-4 m-8 text-neutral-700">
					<div className="flex flex-col gap-4">
						<div className="text-3xl font-extrabold">Sources</div>

						<ToonButton
							label={"Github"}
							newWindow={true}
							href={githubProject}
							className={"max-w-max"}
						/>

						<ToonButton
							label={"banano.space project contract"}
							newWindow={true}
							href={`https://polygonscan.com/address/${bananoSpaceContract}#code`}
							className={"max-w-max"}
						/>

						<ToonButton
							label={"wBAN contract"}
							newWindow={true}
							href={`https://polygonscan.com/address/${wrappedBananoContract}#code`}
							className={"max-w-max"}
						/>
					</div>

					<Hero2Text
						title={"who."}
						description={
							"Hey! My name is Cosmic. I am a wannabe Banano developer with a passion for web3."
						}
						className={"my-8"}
					/>
					<Hero2Text
						title={"what."}
						description={
							"banano.space is a central hub where the Banano community can share their projects and earn wBan (and potentially actual Banano in the future if I can figure out a decent database)."
						}
						className={"mb-8"}
					/>
					<Hero2Text
						title={"when."}
						description={"Do it! Just. Do it!"}
						className={"mb-8"}
					/>
					<Hero2Text
						title={"where."}
						description={
							"Usually people create Github pages for their projects. Others create whole websites like this!"
						}
						className={"mb-8"}
					/>
					<Hero2Text
						title={"why."}
						description={
							"Why wBan? Because it's easy to create a decentralized platform on an EVM. While Banano has speed and efficiency, it lacks a way to create decentralized databases (although the tech behind MonkeyTalks could do it). Maybe a project for a future monkey?"
						}
						className={"mb-8"}
					/>
					<Hero2Text
						title={"how."}
						description={
							"To create a project, connect your wallet and head over to the Projects tab. Then click the big + card there."
						}
						className={"mb-8"}
					/>
					<Hero2Text
						title={"donate."}
						description={`In order to donate you need to approve the contract to withdraw wBAN from your wallet. 
            Dont worry, it will only take what you tell it to donate. Don't believe me? Verify! The wBAN contract will contain the allowance function, 
            saying how much you will allow a spender (the banano.space contract) to use. The banano.space project contract contains a function called donateToProject. 
            It takes a projectId and an amount for inputs. The amount you input is withdrawn from your account and sent directly to the project owner. Any function transferring wBAN will contain the code: IERC20(wBan).transferFrom`}
						className={"mb-8"}
					/>

					<Frame className={"rotate-1"}>
						<Hero2Text
							title={"fast.feeless.secure"}
							position={"center"}
							description={
								"Banano was built upon Nano technology, except it's 8x faster and 8x more energy efficient. Oh, and Banano has its own privacy layer."
							}
							className={""}
						/>
						<ToonButton
							href={
								"https://banano.cc/yellowpaper#:~:text=On%20average%2C%20generation%20times%20are%208x%20faster%20for%20BANANO%20than%20for%20NANO%20while%20consuming%208x%20less%20electricity."
							}
							label={"Read about it in the Yellow Paper"}
							className={"rotate-0"}
							newWindow={true}
							color={"yellow"}
						/>
					</Frame>
				</div>
			</div>
		</>
	);
};

export default About;
