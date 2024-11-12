import React from 'react';
import { motion, useInView } from 'framer-motion';
function Resume() {
    return (
        <div>
            <section className='min-h-screen relative flex items-center justify-center bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1] text-center px-4 py-8 flex-col'>
                {/* Header Section */}
                <div className='flex flex-col gap-3'>
                    <h1 className='text-yellow-500 text-4xl font-bold underline mt-5'>ARMUGHAN'S RESUME</h1>
                    <h2 className='text-white font-bold text-3xl mt-2 sm:text-4xl'>ARMUGHAN</h2>
                    <h3 className='text-base sm:text-lg'>armughan621@gmail.com | 03418609973</h3>
                    <div className='flex items-center justify-center gap-3 mt-3'>
                        <img className="object-cover rounded-full h-10 w-10" alt="hero" src="images/github.jpeg" />
                        <span>armughan12</span>
                    </div>
                </div>

                {/* Education Section */}
                <div className='flex flex-col items-center gap-4 mt-10'>
                    <h2 className='text-yellow-500 font-bold text-2xl'>EDUCATION</h2>
                    <div className='flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:justify-between sm:w-2/3'>
                        <p className='flex-1'>Full Stack Web Development | Ideoversity (Arfa Software Technology Park), Lahore</p>
                        <p className='flex-1'>(Aug 2024 - Jan 2024)</p>
                    </div>
                    <div className='flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:justify-between sm:w-2/3'>
                        <p className='flex-1'>BS Software Engineering | University of Central Punjab, Lahore</p>
                        <p className='flex-1'>(Oct 2023 – Oct 2027)</p>
                    </div>
                    <div className='flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:justify-between sm:w-2/3'>
                        <p className='flex-1'>ICS | Punjab College of Information Technology, Lahore</p>
                        <p className='flex-1'>(Oct 2021 – Oct 2023)</p>
                    </div>
                    <div className='flex flex-col gap-2 text-center sm:text-left sm:flex-row sm:justify-between sm:w-2/3'>
                        <p className='flex-1'>Matric (Computer Science) | Freedom Grammar School, Lahore</p>
                        <p className='flex-1'>(Oct 2019 – Oct 2021)</p>
                    </div>
                </div>

                {/* Tools & Technologies Section */}
                <div className='flex flex-col items-center gap-2 mt-10'>
                    <h2 className='text-yellow-500 font-bold text-2xl'>TOOLS & TECHNOLOGIES</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mt-3'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>NodeJS</p>
                        <p>ReactJS</p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className='flex flex-col items-center mt-10'>
                    <h2 className='text-yellow-500 font-bold text-2xl'>PROJECTS</h2>
                    <p className='text-center mt-3'>(Will be added soon)</p>
                </div>
            </section>
        </div>
    );
}

export default Resume;
