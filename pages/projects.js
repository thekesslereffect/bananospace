import React from "react";
import EmptyProjectCard from "../components/EmptyProjectCard";
import HeroText from "../components/HeroText";
import ProjectCard from "../components/ProjectCard";
import FeatureBanner from "../components/FeatureBanner";
import {
	convertToEther,
	bananoSpaceContract,
	displayCategoryName,
} from "../utils";

import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

const contractAddress = bananoSpaceContract;

const Projects = () => {
	const address = useAddress();
	const { contract } = useContract(contractAddress);

	// Read contract with arguments
	const { data, isLoading, error } = useContractRead(
		contract,
		"getAllProjects",
		[]
	);

	if (error) {
		console.error("failed to read contract", error);
	}

	const featuredProject = "1";
	const [projectData, setProjectData] = useState(null);

	// read project data
	const { data: dataProject, isLoading: isLoadingProject } = useContractRead(
		contract,
		"getProjects",
		[[featuredProject]]
	);
	useEffect(() => {
		if (dataProject) {
			setProjectData(dataProject);
		}
	}, [dataProject]);

	if (isLoadingProject) {
		return <div>Loading...</div>;
	}

	if (!projectData) {
		return null; // Or a placeholder component until the data is loaded
	}

	return (
		<>
			<HeroText title={"Projects"} divider={true} />

			<FeatureBanner
				projectId={featuredProject}
				imageUrl={projectData[0][4]}
				projectName={projectData[0][1]}
				projectOwner={projectData[0][0]}
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{/* only make visible if logged in */}
				{address ? <EmptyProjectCard /> : null}

				{isLoading ? (
					<p>Loading...</p>
				) : (
					data &&
					data.map((project, index) => (
						<ProjectCard
							key={index}
							projectId={index}
							projectName={project[1]}
							projectDescription={project[2]}
							projectDonations={convertToEther(project[3])}
							projectImage={project[4]}
							projectUrl={project[5]}
							projectCategory={displayCategoryName(project[6])}
						/>
					))
				)}
			</div>
		</>
	);
};

export default Projects;
