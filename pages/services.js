import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';

export default function Services() {
  const services = [
    {
      title: 'Mindfulness Meditation Sessions',
      description: 'Guided meditation practices to cultivate present-moment awareness and reduce stress.',
      icon: '🧘',
      features: ['Personalized meditation plans', 'Stress reduction techniques', 'Mindfulness for daily life']
    },
    {
      title: 'Individual Counseling',
      description: 'One-on-one therapy sessions to address personal challenges and emotional well-being.',
      icon: '💬',
      features: ['Confidential sessions', 'Goal-oriented therapy', 'Emotional support']
    },
    {
      title: 'Mindset Coaching',
      description: 'Transform limiting beliefs and develop a positive, growth-oriented mindset.',
      icon: '🧠',
      features: ['Cognitive reframing', 'Goal setting strategies', 'Self-empowerment tools']
    },
    {
      title: 'Virtual Therapy Sessions',
      description: 'Convenient online therapy options for remote clients and busy schedules.',
      icon: '💻',
      features: ['Secure video calls', 'Flexible scheduling', 'Same quality care']
    },
    {
      title: 'Group Mindfulness Workshops',
      description: 'Interactive group sessions to build community and shared mindfulness practices.',
      icon: '👥',
      features: ['Community building', 'Shared experiences', 'Group discussions']
    },
    {
      title: 'Holistic Wellness Programs',
      description: 'Comprehensive programs integrating mental, emotional, and physical well-being.',
      icon: '🌿',
      features: ['Integrated approaches', 'Lifestyle coaching', 'Long-term wellness plans']
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Studio De Mind</title>
        <meta name="description" content="Explore our range of mindfulness sessions, counseling, and mindset coaching services designed to support your mental wellness journey." />
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
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-foreground text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Discover our comprehensive range of mental health and mindfulness services, tailored to support your unique journey towards wellness and self-discovery.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-5xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{service.title}</h3>
                  <p className="text-foreground mb-4 text-center">{service.description}</p>
                  <ul className="text-sm text-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="mb-1 flex items-center">
                        <span className="text-accent mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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