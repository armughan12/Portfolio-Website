import React from 'react';
import { motion } from 'framer-motion';

const ToolCard = ({ title, progress, description, status, imgSrc, delay }) => (
    <motion.div
        className="p-4 lg:w-96 bg-white shadow-lg shadow-gray-500/50 flex items-center justify-center bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay, duration: 1 }}
    >
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left w-99">
            <img alt={title} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={imgSrc} />
            <div className="flex-grow sm:pl-8">
                <h2 className="title-font text-lg text-yellow-500 font-bold">{title}</h2>
                <h3 className="text-black mb-3">Learned: {progress}%</h3>
                <p className="mb-4 text-black">{description}</p>
                <span className="inline-flex text-yellow-500 font-bold">Status: {status}</span>
            </div>
        </div>
    </motion.div>
);

function Tools() {
    const tools = [
        { title: "C Language", progress: 60, description: "Learned as a 1st language in ICS", status: "Completed", imgSrc: "images/c.webp", delay: 0.6 },
        { title: "C++", progress: 70, description: "Learned in university (ITC and PF)", status: "Completed", imgSrc: "images/cpp.png", delay: 0.6 },
        { title: "JAVA", progress: 30, description: "Learned in 3rd semester; OOP started", status: "Ongoing", imgSrc: "images/java.png", delay: 0.6 },
        { title: "HTML", progress: 90, description: "Proficient in structured web layouts", status: "Completed", imgSrc: "images/html.png", delay: 0.6 },
        { title: "CSS", progress: 80, description: "Experienced in responsive design", status: "Completed", imgSrc: "images/css.webp", delay: 0.6 },
        { title: "JavaScript", progress: 80, description: "Skilled in dynamic web applications", status: "Ongoing", imgSrc: "images/js.png", delay: 0.6 },
        { title: "Tailwind CSS", progress: 60, description: "Skilled in building website designs", status: "Ongoing", imgSrc: "images/thumb.webp", delay: 0.6 },
        { title: "NodeJS", progress: 80, description: "Experienced in backend development", status: "Ongoing", imgSrc: "images/node.png", delay: 0.8 },
        { title: "ReactJS", progress: 80, description: "Proficient in SPAs with React", status: "Ongoing", imgSrc: "images/react.png", delay: 1.0 }
    ];

    return (
        <div className="bg-black">
            <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-3xl title-font mb-4 text-yellow-500 tracking-widest font-bold underline">TOOLS & TECHNOLOGIES</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-black text-2xl">
                            Following are the tools and technologies that I have worked on.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4 gap-16 justify-center">
                        {tools.map((tool, index) => (
                            <ToolCard key={index} {...tool} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Tools;
