const RedirectButton = ({ label, href, className }) => {
    const handleClick = () => {
      window.open(href, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <button 
        className={`py-3 px-5 text-white rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition duration-200 ${className}`} 
        onClick={handleClick}
      >
        {label}
      </button>
    );
  };
  
  export default RedirectButton;
  