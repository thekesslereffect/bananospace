import React from "react";

function Frame({ children, className, color }) {
	return (
		<>
			{color === "black" ? (
				<div
          className={`relative flex flex-col gap-8 text-white rounded-[36px] break-words w-full hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 bg-[#1d1c20] p-10 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ${className}`}
				>
					{children}
				</div>
			) : (
				<div
					className={`relative flex flex-col gap-8 text-neutral-700 rounded-[36px] break-words w-full hover:rotate-0 hover:-translate-y-1 hover:scale-105 duration-300 bg-slate-100 border-8 border-white p-10 shadow-[inset_0_20px_40px_-30px_rgba(255,255,255,.5)] ${className}`}
				>
					{children}
				</div>
			)}
		</>
	);
}

export default Frame;
