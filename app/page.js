import Profile from '@/app/components/Profil';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Profile />
      <Projects/>
      <Skills/>
      <Experience/>
      <Articles/>
      <Contact/>
      <Footer/>
    </>
  );
}
