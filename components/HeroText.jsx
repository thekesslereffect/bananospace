import React from 'react'

const HeroText = ({title, description, position,className, classNameTitle, classNameDescription, divider}) => {
  return (
    <div className={`mb-8 ${className}`}>
        <div className={`text-7xl font-semibold w-full mb-4 text-${position || 'left'} ${classNameTitle}`}>
            {title}          
        </div>
        <div className={`text-xl font-medium text-neutral-500 w-full text-${position || 'left'} ${classNameDescription}`}>
            {description}          
        </div>
        {divider? 
        <>
        <div className="divide-y divide-solid mt-6 left-0 right-0 absolute">
          <div/><div/>
        </div>
        <div className='mb-16'/>
        </>
        : 
        null}
        
    </div>
  )
}

export default HeroText