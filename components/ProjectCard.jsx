import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
                <div className="flex flex-col bg-neutral-900 rounded-lg overflow-clip shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300 cursor-pointer">
                    <div className="relative w-full h-64">
                        <Image
                            src={projectImage}
                            alt={projectName}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className=" object-cover"
                        />
                    </div>
                    <div className="text-neutral-100 p-5">
                        <h2 className="text-lg font-bold">{projectName}</h2>
                        <p className="truncate-description">
                            {projectDescription}
                        </p>
                        <div className="flex justify-between font-bold mt-3 items-center">
                            <div className="bg-neutral-100 text-neutral-900 px-2 py-1 rounded-full">{projectCategory}</div>
                            {projectDonations} wBAN
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default ProjectCard;
