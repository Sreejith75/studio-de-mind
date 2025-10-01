import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';

export default function About() {
  const values = [
    { title: 'Mindfulness', description: 'Cultivating present-moment awareness for better mental clarity.', icon: '🧘' },
    { title: 'Compassion', description: 'Fostering self-compassion and empathy in all interactions.', icon: '❤️' },
    { title: 'Growth', description: 'Supporting personal development and emotional resilience.', icon: '🌱' },
    { title: 'Holistic Approach', description: 'Integrating mind, body, and spirit for comprehensive wellness.', icon: '🌿' },
  ];

  const therapists = [
    {
      name: 'Farhana',
      title: 'Consultant Psychologist',
      quote: "Whether you're feeling lost, overwhelmed, or unsure - sharing is a step toward feeling lighter. I am here to listen-without judgement, without pressure. Your story matters... Let's talk. You don't have to carry it alone.",
      photo: '/Farhana.jpg'
    },
    {
      name: 'Minha Marjan',
      title: 'Consultant Psychologist',
      quote: "Welcome to your journey of self-discovery! Let's explore life's challenges together, with empathy, expertise, and compassion as our guide. In a safe and non-judgmental space, we'll uncover your strengths, build resilience, and reveal your inner wisdom. Ready to embark on this transformative adventure?",
      photo: '/Minha.jpg'
    },
    {
      name: 'Esther',
      title: 'Consultant Psychologist',
      quote: "Hello Esther here, your Consultant Psychologist. I'm excited to support you on your path to growth and self-awareness. Together, we'll explore your thoughts, feelings, and experiences in a safe and compassionate space. My goal is to empower you with the tools and insights you need to navigate life's challenges with confidence and clarity.",
      photo: '/Esther.jpg'
    }
  ];

  return (
    <>
      <Head >
        <title >About Us - Studio De Mind</title>
        <meta name="description" content="Learn about our mission to promote mindfulness and mental wellness through personalized therapy services." />
      </Head>
      <Header />
      <main>
        <SectionWrapper className="bg-background">
          <div className="container mx-auto px-4 mt-[2rem]">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Studio De Mind
            </motion.h1>
            <motion.div
              className="max-w-3xl mx-auto text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-lg text-foreground mb-6">
                At Studio De Mind, we are dedicated to promoting mindfulness and mental wellness in our community. Our mission is to provide a safe, supportive environment where individuals can explore their inner world, develop coping strategies, and cultivate a deeper sense of self-awareness and compassion.
              </p>
              <p className="text-lg text-foreground">
                We believe that mental health is not just the absence of illness, but the presence of positive psychological well-being. Through our personalized therapy sessions, we help clients navigate life's challenges, build resilience, and discover their inherent capacity for healing and growth.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-accent/10">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Therapists
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {therapists.map((therapist, index) => (
                <motion.div
                  key={therapist.name}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <Image
                      src={therapist.photo}
                      alt={therapist.name}
                      width={160}
                      height={160}
                      className="rounded-full mx-auto border-4 border-accent"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{therapist.name}</h3>
                  <p className="text-accent font-medium mb-4">{therapist.title}</p>
                  <p className="text-foreground italic">"{therapist.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}