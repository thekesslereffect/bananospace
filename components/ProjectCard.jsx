import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Squircle } from "@squircle-js/react";

const ProjectCard = ({
    projectId,
    projectName,
    projectDescription,
    projectImage,
    projectUrl,
    projectCategory,
    projectDonations,
}) => {
    return (
        <>
        
            <Link href={`/project/${projectId}`} passHref>
                <div className="flex flex-col h-[500px] w-full rounded-3xl  shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
                <Squircle cornerRadius={24} cornerSmoothing={1} className="overflow-clip bg-black flex flex-col h-full">
                    <div className="flex relative w-full h-full">
                        <Image
                            src={projectImage}
                            alt={projectName}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className=" object-cover"
                        />
                    </div>
                    <div className="flex flex-col h-64 justify-between p-5">
                        <div className="flex flex-col h-28">
                        <h2 className="text-lg font-bold">{projectName}</h2>
                        <p className="truncate-description">
                            {projectDescription}
                        </p>
                        </div>
                        <div className="flex justify-between font-bold mt-3 items-center">
                            <div className="bg-neutral-100 text-neutral-900 px-2 py-1 rounded-full">{projectCategory}</div>
                            {projectDonations} wBAN
                        </div>
                    </div>
                    </Squircle>
                </div>
            </Link>
            
        </>
    );
};

export default ProjectCard;
