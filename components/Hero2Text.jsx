import React from 'react'

const Hero2Text = ({title, description, position,className, classNameTitle, classNameDescription}) => {
  return (
    <div className={`${className}`}>
        <div className={`text-3xl font-extrabold w-full mb-4 text-${position || 'left'} ${classNameTitle}`}>
            {title}          
        </div>
        <div className={`text-xl font-bold w-full text-${position || 'left'} ${classNameDescription}`}>
            {description}          
        </div>
    </div>
  )
}

export default Hero2Text