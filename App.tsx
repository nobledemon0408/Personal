
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Linkedin, 
  Instagram, 
  FileText, 
  ChevronRight, 
  ArrowRight, 
  Heart, 
  Coffee, 
  Zap, 
  BrainCircuit, 
  Search,
  MessageCircle,
  Stethoscope,
  Dog,
  Palette
} from 'lucide-react';

// Components
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Experience from './components/Experience';
import HowIWork from './components/HowIWork';
import Toolkit from './components/Toolkit';
import Lifestyle from './components/Lifestyle';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Experience', href: '#experience' },
    { name: 'Lifestyle', href: '#lifestyle' },
  ];

  return (
    <div className="min-h-screen relative selection:bg-rose-200">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-3 shadow-md border-b border-rose-50' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-2xl font-serif font-black tracking-tighter group">
            ADITI<span className="text-rose-600">.</span>VERMA
            <div className="h-0.5 w-0 group-hover:w-full bg-rose-600 transition-all duration-500"></div>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xs font-bold tracking-[0.2em] hover:text-rose-600 transition-colors"
              >
                {item.name.toUpperCase()}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1PcuyqLOnw7_u7TKQsRsqJUlRi8iW3tE6/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-neutral-900 text-white text-xs font-bold tracking-[0.1em] rounded-full hover:bg-rose-600 transition-all transform hover:-translate-y-1 shadow-lg flex items-center space-x-2"
            >
              <span>RESUME</span>
              <FileText size={14} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-neutral-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 right-0 h-screen bg-white z-[60] flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            <button className="absolute top-8 right-6 p-2" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-4xl font-serif font-bold italic"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://drive.google.com/file/d/1PcuyqLOnw7_u7TKQsRsqJUlRi8iW3tE6/view?usp=sharing" 
              className="px-10 py-4 bg-neutral-900 text-white font-bold rounded-full shadow-xl"
            >
              DOWNLOAD CV
            </a>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Journey />
        <Experience />
        <HowIWork />
        <Toolkit />
        <Lifestyle />
      </main>

      <Footer />
    </div>
  );
};

export default App;
