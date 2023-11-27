import React from 'react'

const HeroText = ({title, description, position,className, classNameTitle, classNameDescription}) => {
  return (
    <div className={`my-8 ${className}`}>
        <div className={`text-6xl font-extrabold w-full mb-8 text-${position || 'left'} ${classNameTitle}`}>
            {title}          
        </div>
        <div className={`text-xl font-bold w-full text-${position || 'left'} ${classNameDescription}`}>
            {description}          
        </div>
    </div>
  )
}

export default HeroText