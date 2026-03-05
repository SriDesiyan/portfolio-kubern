'use client';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CompetitiveProgramming from '@/components/CompetitiveProgramming';
import Experience from '@/components/Experience';
import Gallery from '@/components/Gallery';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Load heavy canvas components client-side only
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
const BackgroundSlideshow = dynamic(() => import('@/components/BackgroundSlideshow'), { ssr: false });

export default function Home() {
  return (
    <main style={{ background: '#030712', minHeight: '100vh', position: 'relative' }}>
      {/* Photo slideshow background layer */}
      <BackgroundSlideshow />

      {/* Particle layer */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <CompetitiveProgramming />
      <Experience />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
