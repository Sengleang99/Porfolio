import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger animation every time the element comes into view
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    return (
        <div className='text-black bg-slate-50' id='contact'>
            <div className='container flex flex-col items-center justify-center h-full px-4 mx-auto md:px-8 lg:px-16'>
                <section ref={ref} className="bg-white">
                    <motion.div
                        className="max-w-screen-md px-4 py-8 mx-auto lg:py-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-center sm:text-4xl">
                            Contact Us
                        </h2>
                        <p className="mb-6 font-light text-center text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-lg">
                            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                        </p>
                        <form action="#" className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Send message
                            </motion.button>
                        </form>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
