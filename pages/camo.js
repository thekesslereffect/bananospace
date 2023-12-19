"use client";
import React, { useState, useEffect } from "react";
import HeroText from "../components/HeroText";
import Button from "../components/Button";
import bananojs from "@bananocoin/bananojs";
import ToonButton from "../components/ToonButton";
import { Squircle } from "@squircle-js/react";
import Frame from "../components/Frame";

const Camo = () => {
	const [seed1, setSeed1] = useState("");
	const [seed2, setSeed2] = useState("");
	const [seed3, setSeed3] = useState("");
	const [banano1, setBanano1] = useState("");
	const [banano2, setBanano2] = useState("");
	const [camo1, setCamo1] = useState("");
	const [camo2, setCamo2] = useState("");
	const [camo3, setCamo3] = useState("");
	const [sharedSecret, setSharedSecret] = useState("");

	// Set the Banano API URL once when the component mounts
	useEffect(() => {
		bananojs.setBananodeApiUrl("https://kaliumapi.appditto.com/api");
	}, []);

	// Effect to update related fields when seed changes
	useEffect(() => {
		const updateFields = async () => {
			if (seed1 && seed1.length == 64) {
				const account = await getAccount(seed1);
				setBanano1(account);
				const camo = await getCamoAccount(seed1);
				setCamo1(camo);
			}
			if (seed2 && seed2.length == 64) {
				const account = await getAccount(seed2);
				setBanano2(account);
				const camo = await getCamoAccount(seed2);
				setCamo2(camo);
			}
			if (seed1.length == 64 && camo2.length == 64) {
				const secret = await getSharedSecret(seed1, camo2);
				setSharedSecret(secret);
			}
		};
		updateFields();
	}, [seed1, seed2, camo1, camo2]);

	const generateSeed = () => {
		const array = new Uint8Array(32);
		window.crypto.getRandomValues(array);
		return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
			""
		);
	};

	const getAccount = async (_seed) => {
		try {
			const privateKey = bananojs.getPrivateKey(_seed, 0);
			const publicKey = await bananojs.getPublicKey(privateKey);
			const account = bananojs.getBananoAccount(publicKey);
			return account || ""; // Ensure a string is returned
		} catch (error) {
			console.error("Error getting account:", error);
			return ""; // Return empty string in case of error
		}
	};

	const getCamoAccount = async (_seed) => {
		try {
			const privateKey = bananojs.getPrivateKey(_seed, 0);
			const camoPublicKey = await bananojs.getCamoPublicKey(privateKey);
			const camoAccount = bananojs.getCamoAccount(camoPublicKey); //the Camo address
			const newString = camoAccount.replace(/camo_/g, "ban_");
			return newString || ""; // Ensure a string is returned
		} catch (error) {
			console.error("Error getting camo account:", error);
			return ""; // Return empty string in case of error
		}
	};

	const getSharedSecret = async (_seed, _camo2) => {
		try {
			const privateKey = bananojs.getPrivateKey(_seed, 0);
			const publicKey = await bananojs.getAccountPublicKey(_camo2);
			const sharedSecret = await bananojs.getSharedSecret(
				privateKey,
				publicKey
			);
			setSharedSecret(sharedSecret);
			return sharedSecret || ""; // Ensure a string is returned
		} catch (error) {
			console.error("Error getting secret:", error);
			return ""; // Return empty string in case of error
		}
	};

	const handleSeed1Change = (event) => {
		setSeed1(event.target.value);
	};

	const handleSeed2Change = (event) => {
		setSeed2(event.target.value);
	};

	const handleSeed3Change = (event) => {
		setSeed3(event.target.value);
	};

	const handleCamo3Change = (event) => {
		setCamo3(event.target.value);
	};

	const generateRandomSender = async () => {
		const newSeed = generateSeed();
		setSeed1(newSeed);
	};

	const generateRandomReceiver = async () => {
		const newSeed = generateSeed();
		setSeed2(newSeed);
	};

	return (
		<>
			<HeroText title={"Camo"} className={"p-4"}/>
			<div className="flex flex-col flex-grow justify-center items-center">		
				<div className="flex flex-col w-full max-w-2xl items-center justify-center rounded-lg p-4 gap-4 m-8">
				<Frame color={"black"}>
					<div className="flex flex-col w-full">
						<div>Sender</div>
						<div className="font-mono flex flex-row gap-4">
							<div>seed</div>
							<input
								id="seed1"
								name="seed1"
								value={seed1}
								onChange={handleSeed1Change}
								placeholder="Enter seed or Generate Random"
								type="text"
								className="font-mono flex w-full bg-neutral-900 text-white"
							/>
						</div>
						<div className="font-mono flex flex-row gap-4">
							<div>ban_</div>
							<input
								id="banano1"
								name="banano1"
								defaultValue={banano1}
								placeholder="...generatedBan"
								type="text"
								className="flex w-full bg-transparent"
							/>
						</div>
						<div className="font-mono flex flex-row gap-4">
							<div>camo</div>
							<input
								id="camo1"
								name="camo1"
								defaultValue={camo1}
								placeholder="...generatedCamo"
								type="text"
								className="flex w-full bg-transparent"
							/>
						</div>
						<ToonButton
							label={"Generate Random Sender"}
							onClick={generateRandomSender}
							className={"my-4"}
							color={"green"}
						/>
						<div>Receiver</div>
						<div className="font-mono flex flex-row gap-4">
							<div>seed</div>
							<input
								id="seed2"
								name="seed2"
								value={seed2}
								onChange={handleSeed2Change}
								placeholder="Enter seed or Generate Random"
								type="text"
								className="flex w-full bg-neutral-900 text-white"
							/>
						</div>
						<div className="font-mono flex flex-row gap-4">
							<div>ban_</div>
							<input
								id="banano2"
								name="banano2"
								defaultValue={banano2}
								placeholder="...generatedBan"
								type="text"
								className="flex w-full bg-transparent"
							/>
						</div>
						<div className="font-mono flex flex-row gap-4">
							<div>camo</div>
							<input
								id="camo2"
								name="camo2"
								defaultValue={camo2}
								placeholder="...generatedCamo"
								type="text"
								className="flex w-full bg-transparent"
							/>
						</div>
						<ToonButton
							label={"Generate Random Receiver"}
							onClick={generateRandomReceiver}
							className={"my-4"}
							color={"green"}
						/>

						<div>Shared Secret</div>
						<input
							id="sharedSecret"
							name="sharedSecret"
							placeholder="...sharedSecret"
							defaultValue={sharedSecret}
							type="text"
							className="font-mono bg-transparent"
						/>
					</div>
				{/* </div> */}
				<div className="flex flex-col w-full justify-center items-end pt-4">
					<div>How To - Coming SoonTM</div>
					<p>████priv█cy.lay█r████</p>
				</div>
				
				
			
				</Frame>
				</div>
			</div>
			
		</>
	);
};

export default Camo;
