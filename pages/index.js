import { useState, useEffect } from "react";
import CategoryBanner from "../components/CategoryBanner";
import FeatureBanner from "../components/FeatureBanner";
import Hero2Text from "../components/Hero2Text";
import HeroText from "../components/HeroText";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { bananoSpaceContract } from "../utils";

export default function Home() {

    const featuredProject = "1"
    const [projectData, setProjectData] = useState(null);
    const { contract: spaceContract } = useContract(bananoSpaceContract);

    // read project data
    const { data, isLoading, error } = useContractRead(spaceContract, "getProjects", [[featuredProject]]);
    useEffect(() => {
        if (data) {
            setProjectData(data);
        }
    }, [data]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!projectData) {
        return null; // Or a placeholder component until the data is loaded
    }

    return (
        <>
            <HeroText title={"featured."} position={"left"} />
            <FeatureBanner projectId={featuredProject} imageUrl={projectData[0][4]} projectName={projectData[0][1]} projectOwner={projectData[0][0]}/>
            {/* <CategoryBanner /> */}
            <HeroText title={"welcome.monKey"} position={"left"} description={"What is banano.space?  It's the central hub for all things Banano! Monkeys can post their projects and earn wBAN (and eventually Banano) along the way. Join the Banano Revolution: We're more than a community; we're a movement. Be a part of something bigger and contribute to the world of decentralized fun and freedom."}/>
        </>
    );
}
