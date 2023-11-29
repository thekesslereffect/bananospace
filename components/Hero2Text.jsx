import React from 'react'

const Hero2Text = ({title, description, position,className, classNameTitle, classNameDescription}) => {
  return (
    <div className={`my-8 ${className}`}>
        <div className={`text-2xl font-extrabold w-full mb-4 text-${position || 'left'} ${classNameTitle}`}>
            {title}          
        </div>
        <div className={`text-lg font-bold w-full text-${position || 'left'} ${classNameDescription}`}>
            {description}          
        </div>
    </div>
  )
}

export default Hero2Text