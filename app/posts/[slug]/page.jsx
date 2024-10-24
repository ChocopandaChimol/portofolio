import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { IoHome } from 'react-icons/io5'; // Pastikan huruf besar di IoHome
import Link from 'next/link';

// Lokasi folder posts
const postsDirectory = path.join(process.cwd(), 'posts');

// Fungsi untuk mendapatkan static paths (slug)
export async function generateStaticParams() {
    const filenames = fs.readdirSync(postsDirectory);
    const slugs = filenames.map((filename) => ({
        slug: filename.replace(/\.mdx$/, ''),
    }));
    
    return slugs;
}

// Fungsi untuk render halaman berdasarkan slug
export default async function Page({ params }) {
    const { slug } = params;

    if (!slug) {
        throw new Error("Slug is undefined");
    }

    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href='/'>
                        <button className='flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 font-semibold rounded-lg'>
                            <IoHome size={24} />
                            <span>Home</span>
                        </button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto py-10 px-5 md:px-20">
                <article className="prose prose-lg prose-slate max-w-none">
                    {/* Menampilkan judul dari metadata */}
                    <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
                    
                    {/* Menampilkan gambar dari metadata */}
                    {data.image && (
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="w-full h-auto my-6 rounded-lg shadow-md" 
                        />
                    )}

                    {/* Menampilkan tanggal dan penulis */}
                    <div className="text-gray-500 text-sm mb-4">
                        {data.date && <span>{new Date(data.date).toLocaleDateString()}</span>}
                        {data.author && <span className="mx-2">|</span>}
                        {data.author && <span>{data.author}</span>}
                    </div>

                    {/* Menampilkan konten dari MDX */}
                    <MDXRemote source={content} />
                </article>
            </main>

            <footer className="bg-gray-800 text-white py-4 text-center mt-20">
                <p>&copy; {new Date().getFullYear()} Your Blog. All rights reserved.</p>
            </footer>
        </div>
    );
}
