import Button from "../components/Button";
import Hero2Text from "../components/Hero2Text";
import HeroText from "../components/HeroText";
import {
	bananoSpaceContract,
	githubProject,
	wrappedBananoContract,
} from "../utils";

const About = () => {
	return (
		<>
			<HeroText title={"About"} divider={true} />
			<div className="text-3xl font-extrabold mb-8">Dont Trust. Verify.</div>
			<div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-lg">
				<div className="text-3xl font-extrabold">Sources</div>

			
					<Button label={"Github"} newWindow={true} href={githubProject} />


				
					<Button label={"banano.space project contract"} newWindow={true} href={`https://polygonscan.com/address/${bananoSpaceContract}#code`}/>
				
			
					<Button label={"wBAN contract"} newWindow={true} 					href={`https://polygonscan.com/address/${wrappedBananoContract}#code`}/>
				
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
			<Hero2Text
				title={"fast.feeless.secure"}
				position={"center"}
				description={
					"Banano was built upon Nano technology, except it's 8x faster and has it's own privacy layer."
				}
				className={"bg-neutral-900 text-neutral-50 mb-8 p-8 left-0 right-0 "}
			/>
		</>
	);
};

export default About;
