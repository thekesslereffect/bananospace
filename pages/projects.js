import EmptyProjectCard from '../components/EmptyProjectCard'
import HeroText from '../components/HeroText'
import ProjectCard from '../components/ProjectCard'
import { convertToEther, bananoSpaceContract, displayCategoryName } from '../utils';

import { useContractRead, useContract, useAddress } from "@thirdweb-dev/react";

const contractAddress = bananoSpaceContract;

const projects = () => {
    const address = useAddress();
    const { contract } = useContract(contractAddress);
    // Read contract with arguments
    const { data, isLoading, error } = useContractRead(
      contract,
      "getAllProjects",
      [],
    );
  
    if (error) {
      console.error("failed to read contract", error);
    }
    

    return (
        <>
          <HeroText title={"projects."} description={"Find the BEST Banano projects in the Universe, or create your own!"}/>
  
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {/* only make visible if logged in */}
            {address? 
                <EmptyProjectCard/> 
                : 
                null
            }
            
  
            {isLoading ? <p>Loading...</p> : 
              data && data.map((project, index) => (
                <ProjectCard 
                  key={index}
                  projectId={index}
                  projectName={project[1]} 
                  projectDescription={project[2]} 
                  projectDonations={convertToEther(project[3])}
                  projectImage={project[4]}
                  projectUrl={project[5]}
                  projectCategory={displayCategoryName(project[6])}
                />
              ))
            }
          </div>
        </>
      )
  
}

export default projects