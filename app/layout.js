import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <div className="min-h-screen flex justify-center items-center">
          {/* Background gradient */}
          <div className="z-[-10] fixed inset-0 bg-gradient-to-br from-[#005f50] to-[#002d2b]"></div>
          {/* Fixed width and centered content */}
          <div className="w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] mx-auto px-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
