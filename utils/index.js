import { ethers } from 'ethers';

export const githubProject = "https://github.com/thekesslereffect/bananospace";
export const bananoSpaceContract = "0xb7398a6910C2A642479aE85D9Fe7FE117DfA39E8" ;
export const wrappedBananoContract = "0xe20B9e246db5a0d21BF9209E4858Bc9A3ff7A034" ;
export const categoryMapping = {
  "Wallets and Payments": 0,
  "DeFi": 1,
  "Security": 2,
  "Analytics": 3,
  "Community": 4,
  "Charity": 5,
  "Education": 6,			
  "Environmental": 7,
  "Health": 8,
  "Interoperability": 9,
  "Faucets": 10,	
  "NFTs": 11,
  "Marketplaces": 12,				
  "Gaming": 13,
  "Art": 14,	
  "Memes": 15,
  "Science": 16	
};
// Function to create reverse mapping
const createReverseMapping = (mapping) => {
  const reverseMapping = {};
  Object.keys(mapping).forEach(key => {
      reverseMapping[mapping[key]] = key;
  });
  return reverseMapping;
};

// Create the reverse mapping
const reverseCategoryMapping = createReverseMapping(categoryMapping);

// Use the reverse mapping to display the category name
export const displayCategoryName = (categoryId) => {
  return reverseCategoryMapping[categoryId];
};

export const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
  
    return remainingDays.toFixed(0);
  };
  
  export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
  
    return percentage;
  };
  
  export const checkIfImage = (url, callback) => {
    const img = new Image();
    img.src = url;
  
    if (img.complete) callback(true);
  
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  };

  export const convertToEther = (value) =>{
    if(!value){
        return null;
    }
    const val = ethers.BigNumber.from(value).toString();
    // Assuming the number represents a value in Ether (with 18 decimals)
    const formatted = ethers.utils.formatUnits(val, 18);
    // Optionally, you can format it to a fixed number of decimal places
    const fixed = parseFloat(formatted).toFixed(2); // 2 decimal places

    return fixed;
  }

  export const convertToBigNumber = (value) =>{
    if(!value){
        return null;
    }
    const val = ethers.utils.parseUnits(value, "ether");
    return val;
  }

  export const formatAddress = (str) => {
    if (str.length > 8) {
        return `${str.substring(0, 7)}...${str.substring(str.length - 5)}`;
    }
    return str;
  }