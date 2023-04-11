import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src= {logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">Ayan Das &nbsp; 
          <span className="sm:block hidden">| Personal Portfolio</span>
          </p> {/*nbsp is a unicode character for an empty space */}
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title 
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
          />
{/*The following div body below is for how the screen should be displayed in the mobile component */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-non flex justify-end items-start flex-col gap-4'>
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title 
                    ? "text-white"
                    : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle); /* This will allow us to automatically open and close the navbar toggle after one of the sections has been clicked*/ 
                  setActive(Link.title); /* This will display the title of the page*/
                }}
              >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

//update 1: imported all the components we will be using from the zipped folders we have added

//update 2: changed the inner rendering HTML from <div></div> into <nav></nav> semantic, then added classname within which we used tempalte literal to add various CSS properties predefined within the styles.js folder which we copy pasted from github gist provided in the tutorial

//update 3: https://tailwindcss.com/ --> go to the following link and search up any of the classname to get a better understanding of what each classname does

//update 4: added a link that points to another page (which hasn't been updated yet) and setActive property defined within the react based onClick property which is set to empty string

/*update 4: window.scrollTo is a built-in method of the window object in JavaScript that can be used to scroll the window to a specific position.

In a React application, you can use window.scrollTo to scroll the window programmatically based on user interactions or other events in the application. For example, you might use it to scroll to a specific section of a page when a user clicks a button or selects an item from a menu.

The window.scrollTo method takes two arguments: the x-coordinate and y-coordinate of the position to which the window should be scrolled. You can pass these arguments directly to the method, like this: */

//update 5: https://tailwindcss.com/docs/guides/vite --> had to go to the following link since tailwind css classnames weren't being applied with vite, therefore, had to install another package knownn as postcss.config.js in order for it to work properly

//update 6: the navLinks.map is used to navigate to various links and we list out the links it will be directed to, and it shows "about, work, contact"

//update 7: within our li tag, we used a ternary operator for the classname with the condition that if (classname === Link.title), then set the text-color to white, otherwise set the text-color to the secondary color, which in this case is gray, in addition, we added a hover component, so that regardless of the status of the Link.title, if we were to hover over to the {About, Work, Contact section}. we will have the option to hover over to it.

//update 8: the div below the ul is adaptive for our mobile component, created a custom userState called setToggle and toggle, and once the screen width reduces down to a certain pixel, we will show a dropdown list section for the {About, Work, Contact}, the minimum width requirement is 140px. Once all the tailwind css classes has been added, we simply copy/paste the ul compononent from above into the div body

//update 9: after adding &nbsp, we have made all the neccessary changes needed for our navbar, we close it and move onto our Hero.jsx portion of the website

/* The following will be notes explaining briefly what each class does:
* w-full: craates a navbar that takes up the entire screen, there's also w-1/2, 2-3/5 ...etc. 

*flex: utilities for controlling how flex items both grow and shrink

* items-center: to align items along the center of the container's cross axis

* py - 5: control the vertical padding of an element using the `py-{size}` utilities

* justify-between : use `justify-between` to justify items along the container's main axis such taht there is an equal amount of space between each item
*/