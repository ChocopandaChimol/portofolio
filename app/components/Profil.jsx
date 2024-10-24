"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Saya adalah siswa <u><b>SMKN 21 Jakarta</b></u> yang bersemangat dalam mengembangkan keterampilan di dunia pemrograman. Saat ini, saya fokus pada pemrograman <u><b>Python</b></u> dan juga mendalami <u><b>Fullstack development</b></u> khususnya di bidang website. Saya percaya bahwa teknologi memiliki kekuatan untuk mengubah dunia dan saya ingin menjadi bagian dari perubahan tersebut melalui inovasi dan kreativitas dalam setiap proyek yang saya kerjakan.";
  const welcomeMessage = "Selamat Datang!";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); 

    return () => clearInterval(typingInterval);
  }, []);

  const isTypingFinished = typedText.length === fullText.length;

  return (
    <div className='my-24'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <div className='relative flex flex-col items-center'>
         <Image
                src='/Chocopanda.jpeg'
                width={110}
                height={110}
                alt='Chocopanda'
                className='rounded-full border-4 border-teal-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:grayscale-0 grayscale transition-all duration-300 object-cover'
                style={{ borderRadius: '50%' }} 
        />
          <h1 className="text-2xl font-bold mt-4 text-white transition-colors duration-300 ease-in-out hover:text-teal-300 text-center">
            Alfath Ghifary
          </h1>
          <div className="flex items-center mt-2">
            <p className='text-lg font-light text-slate-300 transition-colors duration-300 ease-in-out hover:text-teal-300'>
              Jakarta, Indonesia
            </p>
            <div 
              className='ml-2 flag-icon' 
              style={{ width: '30px', height: '20px', cursor: 'pointer' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 16"
                fill="currentColor"
                className="indonesian-flag"
              >
                <rect width="24" height="16" fill="#FF0000" />
                <rect y="8" width="24" height="8" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
          <button
            onClick={() => window.open('https://github.com/ChocopandaChimol', '_blank')}
            className="mt-4 bg-teal-600 text-white font-bold py-2 px-4 rounded transition duration-300 hover:bg-teal-700"
          >
            GitHub Saya
          </button>
          <div className="flex flex-col items-center mt-8">
            <p className="welcome-text text-center tracking-tighter lg:text-[9-rem]">
              {welcomeMessage}
            </p>
            <div className="relative mt-4 max-w-md mx-auto p-6 border border-teal-600 rounded-lg hover:bg-teal-500 transition duration-300 ease-in-out">
              <p className="text-lg text-slate-300 text-center">
                <span dangerouslySetInnerHTML={{ __html: typedText }} />
                {!isTypingFinished && <span className="animate-pulse">|</span>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;