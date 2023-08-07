import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import myPhoto from '../assets/myPhoto.jpg';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full personal-card-gradient p-[1px] rounded-[20px] shadow-card"
      >
      <div
      option={{
        max:45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img 
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain rounded-full"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <div className="flex items-center"> 
        <img
          src={myPhoto}
          alt="My Photo"
          className="w-32 h-32 rounded-full mr-8"
        />
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview...</h2>
        </motion.div>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I have developed my skills in computer technology and video editing through education and practical experience. Over time, I have gained valuable experience that has helped me become proficient in my current roles.  I am a computer technician and video editor. In my current role, I troubleshoot hardware and software issues, perform system maintenance, and work on various video editing projects. I enjoy the combination of technical expertise and creativity that my current job offers. I am now aspiring to secure a job as a programmer where I can continue my passion in technology that's why I enrolled in a coding boot camp to gain knowledge and skills in programming. My goal is to utilize my existing technical skills and creativity in conjunction with programming expertise to create innovative and impactful solutions in the real world.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")