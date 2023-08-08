import React from 'react';
import { motion } from 'framer-motion';
import { faLinkedin, faGitlab, faGithub } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};

const Footer = () => {
    return (
      <motion.footer
        initial="hidden"
        animate="show"
        variants={footerVariants}
        className="footer bg-secondary py-6 text-center"
      >
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/ronnel-aldrin-mariano-20b898280/" className="text-white p-5">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/ronnelaldrinmariano" className="text-white p-5">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://gitlab.com/Nongnie" className="text-white p-5">
              <FontAwesomeIcon icon={faGitlab} size="2x" />
            </a>
          </div>
        </div>
        <div className="footer-bottom mt-4 text-white">
          &copy; {new Date().getFullYear()} Mariano Portfolio. All rights reserved.
        </div>
      </motion.footer>
    );
  };
  
  export default Footer;
