import React from "react";
import { formatAddress } from "../utils";
import Link from "next/link";

const FeatureBanner = ({projectId, projectName, projectOwner, imageUrl}) => {
    return (
        <>
        <Link href={`/project/${projectId}`} className="mb-8">
        <div className="relative rounded-3xl w-full h-96 cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300  bg-[#1d1c20]  shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ">

            {/* <div className="relative w-full h-96 mb-8 cursor-pointer"> */}
                <img
                    src={
                        imageUrl
                    }
                    alt={"0"}
                    className="object-cover w-full h-full rounded-lg"
                />
                {projectName? 
                    <p className="absolute top-0 left-0 bg-neutral-900 p-4 rounded-br-2xl rounded-tl-md text-gray-50 font-bold">
                    {projectName}
                </p>
                : null}
                {projectOwner? 
                <p className="absolute bottom-0 right-0 bg-neutral-900  p-4 rounded-tl-2xl rounded-br-md text-gray-50 font-bold">
                    {formatAddress(
                        projectOwner
                    )}
                </p>
                : null}
                
            {/* </div> */}
            </div>
        </Link>
            
        </>
    );
};

export default FeatureBanner;
