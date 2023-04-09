import React from 'react';
import { useState, useRef } from 'react';
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser'; //for email functionality

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { l } from 'maath/dist/misc-7d870b3c.esm';

/* The following is for threejs
// template id: template_7gfirpi
//service id: service_6z5aymj
//public key: W9F8Nqw0nnYvxdGd6
*/
const Contact = () => {
  const formRef = useRef();  //we use this inside the form tag of the rendering component
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  //this will handle any user interaction with clients/employers
  const handleChange = (e) => {
    const { name, value } = e.target; //this means e.target.name and e.target.value is how we access components

    setForm({ ...form, [name] : value }) //this will allow us to enter inputs on each text field

  }
  const handleSubmit = (e) => {
    e.preventDefault(); //because the otherwise the browser refreshes and we lose the input, therefore, we want to avoid that default browser behavior when someone enters information and submits it, we want to be able to recieve the message through our personal portfolio
    setLoading(true);

    emailjs.send(
      'service_6z5aymj', 
      'template_7gfirpi',
      {
        from_name: form.name,  //accepts the user's name
        to_name: 'Ayan',
        to_email: 'dasa60196@gmail.com',
        message: form.message,
      },
      //lastly, the public key
      'W9F8Nqw0nnYvxdGd6'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');  //to let the user know I have recieved the email and the message along with it
        //lastly, we want to reset the prompt 
        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong."); //to let the user know something went wrong
      })
    //the emailjs.send() function accepts 4 parameters: the serviceId, templateId, an object containing: email user name, messgae, to whom and the reciever's address and lastly public key
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p> 
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          {/**Simply duplicate the label section 2 more times, for two additional input components */}
          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Name</span>
            {/**This will recieve the input section for  users */}
            <input  
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Email</span>
            {/**This will recieve the input section for  users */}
            <input  
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span className='text-white font-medium mb-4'>Your Message</span>
            {/**This will recieve the input section for  users */}
            <textarea 
              rows="7"  /**this will create extra space to type messages for people */
              /*type="text" --> this is no longer needed*/ 
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");  //the id let's us scroll to it using the navbar

//update 1: Lines 25-30: same structure as other components, we have a motion.div inside our primary div tag, and we use the same styling tag to style our p tag and h3 tag as we have done before, the slideIn animation creates the slideshow effect of the div coming in from the elft side