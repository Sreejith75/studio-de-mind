import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-background shadow-md z-50">
      <div className="px-2 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/studio-de-mind-logo.png" alt="Studio De Mind Logo" className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-foreground hover:text-accent transition-colors">Home</Link>
          <Link href="/about" className="text-foreground hover:text-accent transition-colors">About</Link>
          <Link href="/services" className="text-foreground hover:text-accent transition-colors">Services</Link>
          <Link href="/blog" className="text-foreground hover:text-accent transition-colors">Blog</Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition-colors">Contact</Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background border-t border-accent py-4"
        >
          <div className="px-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="/blog" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link href="/contact" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Contact</Link>
            <div className="pt-4 border-t border-accent">
              <Link href="/" className="flex items-center justify-center" onClick={toggleMenu}>
                <img src="/studio-de-mind-logo.png" alt="Studio De Mind Logo" className="h-12 w-auto" />
              </Link>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
