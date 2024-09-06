import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function Contact() {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Set the animation duration (optional)
          once: false, // Whether animation should happen only once
        });
      }, []);
      

    return (
        <div className='text-black bg-slate-50' id='contact'>
            <div className='container flex flex-col items-center justify-center h-full px-4 mx-auto md:px-8 lg:px-16'>
                <section className="bg-white">
                    <div
                        className="max-w-screen-md px-4 py-8 mx-auto lg:py-16"
                    >
                        <h2 data-aos="zoom-in-up" className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-center sm:text-3xl">
                            Contact Me
                        </h2>
                        <p data-aos="zoom-in-up"  className="mb-6 font-light text-center text-gray-500 lg:mb-8 dark:text-gray-400 sm:text-lg">
                            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                        </p>
                        <form className="space-y-6" data-aos="zoom-in-up">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
