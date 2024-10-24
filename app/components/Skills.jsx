"use client"; // Ensure this component runs on the client side

import { RiReactjsLine } from "react-icons/ri"; // React icon
import { FaPython } from "react-icons/fa"; // Python icon
import { FaHtml5 } from "react-icons/fa"; // HTML5 icon
import { FaCss3 } from "react-icons/fa"; // CSS3 icon
import { IoLogoJavascript } from "react-icons/io5"; // JavaScript icon
import { FaBootstrap } from "react-icons/fa"; // Bootstrap icon

const Skills = () => {
    return (
        <div className="pb-24">
            <h1 className="skills-text text-center tracking-tighter lg:text-[6rem] text-4xl font-semibold text-white mt-6">
                Skills
            </h1>
            
            {/* Add more margin to increase the spacing between the heading and the icons */}
            <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
                {/* React icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-cyan-400 p-6 hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <RiReactjsLine className="text-7xl text-cyan-400 transition duration-300 ease-in-out" />
                </div>

                {/* Python icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-yellow-400 p-6 hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <FaPython className="text-7xl text-yellow-400 transition duration-300 ease-in-out" />
                </div>

                {/* HTML5 icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-orange-600 p-6 hover:bg-green-500 hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <FaHtml5 className="text-7xl text-orange-600 transition duration-300 ease-in-out" />
                </div>

                {/* CSS3 icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-blue-600 p-6 hover:bg-purple-500 hover:border-purple-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <FaCss3 className="text-7xl text-blue-600 transition duration-300 ease-in-out" />
                </div>

                {/* JavaScript icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-yellow-300 p-6 hover:bg-red-500 hover:border-red-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <IoLogoJavascript className="text-7xl text-yellow-300 transition duration-300 ease-in-out" />
                </div>

                {/* Bootstrap icon with custom hover effect */}
                <div className="rounded-2xl border-4 border-purple-600 p-6 hover:bg-teal-500 hover:border-teal-500 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                    <FaBootstrap className="text-7xl text-purple-600 transition duration-300 ease-in-out" />
                </div>
            </div>

            {/* Optional: You can add some spacing below the icons if needed */}
            <div className="mt-12"></div> {/* Spacing below the icons */}
        </div>
    );
};

export default Skills;
