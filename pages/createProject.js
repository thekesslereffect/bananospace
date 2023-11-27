import React, { useState } from "react";
import Button from "../components/Button";
import HeroText from "../components/HeroText";
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { convertToEther, bananoSpaceContract, categoryMapping, displayCategoryName } from "../utils";
import ProjectCard from "../components/ProjectCard";

const CreateProject = () => {
	const address = useAddress();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageLink, setImageLink] = useState("");
	const [projectUrl, setProjectUrl] = useState("");
    const [projectCategory, setProjectCategory] = useState(categoryMapping["Wallets and Payments"]);
    const [projectCategoryName, setProjectCategoryName] = useState("Wallets and Payments");


	const { contract } = useContract(bananoSpaceContract);
	const { mutateAsync: createProject, isLoading } = useContractWrite(
		contract,
		"createProject"
	);

    const handleCategoryChange = (e) => {
        const categoryName = e.target.value;
        const categoryId = categoryMapping[categoryName];
        setProjectCategory(categoryId);
        setProjectCategoryName(categoryName);
    };

	const handleSubmit = async (event) => {
		event.preventDefault(); // Prevent default form submission behavior

		try {
			const data = await createProject({
				args: [title, description, imageLink, projectUrl, projectCategory],
			});
			console.info("contract call success", data);
			// Handle success (e.g., clear form, show success message)
		} catch (err) {
			console.error("contract call failure", err);
			// Handle error (e.g., show error message)
		}
	};

	return (
		<div>
			{!address ? (
				<HeroText
					title={"No wallet connected..."}
					description={
						"Please connect a web3 wallet before creating a project."
					}
				/>
			) : (
				<div>
					<HeroText
						title={"create.project"}
						description={
							"Store your project on the Polygon network and earn wBan from the community!"
						}
					/>
					<div className="flex justify-center mb-8">
						<div className="max-w-lg">
							<ProjectCard
								key="0"
								projectId="0"
								projectName={title ? title : "Banano-Bot 3000"}
								projectDescription={
									description
										? description
										: "Imagine a world where monkeys never run out of bananas! Introducing the Banano-Bot 3000 – the first-ever banana teleportation device designed exclusively for our primate friends. This cutting-edge technology ensures a constant supply of fresh bananas, teleported directly from tropical forests to any monkey habitat in the blink of an eye. Say goodbye to banana shortages and hello to happy, banana-filled monkey smiles!"
								}
								projectDonations="19"
								projectImage={
									imageLink
										? imageLink
										: "https://media.tenor.com/Y2-CjCtRcOcAAAAC/travolta-ban.gif"
								}
								projectUrl={projectUrl}
                                projectCategory={displayCategoryName(projectCategory)}
							/>
						</div>
					</div>

					<div className="flex w-full justify-center">
						<form className="w-full max-w-lg" onSubmit={handleSubmit}>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3 mb-6 md:mb-0">
									<label
										className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-project-title"
									>
										Title
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-project-title"
										type="text"
										placeholder="Banano-Bot 3000"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
							</div>

							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full px-3 mb-6 md:mb-0">
									<label
										className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-project-description"
									>
										Description
									</label>
									<textarea
										className="resize-y appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-project-description"
										placeholder="Imagine a world where monkeys never run out of bananas! Introducing the Banano-Bot 3000 – the first-ever banana teleportation device designed exclusively for our primate friends. This cutting-edge technology ensures a constant supply of fresh bananas, teleported directly from tropical forests to any monkey habitat in the blink of an eye. Say goodbye to banana shortages and hello to happy, banana-filled monkey smiles!"
										rows="8"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									></textarea>
								</div>
							</div>
							<div className="flex flex-wrap -mx-3 mb-6">
								<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
									<label
										className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-project-title"
									>
										Image Link
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										id="grid-project-title"
										type="text"
										placeholder="https://images.google.com/rickroll-roll.gif"
										value={imageLink}
										onChange={(e) => setImageLink(e.target.value)}
									/>
								</div>
								<div className="w-full md:w-1/2 px-3">
									<label
										className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
										htmlFor="grid-last-name"
									>
										Project Website
									</label>
									<input
										className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-last-name"
										type="text"
										placeholder="https://only-bans.cc"
										value={projectUrl}
										onChange={(e) => setProjectUrl(e.target.value)}
									/>
								</div>
							</div>
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-category"
							>
								Project Category
							</label>
							<select
								name="grid-category"
								id="grid-category"
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-5 focus:border-gray-500"
								onChange={handleCategoryChange}
							>
								<optgroup label="Core Cryptocurrency Functions">
									<option>Wallets and Payments</option>
									<option>DeFi</option>
									<option>Security</option>
									<option>Analytics</option>
								</optgroup>

								<optgroup label="Community and Social Impact">
									<option>Community</option>
									<option>Charity</option>
									<option>Education</option>
									<option>Environmental</option>
									<option>Health</option>
								</optgroup>

								<optgroup label="Innovative Technologies and Interoperability">
									<option>Interoperability</option>
									<option>Faucets</option>
									<option>NFTs</option>
								</optgroup>
                            
								<optgroup label="Market and Commerce">
									<option>Marketplaces</option>
								</optgroup>

								<optgroup label="Entertainment and Creative Expressions">
									<option>Gaming</option>
									<option>Art</option>
									<option>Memes</option>
								</optgroup>

								<optgroup label="Science and Research">
									<option>Science</option>
								</optgroup>
							</select>
							<div className="mt-8">
								<input
                                    className="flex w-full justify-center bg-neutral-900 text-neutral-50 font-bold border rounded-2xl py-3 px-4 cursor-pointer hover:-translate-y-1 hover:bg-amber-400 hover:shadow-amber-200 hover:shadow-lg transition duration-300"									
                                    id="submit"
									type="submit"
									value="create."
								/>
							</div>
						</form>
					</div>
				</div>
			)}
			;
		</div>
	);
};

export default CreateProject;
