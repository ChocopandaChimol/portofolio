"use client"; // Make this component a client component

import { EXPERIENCE } from "@/constants"; // Ensure this is correct

const Experience = () => {
    return (
        <div>
            {/* Garis dan lingkaran di atas */}
            <div className="my-24">
                <div className="line-container relative flex justify-center items-center">
                    {/* Garis */}
                    <div className="line w-full h-[2px] bg-neutral-900"></div>
                    {/* Lingkaran */}
                    <div className="circle w-8 h-8 rounded-full bg-[#00b894] absolute"></div>
                </div>
            </div>

            {/* Konten pengalaman */}
            <div className="pb-4">
                <h2 className="projects-text text-center tracking-tighter lg:text-[6rem] text-4xl font-semibold text-white mt-6 mb-4">
                    Pengalaman
                </h2>
                <div className="mt-20"> {/* Add margin here */}
                    {EXPERIENCE && EXPERIENCE.length > 0 ? (
                        EXPERIENCE.map((experience, index) => (
                            <div
                                key={index}
                                className="mb-8 flex flex-col lg:flex-row lg:justify-center items-center"
                            >
                                {/* Div untuk Tahun */}
                                <div className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0">
                                    <p className="text-sm text-neutral-400 transition duration-300 ease-in-out hover:text-[#00b894] hover:translate-x-1">
                                        {experience.tahun}
                                    </p>
                                </div>

                                {/* Div untuk Bagian dan Deskripsi */}
                                <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left flex flex-col items-center lg:items-start">
                                    {/* Wrapper for keeping the content centered in mobile and aligned in desktop */}
                                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                                        <h6 className="mb-2 font-semibold text-neutral-400 transition duration-300 ease-in-out hover:text-[#00b894] hover:translate-x-1">
                                            {experience.bagian}
                                        </h6>
                                        <p className="mb-4 text-neutral-400 transition duration-300 ease-in-out hover:text-[#00b894] hover:translate-x-1">
                                            {experience.deskripsi}
                                        </p>
                                    </div>
                                    {experience.teknologi && (
                                        <div className="flex flex-wrap mt-2 justify-center lg:justify-start">
                                            {experience.teknologi.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 transition duration-300 ease-in-out hover:bg-[#00b894] hover:text-white"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-neutral-400">No experiences available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Experience;
