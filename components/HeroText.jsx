import React from 'react'
import localFont from '@next/font/local'
const thickFont = localFont({src: "../pages/fonts/Scrap.ttf"})

const HeroText = ({title, description, position,className, classNameTitle, classNameDescription, divider}) => {
  return (
    <div className={`flex flex-col mb-8  ${className}`}>
        <div className={` ${thickFont.className}  text-7xl pb-4 w-full mb-4 bg-gradient-to-br from-neutral-600 to-neutral-900 bg-clip-text text-transparent text-${position || 'left'} ${classNameTitle}`}>
            {title}          
        </div>
        <div className={`text-xl  text-neutral-600 w-full text-${position || 'left'} ${classNameDescription}`}>
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