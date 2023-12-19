import { useRouter } from 'next/router';
import { Squircle } from "@squircle-js/react";
import localFont from '@next/font/local'
const thickFont = localFont({src: "../pages/fonts/Scrap.ttf"})

const ToonButton = ({ label, onClick, className, disabled, href, newWindow, color }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default behavior (scrolling to the top)

    // Check if an onClick callback is provided and call it
    if (onClick) {
      onClick(e);
    }

    // Check if an href is provided and navigate accordingly
    if (href) {
      if (newWindow) {
        window.open(href, '_blank'); // Open in a new tab or window
      } else {
        router.push(href); // Navigate within the same tab
      }
    }
  };

  return (
    <>
    <button 
      onClick={handleClick}
      disabled={disabled} 
      className={`flex flex-col justify-center items-center shadow-lg hover:shadow-xl
      ${color === "blue"?"shadow-blue-400/30 hover:shadow-blue-300/30":
        color === "yellow"? "shadow-amber-400/30 hover:shadow-amber-300/30":
        color === "green"? "shadow-green-400/30 hover:shadow-green-300/30":
        color === "purple"? "shadow-purple-400/30 hover:shadow-purple-300/30":
        color === "orange"? "shadow-orange-400/30 hover:shadow-orange-300/30":
        color === "red"? "shadow-red-400/30 hover:shadow-red-300/30":
        "shadow-lime-400/30 hover:shadow-lime-300/30"}
      overflow-visible rounded-full hover:rotate-0 hover:scale-105 hover:-translate-y-1   duration-300 ${className}`}>
      <div
        className={`flex w-full rounded-3xl justify-center text-3xl py-4 px-10  
        ${color === "blue"? "bg-gradient-to-r from-sky-400 to-blue-400": 
          color === "yellow"? "bg-gradient-to-r from-yellow-400 to-amber-400":
          color === "green"? "bg-gradient-to-r from-green-400 to-green-400":
          color === "purple"? "bg-gradient-to-r from-purple-400 to-indigo-500":
          color === "orange"? "bg-gradient-to-r from-orange-400 to-rose-500":
          color === "red"? "bg-gradient-to-r from-rose-400 to-rose-500":
          "bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300" }
        text-white
         duration-300  shadow-[inset_0_20px_40px_-10px_rgba(255,255,255,0.8)]`}
      >
        {/* bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300 */}

        {/* bg-gradient-to-r from-rose-400 to-orange-300 */}
        {/* shadow-[inset_0_20px_40px_-15px_rgba(255,255,255,1)] */}
        <div className={`${thickFont.className} text-lg md:text-2xl`}>{label}</div>
     </div>
      {/* </Squircle> */}
    </button>
    </>
  );
};

export default ToonButton;
