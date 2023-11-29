import React from "react";
import { formatAddress } from "../utils";
import Link from "next/link";

const FeatureBanner = ({projectId, projectName, projectOwner, imageUrl}) => {
    return (
        <>
        <Link href={`/project/${projectId}`}>
            <div className="relative w-full h-96 mb-8 cursor-pointer">
                <img
                    src={
                        imageUrl
                    }
                    alt={"0"}
                    className="object-cover w-full h-full rounded-lg"
                />
                {projectName? 
                    <p className="absolute top-0 left-0 bg-neutral-900 p-2 rounded-br-md rounded-tl-md text-gray-50 font-bold">
                    {projectName}
                </p>
                : null}
                {projectOwner? 
                <p className="absolute bottom-0 right-0 bg-neutral-900  p-2 rounded-tl-md rounded-br-md text-gray-50 font-bold">
                    {formatAddress(
                        projectOwner
                    )}
                </p>
                : null}
                
            </div>
        </Link>
            
        </>
    );
};

export default FeatureBanner;
