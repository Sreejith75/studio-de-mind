import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Details - Studio De Mind</title>
        <meta name="description" content="Get in touch with Studio De Mind. Find our contact details, email, phone, location, and hours. We're here to support your mental wellness journey." />
      </Head>
      <Header />
      <main>
        <SectionWrapper className="bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-8">
                Contact Details
              </h1>
              <p className="text-xl text-foreground text-center mb-12">
                Get in touch with us. Find our contact information and reach out for support on your mental wellness journey.
              </p>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <span className="text-accent mr-3">📧</span>
                    <div className="text-center">
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-foreground">info@studiodemind.com</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent mr-3">📞</span>
                    <div className="text-center">
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-foreground">(555) 123-MIND</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent mr-3">📍</span>
                    <div className="text-center">
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-foreground">123 Serenity Lane<br />Mindful City, MC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-accent mr-3">🕒</span>
                    <div className="text-center">
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-foreground">Mon-Fri: 9AM-6PM<br />Sat: 10AM-4PM</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="tel:(555) 123-MIND"
                    className="inline-block bg-accent text-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us</h3>
                  <a
                    href="https://instagram.com/studiodemind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-accent hover:text-accent/80 transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}