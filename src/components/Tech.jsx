import React from 'react';
//this will showcase the 3d spherical shapes we want to create, let us import the neccessary components we will need
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
const Tech = () => {
  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />  {/*The ballcanvas serves as a self closing tag */}
          </div>  
        ))}
      </div>
  )
}

export default SectionWrapper(Tech, "");

//as we can see, we don't have an id for the tech section