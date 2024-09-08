import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import { color } from 'framer-motion';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>About Me</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm <b>Aditya Prasad</b>, a 2023 graduate🎓, a passionate Software Engineer working as a developer in Societe Generale. Besides tech and coding I have interests in sports, mentoring and social work.
            My objectives are to build skills and gain experience different avenues to become a change maker and to be enterprising and dynamic in approach. 🖊️ I have also written some tech articles which has been 
            published on <a href='https://www.geeksforgeeks.org/user/adityaprasad1308/contributions/' style={{ color: 'yellow' }}>GeeksForGeeks</a> website.</p>

            <ButtonLink
              url='https://drive.google.com/file/d/16pYE6sXaEtv6e4WCjJuycZAZjnCCXWCX/view?usp=sharing'
              text='Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;