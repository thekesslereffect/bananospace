import { useRouter } from 'next/router';

const Button = ({ label, onClick, className, disabled, href, newWindow }) => {
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
    <button
      className={`flex w-full bg-[rgba(255,255,255,0.08)] backdrop-blur-lg border-transparent border-solid border-[1px] hover:border-[rgba(255,255,255,0.25)] justify-center text-md items-center font-bold rounded-full py-3 px-6 hover:shadow-xl hover:shadow-[rgb(255,255,255,0.05)] transition duration-300 ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
