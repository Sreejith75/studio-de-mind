import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio De Mind - Mental Health & Mindset Therapy</title>
        <meta name="description" content="Promoting mindfulness and mental wellness through personalized therapy sessions. Book your appointment today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/studio-de-mind-logo.png" />
      </Head>
      <Header />
      <main>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20 relative overflow-hidden">
          <motion.div
            className="text-center z-10 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/studio-de-mind-logo.png"
              alt="Studio De Mind Logo - Brain Camera Icon"
              className="mx-auto mb-8 w-32 h-32"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              In stillness, the mind speaks
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Welcome to Studio De Mind, your sanctuary for mental health and mindset therapy. Discover inner peace through our personalized mindfulness sessions and counseling services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              <Link href="/contact" className="inline-block bg-accent text-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
                Book Your Session
              </Link>
            </motion.div>
          </motion.div>
          {/* Subtle particle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-accent/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
