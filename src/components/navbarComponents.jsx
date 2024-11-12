// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Navbar() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close

//     // Handler to navigate to SignIn page
//     const handleSignInClick = () => {
//         navigate("/signin");
//     };

//     // Toggle the mobile menu
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div>
//             <header className="relative flex items-center justify-center bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]">
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     {/* Logo */}
//                     <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         <img className="w-14 h-14 rounded" alt="logo" src="images/logo1.jpg" />
//                         <span className="ml-3 text-xl text-yellow-500 font-bold">Armughan's Portfolio</span>
//                     </Link>

//                     {/* Hamburger Icon for Mobile */}
//                     <button
//                         className="md:hidden text-yellow-500 hover:text-yellow-600 focus:outline-none"
//                         onClick={toggleMenu}
//                     >
//                         <svg
//                             className="w-8 h-8"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     </button>

//                     {/* Navigation Links */}
//                     <nav
//                         className={`${isOpen ? "block" : "hidden"
//                             } md:flex md:ml-auto md:mr-auto flex flex-col md:flex-row items-center text-base justify-center`}
//                     >
//                         <Link to="/" className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Home</Link>
//                         <Link to="/academics" className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Academics</Link>
//                         <Link to="/tools&technologies" className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Tools & Technologies</Link>
//                         <Link to="/contact" className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Contact</Link>
//                     </nav>

//                     {/* Sign In Button */}
//                     <button
//                         onClick={handleSignInClick}
//                         className="mr-5 p-5 mt-4 md:mt-0 transition ease-in duration-200 bg-yellow-500 text-white rounded hover:bg-yellow-600"
//                     >
//                         Sign in
//                         <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//                             <path d="M5 12h14M12 5l7 7-7 7"></path>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Mobile Menu Links */}
//                 <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]`}>
//                     <nav className="flex flex-col items-center text-base py-4">
//                         <Link to="/" onClick={toggleMenu} className="mb-2 p-3 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Home</Link>
//                         <Link to="/academics" onClick={toggleMenu} className="mb-2 p-3 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Academics</Link>
//                         <Link to="/tools&technologies" onClick={toggleMenu} className="mb-2 p-3 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Tools & Technologies</Link>
//                         <Link to="/contact" onClick={toggleMenu} className="mb-2 p-3 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white">Contact</Link>
//                     </nav>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Navbar;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger and close

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to handle hamburger menu open/close
    const navigate = useNavigate();

    // Handler to navigate to the SignIn page
    const handleSignInClick = () => {
        navigate("/signin");
    };

    // Toggle menu open/close
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ backgroundColor: "" }}>
            <header className="relative flex items-center justify-between bg-gradient-to-r from-[#fce5c2] via-[#fedbbf] to-[#fbf1f1]">
                <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
                    {/* Logo on the left */}
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className="w-14 h-14 rounded" alt="logo" src="images/logo1.png" />
                        <span className="ml-3 text-xl text-yellow-500 font-bold">Armughan's Portfolio</span>
                    </Link>

                    {/* Hamburger Icon for mobile view */}
                    <div className="md:hidden ml-auto">
                        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Navbar Links and Sign-In Button */}
                    <nav
                        className={`${isOpen ? "flex flex-col items-center" : "hidden"
                            } md:flex md:flex-row md:ml-auto md:mr-auto items-center text-base justify-center w-full md:w-auto`}
                    >
                        {/* Navigation Links */}
                        <Link
                            to="/"
                            className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white"
                        >
                            Home
                        </Link>
                        <Link
                            to="/academics"
                            className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white"
                        >
                            Academics
                        </Link>
                        <Link
                            to="/tools&technologies"
                            className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white"
                        >
                            Tools & Technologies
                        </Link>
                        <Link
                            to="/contact"
                            className="mr-5 p-5 transition ease-in duration-200 hover:bg-yellow-500 hover:text-white"
                        >
                            Contact
                        </Link>

                        {/* Sign-In Button moved to the menu */}
                        <button
                            onClick={handleSignInClick}
                            className="mr-5 p-5 mt-4 md:mt-0 transition ease-in duration-200 bg-yellow-500 text-white rounded hover:bg-yellow-600 w-35 h-12 flex items-center justify-center space-x-2"
                        >
                            <span>Sign in</span>
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
