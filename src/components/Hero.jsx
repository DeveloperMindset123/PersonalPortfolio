import { motion } from 'framer-motion';  //this is located in the node_modules
import { styles } from '../styles';  //component from style.js folder
import { ComputersCanvas } from './canvas';  //referring to the Computers.jsx file
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/> {/*bg-[#915eff] creates a purple circle on the page */}
          {/*Let's create another self closing div tag to allow for a fading streak of purple going down*/}
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> 
        </div>
        <div>
            {/*Note regarding span tag: The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang . */}
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Ayan</span></h1>  {/* accessed the javascript based css to change our font size (refer to styles.js to see how heroHeadText was implemented)*/}
            {/*now we add a paragraph tag which will serve as a description for who I am and what I do*/}
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className='sm:block hidden' />I develop 3D web applications and games for fun. 🎮
            </p>
          </div>
      </div>
      {/*next, we add the Computers Canvas right below the description div, rather than to the side of it */}
      <ComputersCanvas />
{/* Here, we are implementing a "gif" that will immediately allow the user to scroll down to the bottom section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center" >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y:[0,24,0] /*Meaning the dot will move up and down by 24px*/
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop' /*we wnat to loop it till infinity */
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1" /*using tailwind css property, we have successfully developed the dot that will float back and forth in an infinite loop in the y-axis thanks to the animation and transition rules specified, taking 1.5 seconds each iteration */
            /> {/*Here, we are using framer motion to create the gif */}

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;

//update 1: import the neccessary components we will need for this section

//update 2: generates the nicely looking dark background we have based on the following tag on line 8: section className="relative w-full h-screen mx-auto">

//update 3: create a div component inside the section component with various tailwindcss based classnames

/* important classNames to remember
* w-{number}: to set an element to a fixed width
* h-{number}: to set an element to a fixed height
* mt-5: Add margin to a single side
** Control the margin on one side of an element using the `m{t|r|b|l}--{size}, mt stands for "margin-top", mr stands for "margin-right", mb stands for "margin-bottom" and ml stands for "margin-left"

* flex-col: to position flex items vertically
* flex-row : use 'flex-row' to position flex items horizontally in the same direction as text.
* bg: stands for background and we have subcomponents for specifying size, origin, color, padding etc.

*/