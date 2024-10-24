import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Articles = async () => {
    const posts = await getAllPosts();
    
    return (
        <div>
            {/* Garis dan Lingkaran di atas */}
            <div className="my-24">
                <div className="line-container relative flex justify-center items-center">
                    <div className="line w-full h-[2px] bg-neutral-900"></div> {/* Garis */}
                    <div className="circle w-8 h-8 rounded-full bg-[#00b894] absolute"></div> {/* Lingkaran */}
                </div>
            </div>

            <h2 className="projects-text text-center tracking-tighter lg:text-[6rem] text-4xl font-semibold text-white mt-6 mb-4">
                Artikel
            </h2>

            {/* Add mt-20 here for spacing */}
            <div className="mx-2 flex flex-col items-center justify-center mt-20">
                {posts.map((post, index) => (
                    <Link href={`/posts/${post.slug}`} key={index}>
                        <div className="mb-12 flex flex-col md:flex-row max-w-2xl items-center justify-between border border-slate-300 p-4 rounded-lg transition duration-300 hover:shadow-lg">
                            {/* Set ukuran gambar persegi */}
                            <div className="image-container transition-transform transform hover:translate-x-1 hover:scale-105 mb-4 md:mb-0">
                                <Image 
                                    src={post.frontMatter.image}
                                    alt={post.frontMatter.title}
                                    width={300}  // Ukuran lebar gambar persegi
                                    height={300} // Ukuran tinggi gambar sama dengan lebar
                                    className="rounded-lg object-cover" // object-cover untuk menjaga proporsi
                                />
                            </div>
                            <div className="ml-0 md:ml-4 text-center md:text-left transition-transform transform hover:translate-x-2">
                                <h2 className="font-semibold text-white transition duration-300 hover:text-[#00b894]">
                                    {post.frontMatter.title}
                                </h2>
                                <h3 className="text-md text-white font-light transition duration-300 hover:text-[#00b894]">
                                    {post.frontMatter.subtitle}
                                </h3>
                                <p className="text-sm text-neutral-500 transition duration-300 hover:text-[#00b894]">
                                    {post.frontMatter.excerpt}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Articles;
