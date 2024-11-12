import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function Home() {
    const navigate = useNavigate();
    const aboutRef = React.useRef(null);
    const isAboutInView = useInView(aboutRef, { once: true });

    const goToResumePage = () => {
        navigate('/resume');
    };

    const goToContactPage = () => {
        navigate('/contact');
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    {/* Animated Text */}
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center mb-8 md:mb-0">
                        <motion.h1
                            className="title-font sm:text-4xl text-3xl mb-4 text-yellow-500 font-bold"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut' }}
                        >
                            Building innovative web
                            <br className="hidden lg:inline-block text-yellow-500 font-bold" />experiences for a digital world
                        </motion.h1>

                        <motion.p
                            className="mb-8 leading-relaxed text-base sm:text-lg"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                        >
                            I'm Armughan, a passionate web developer with a focus on creating intuitive and dynamic user interfaces.
                            I love turning complex problems into simple, beautiful designs. When I'm not coding, you'll find me
                            exploring the latest in web technology and design trends.
                        </motion.p>

                        {/* Animated Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
                        >
                            <button onClick={goToResumePage} className="inline-flex text-white transition ease-in duration-300 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                View Resume
                            </button>
                            <button onClick={goToContactPage} className="inline-flex text-white transition ease-in duration-300 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                Contact Me
                            </button>
                        </motion.div>
                    </div>

                    {/* Animated Image */}
                    <motion.div
                        className="lg:max-w-lg lg:w-full md:w-1/2 w-full px-4 md:px-0"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, ease: 'easeOut', delay: 1 }}
                    >
                        <img className="object-cover object-center rounded" alt="hero" src="images/my-photo.png" />
                    </motion.div>
                </div>
            </section>

            {/* About Me Section */}
            <section
                ref={aboutRef}
                className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]"
            >
                <motion.div
                    className="container px-5 py-24 mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <h1 className="text-3xl sm:text-4xl mb-4 text-yellow-500 font-bold underline">About Me</h1>
                        <p className="leading-relaxed text-sm sm:text-lg">
                            I am Armughan, currently in the 3rd Semester of a Bachelor of Science in Software Engineering (BSSE) at the University of Central Punjab, Lahore (UCP). Alongside my degree, I am studying Website Development at Ideoversity Training Institute, based in Arfa Karim Software Technology Park.
                        </p>
                        <p className="leading-relaxed text-sm sm:text-lg mt-4">
                            Previously, I completed my Intermediate in Computer Science (ICS) at Punjab College of Information Technology, Lahore (Main Campus), and my Matriculation from Freedom Grammar School, Lahore.
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-yellow-500 mt-8 mb-6"></span>
                        <p className="text-yellow-500 text-sm sm:text-lg font-bold">Web Developer</p>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}

export default Home;
