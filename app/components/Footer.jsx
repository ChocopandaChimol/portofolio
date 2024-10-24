import { CiInstagram } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center gap-8">
                <a href="https://x.com/FintKJF?s=08" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-125 transition-transform duration-300 ease-in-out">
                    <CiTwitter size={30} />
                </a>
                <a href="https://www.instagram.com/alfhshardin?igsh=cGNmYnNhM2N1OG91" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-125 transition-transform duration-300 ease-in-out">
                    <CiInstagram size={30} />
                </a>
                <a href="https://github.com/ChocopandaChimol" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 hover:scale-125 transition-transform duration-300 ease-in-out">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.facebook.com/alfath.ghifary.3" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-125 transition-transform duration-300 ease-in-out">
                    <CiFacebook size={30} />
                </a>
                <a href="tel:+6281292793835" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 hover:scale-125 transition-transform duration-300 ease-in-out">
                    <BsFillTelephoneFill size={30} />
                </a>
            </div>
            <p className="mt-8 text-center text-sm tracking-wide text-white hover:text-gray-400 transition-colors duration-300">&copy; Copyright 2024 / All rights reserved</p>
        </div>
    );
};

export default Footer;
