import Head from 'next/head';
import { motion } from 'framer-motion';
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

  return (
    <>
      <Head>
        <title>About Us - Studio De Mind</title>
        <meta name="description" content="Learn about our mission to promote mindfulness and mental wellness through personalized therapy services." />
      </Head>
      <Header />
      <main>
        <SectionWrapper className="bg-background">
          <div className="container mx-auto px-4">
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
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Meet Our Therapist
            </motion.h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center text-6xl mb-4 md:mb-0 md:mr-6">
                    👩‍⚕️
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">Dr. Sarah Mindfulness</h3>
                    <p className="text-accent font-medium mb-4">Licensed Clinical Psychologist & Mindfulness Practitioner</p>
                  </div>
                </div>
                <p className="text-foreground mb-4">
                  With over 15 years of experience in mental health therapy, Dr. Sarah Mindfulness specializes in mindfulness-based cognitive therapy, trauma-informed care, and holistic wellness approaches. She holds a Ph.D. in Clinical Psychology from the University of Mindfulness and is certified in various mindfulness meditation techniques.
                </p>
                <p className="text-foreground">
                  Dr. Mindfulness is passionate about helping individuals reconnect with their inner wisdom and find peace amidst life's challenges. Her approach integrates traditional therapeutic methods with contemporary mindfulness practices to provide comprehensive, client-centered care.
                </p>
              </motion.div>
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