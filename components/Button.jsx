import Link from 'next/link';

const Button = ({ label, onClick, className, disabled, href }) => {
    return (
      <Link href={href || '#'} passHref>
        <button 
          className={`flex w-full justify-center text-md items-center bg-neutral-900 text-white font-bold rounded-full py-3 px-6 hover:-translate-y-0.5 hover:shadow-xl transition duration-300 ${className}`} 
          onClick={onClick}
          disabled={disabled}
        >
          {label}
        </button>
      </Link>
    );
};

export default Button;
