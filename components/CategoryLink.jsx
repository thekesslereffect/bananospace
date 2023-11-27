import Link from "next/link";
import React from "react";

const CategoryLink = ({categoryName}) => {
	return (
		<>
			<Link
				href={"/projects"}
				className="flex flex-col h-36 w-36 bg-gray-200 text-neutral-50 font-bold text-center items-center justify-center rounded-2xl overflow-clip hover:ring-2 hover:ring-neutral-300 ring-offset-4 transition duration-300"
			>
				{categoryName}
			</Link>
		</>
	);
};

export default CategoryLink;
