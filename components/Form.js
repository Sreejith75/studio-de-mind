import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { motion } from 'framer-motion';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    appointmentDate: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, appointmentDate: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '', appointmentDate: null });
      } else {
        setSubmitMessage('Sorry, there was an error sending your message.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message.');
    }

    setIsSubmitting(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-foreground mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-foreground mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Email"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="appointmentDate" className="block text-foreground mb-2">Appointment Date</label>
        <DatePicker
          selected={formData.appointmentDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          minDate={new Date()}
          className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          placeholderText="Select a date"
          aria-label="Appointment Date"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-foreground mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 py-2 border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Message"
        ></textarea>
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-foreground py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Submit form"
      >
        {isSubmitting ? 'Sending...' : 'Book Appointment'}
      </motion.button>
      {submitMessage && (
        <p className="mt-4 text-center text-accent" role="alert">{submitMessage}</p>
      )}
    </motion.form>
  );
};

export default Form;