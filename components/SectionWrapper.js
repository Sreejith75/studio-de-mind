import { motion } from 'framer-motion';

const SectionWrapper = ({ children, className = '', id = '' }) => {
  return (
    <motion.section
      id={id}
      className={`py-16 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;