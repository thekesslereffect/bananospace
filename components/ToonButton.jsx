import { useRouter } from 'next/router';
import { Squircle } from "@squircle-js/react";
import localFont from '@next/font/local'
const thickFont = localFont({src: "../pages/fonts/Scrap.ttf"})

const ToonButton = ({ label, onClick, className, disabled, href, newWindow }) => {
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
      className={`flex flex-col justify-center items-center shadow-lg shadow-lime-400/30 hover:shadow-xl hover:shadow-lime-300/30 overflow-visible rounded-full hover:rotate-0 hover:scale-105 hover:-translate-y-1   duration-300 ${className}`}>

      <Squircle
        cornerRadius={20}
        cornerSmoothing={1}
        className={`flex w-full justify-center text-3xl py-4 px-10  
        bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300
        text-white
         duration-300  shadow-[inset_0_20px_40px_-10px_rgba(255,255,255,0.8)]`}
      >
        {/* bg-gradient-to-r from-rose-400 to-orange-300 */}
        {/* shadow-[inset_0_20px_40px_-15px_rgba(255,255,255,1)] */}
        <div className={`${thickFont.className}`}>{label}</div>
     
      </Squircle>
    </button>
    </>
  );
};

export default ToonButton;
