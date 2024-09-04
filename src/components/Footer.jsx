import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';

function Footer() {
  const { ref: linksRef, inView: isLinksInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: socialRef, inView: isSocialInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });
  const { ref: contactRef, inView: isContactInView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <footer className="py-8 text-black bg-slate-50">
      <div className="container px-8 mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Footer Links */}
          <motion.div
            className="w-full mb-6 text-center md:mb-0 md:w-auto md:text-left"
            ref={linksRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLinksInView ? 1 : 0, y: isLinksInView ? 0 : 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-4 text-xl font-bold">Quick Links</h2>
            <ul className="space-y-2 text-gray-500 dark:text-gray-400">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="w-full mb-6 text-center md:mb-0 md:w-auto"
            ref={socialRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isSocialInView ? 1 : 0, y: isSocialInView ? 0 : 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="mb-4 text-xl font-bold tracking-tight">Follow Me</h2>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://web.facebook.com/yan.sengleang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: isSocialInView ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_sengleang/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: isSocialInView ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yan-sengleang-614a94277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: isSocialInView ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/Sengleang99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-gray-300"
                initial={{ scale: 0.8 }}
                animate={{ scale: isSocialInView ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="mt-8 font-light text-center text-gray-500 dark:text-gray-400"
          ref={contactRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isContactInView ? 1 : 0, y: isContactInView ? 0 : 30 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Sengleang. All rights reserved.</p>
          <p className="mt-2">Email: <a href="mailto:sengleangyan@gmail.com" className="hover:underline">sengleangyan@gmail.com</a></p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
