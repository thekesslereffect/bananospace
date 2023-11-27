const Button = ({ label, onClick, className, disabled }) => {
    return (
      <button 
        className={`flex w-full justify-center items-center bg-neutral-900 text-neutral-50 font-bold border rounded-2xl py-3 px-4 hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-amber-200 hover:shadow-lg transition duration-300 ${className}`} 
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  