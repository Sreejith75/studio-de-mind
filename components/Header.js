import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Studio De Mind Logo" className="h-10 w-auto" />
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
          <div className="container mx-auto px-4 space-y-2">
            <Link href="/" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Home</Link>
            <Link href="/about" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>About</Link>
            <Link href="/services" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Services</Link>
            <Link href="/blog" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Blog</Link>
            <Link href="/contact" className="block text-foreground hover:text-accent transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;