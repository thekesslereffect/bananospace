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
      className={`flex w-full justify-center text-md items-center bg-neutral-900 text-white font-bold rounded-full py-3 px-6 hover:-translate-y-0.5 hover:shadow-xl transition duration-300 ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
