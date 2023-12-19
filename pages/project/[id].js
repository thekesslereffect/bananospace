import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
	convertToEther,
	convertToBigNumber,
	bananoSpaceContract,
	wrappedBananoContract,
	formatAddress,
} from "../../utils";
import {
	useContractRead,
	useContract,
	useContractWrite,
	useAddress,
} from "@thirdweb-dev/react";
import RedirectButton from "../../components/RedirectButton";
import FeatureBanner from "../../components/FeatureBanner";
import HeroText from "../../components/HeroText";
import Link from "next/link";
import ToonButton from "../../components/ToonButton";

const Project = () => {
	const router = useRouter();
	const { id } = router.query; // get project id from url
	const [donationAmount, setDonationAmount] = useState("");
	const userAddress = useAddress(); // user wallet address
	const [projectData, setProjectData] = useState(null);
	const [needsToIncreaseAllowance, setNeedsToIncreaseAllowance] =
		useState(false);

	// init contracts
	const { contract: spaceContract } = useContract(bananoSpaceContract);
	const { contract: wrappedContract } = useContract(wrappedBananoContract);

	// read project data
	const { data, isLoading, error } = useContractRead(
		spaceContract,
		"getProjects",
		[[id]]
	);

	const { mutateAsync: donateToProject } = useContractWrite(
		spaceContract,
		"donateToProject"
	);

	// allowance
	const { data: wrappedData } = useContractRead(wrappedContract, "allowance", [
		userAddress,
		bananoSpaceContract,
	]);
	const { mutateAsync: increaseAllowance } = useContractWrite(
		wrappedContract,
		"increaseAllowance"
	);

	useEffect(() => {
		if (data) {
			setProjectData(data);
		}
		if (wrappedData) {
			const allowance = convertToEther(wrappedData);
			console.log("allowance", allowance);
			if (allowance < 1000000) {
				setNeedsToIncreaseAllowance(true);
			}
		}
	}, [data, wrappedData]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		console.error("failed to read contract", error);
		return <div>Error loading project data.</div>;
	}

	const renderDonations = () => {
		if (!projectData) return <p>No donations yet.</p>;

		const donators = Array.isArray(projectData[0][7]) ? projectData[0][7] : [];
		const donations = Array.isArray(projectData[0][8]) ? projectData[0][8] : [];

		if (donators.length === 0 || donations.length === 0) {
			return <p>No donations yet.</p>;
		}

		return donators.map((donator, index) => {
			const donation = donations[index];
			return (
				<tr key={index} className="justify-between flex w-full">
					<td>{donator}</td>
					<td>{convertToEther(donation)} wBAN</td>
				</tr>
			);
		});
	};

	if (!projectData) {
		return null; // Or a placeholder component until the data is loaded
	}

	console.log(projectData);

	const handleApprove = async (event) => {
		event.preventDefault();
		try {
			const addedValue = convertToBigNumber("10000000").toString();
			const data = await increaseAllowance({
				args: [bananoSpaceContract, addedValue],
			});
			console.info("contract call successs", data);
			setNeedsToIncreaseAllowance(false);
		} catch (err) {
			console.error("contract call failure", err);
		}
	};

	const handleDonate = async (event) => {
		event.preventDefault(); // Prevent default form submission behavior

		try {
			const donationAmountFormatted = convertToBigNumber(donationAmount);
			console.log(
				`Sending ${donationAmountFormatted} Banano to: ${projectData[0][0]}`
			);
			const data = await donateToProject({
				args: [id, donationAmountFormatted],
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
			<FeatureBanner
				projectId={id}
				projectOwner={projectData[0][0]}
				imageUrl={projectData[0][4]}
			/>

			<HeroText
				title={projectData[0][1]}
				description={projectData[0][2]}
			/>
			<div className="flex flex-row justify-end gap-4">
				{userAddress == projectData[0][0] ? (
					<ToonButton label={"Edit Project"} color={"red"} href={`/editProject/${id}`}/>
					// <Link
					// 	href={`/editProject/${id}`}
					// 	className="text-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-200 my-4 mb-8 px-8 py-3 font-bold text-xl bg-rose-500 shadow-rose-200 hover:shadow-rose-200"
					// >
					// 	Edit Project
					// </Link>
				) : null}
				<ToonButton label={"Project Site"} color={"yellow"} href={projectData[0][5]}/>
				{/* <RedirectButton
					label="Project Site"
					href={projectData[0][5]}
					className="my-4 mb-8 px-8 py-3 font-bold text-xl bg-amber-400 shadow-amber-100 hover:shadow-amber-100"
				/> */}
			</div>

			<div className="flex flex-row w-full justify-between text-xl font-bold my-4 gap-4 items-center">
				<div className="w-full flex flex-col md:flex-row justify-between py-3 px-5 items-center  bg-black text-neutral-100  rounded-2xl">
					<p>Donations</p>
					<p>{convertToEther(projectData[0][3])} wBAN</p>
				</div>
				{needsToIncreaseAllowance ? (
					<form onSubmit={handleApprove} className="flex flex-row gap-4">
						<input
							className="block w-full py-3 px-5 rounded-xl hover:cursor-pointer bg-rose-500 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-200"
							id="submit"
							type="submit"
							value="Approve to Donate"
						/>
					</form>
				) : (
					<form
						onSubmit={handleDonate}
						className="flex flex-row gap-4 items-center"
					>
						<input
							className="w-full  bg-gray-200 text-gray-700 text-right border rounded-2xl py-3 px-5 focus:outline-none focus:bg-white"
							id="grid-donation-amount"
							type="number"
							placeholder="19"
							min={"0"}
							value={donationAmount}
							onChange={(e) => setDonationAmount(e.target.value)}
						/>
						<input
							className=" w-full py-3 px-5 rounded-xl hover:cursor-pointer bg-black hover:bg-neutral-900 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl transition duration-200"
							id="submit"
							type="submit"
							value="Donate!"
						/>
					</form>
				)}
			</div>
			<table className="table-auto block w-full overflow-x-auto">
				<thead className="flex w-full">
					<tr className="justify-between flex w-full border border-solid border-l-0 border-r-0">
						<th className="text-md">Address</th>
						<th className="text-md">Amount</th>
					</tr>
				</thead>
				<tbody className="flex flex-col-reverse w-full">
					{renderDonations()}
				</tbody>
			</table>
		</div>
	);
};

export default Project;
