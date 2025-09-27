import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Power of Mindfulness in Daily Life',
      excerpt: 'Discover how incorporating mindfulness practices into your routine can transform your mental well-being and overall quality of life.',
      date: 'October 15, 2023',
      readTime: '5 min read',
      category: 'Mindfulness'
    },
    {
      id: 2,
      title: 'Understanding and Managing Anxiety',
      excerpt: 'Learn practical strategies to recognize anxiety triggers and develop coping mechanisms for a calmer, more balanced life.',
      date: 'October 10, 2023',
      readTime: '7 min read',
      category: 'Mental Health'
    },
    {
      id: 3,
      title: 'Building Emotional Resilience',
      excerpt: 'Explore techniques to strengthen your emotional resilience and navigate life\'s challenges with greater ease and confidence.',
      date: 'October 5, 2023',
      readTime: '6 min read',
      category: 'Personal Growth'
    },
    {
      id: 4,
      title: 'The Mind-Body Connection',
      excerpt: 'Uncover the profound link between mental and physical health, and how nurturing both leads to holistic wellness.',
      date: 'September 28, 2023',
      readTime: '8 min read',
      category: 'Wellness'
    }
  ];

  return (
    <>
      <Head>
        <title>Blog - Studio De Mind</title>
        <meta name="description" content="Read our latest articles on mindfulness, mental health, and personal growth to support your wellness journey." />
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
              Mindful Insights Blog
            </motion.h1>
            <motion.p
              className="text-xl text-foreground text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Explore our collection of articles on mindfulness, mental health, and personal development. Stay informed and inspired on your journey to wellness.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <span className="inline-block bg-accent text-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-semibold text-foreground mb-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-foreground mb-4">{post.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center text-sm text-foreground/70">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-block mt-4 text-accent hover:text-accent/80 font-medium transition-colors"
                  >
                    Read More →
                  </Link>
                </motion.article>
              ))}
            </div>
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-foreground mb-4">Stay updated with our latest insights</p>
              <Link href="/contact" className="inline-block bg-accent text-foreground px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
                Subscribe to Newsletter
              </Link>
            </motion.div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}