import React, { useEffect, forwardRef, useState } from "react";
import { motion } from "framer-motion";
import ContactBack from "../components/ContactBack";
import Navbar from "../components/Navbar";
import emailjs from '@emailjs/browser';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Contact section loaded");
    
    // Initialize EmailJS with your public key
    emailjs.init("OOBIcZkbDLk_dBPYs");
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Sending email with data:', {
        service: 'service_t9v8bsi',
        template: 'template_nkne9lv',
        data: formData
      });

      // EmailJS send function
      const result = await emailjs.send(
        'service_t9v8bsi',    // Your service ID
        'template_nkne9lv',   // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Portfolio Owner', // Generic name
        },
        'OOBIcZkbDLk_dBPYs' // Public key as 4th parameter
      );

      console.log('Email sent successfully:', result);
      
      if (result.status === 200) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Email service returned non-200 status');
      }
      
    } catch (error) {
      console.error('Detailed error:', error);
      
      // More specific error messages
      let errorMessage = 'Sorry, there was an error sending your message. ';
      
      if (error.status === 422) {
        errorMessage += 'Please check that all fields are filled correctly.';
      } else if (error.status === 400) {
        errorMessage += 'Invalid request. Please check your input.';
      } else if (error.status === 403) {
        errorMessage += 'Service temporarily unavailable.';
      } else {
        errorMessage += 'Please try again later.';
      }
      
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Contact Background */}
      <ContactBack />

      {/* Contact Content */}
      <motion.div
        className="relative z-40 flex flex-col items-center justify-center min-h-screen px-8 py-20 pb-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Page Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-xl mt-4 max-w-2xl">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="w-full max-w-2xl mb-16">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                  placeholder="Project Discussion"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="magic-button w-full relative overflow-hidden text-white cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                  backdropFilter: 'blur(10px)',
                  animation: 'floating 3s ease-in-out infinite',
                  boxShadow: '0 0 15px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '12px 24px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  borderRadius: '0.5rem'
                }}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                onMouseEnter={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.setProperty('--shimmer-opacity', '1');
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) {
                    e.currentTarget.style.setProperty('--shimmer-opacity', '0');
                  }
                }}
                onClick={(e) => {
                  if (!isLoading) {
                    const ripple = e.currentTarget.querySelector('.ripple');
                    if (ripple) {
                      ripple.style.animation = 'none';
                      ripple.offsetHeight; // Trigger reflow
                      ripple.style.animation = 'ripple-effect 0.6s linear';
                    }
                  }
                }}
              >
                {/* Shimmer Layer */}
                <span 
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    background: 'linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)',
                    backgroundSize: '200% auto',
                    opacity: 'var(--shimmer-opacity, 0)',
                    transition: 'opacity 0.3s'
                  }}
                />
                
                <span className="font-poppins font-bold relative z-20">
                  {isLoading ? 'Sending... ⏳' : 'Send Message 🚀'}
                </span>
                
                {/* Ripple Effect */}
                <span 
                  className="ripple absolute rounded-full pointer-events-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    transform: 'scale(0)',
                    top: '50%',
                    left: '50%',
                    width: '20px',
                    height: '20px',
                    marginTop: '-10px',
                    marginLeft: '-10px',
                    zIndex: 0
                  }}
                />

                <style jsx>{`
                  @keyframes floating {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                    100% { transform: translateY(0); }
                  }
                  
                  @keyframes ripple-effect {
                    0% {
                      transform: scale(0);
                      opacity: 0.7;
                    }
                    100% {
                      transform: scale(3);
                      opacity: 0;
                    }
                  }
                `}</style>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Navbar */}
      <Navbar />
    </section>
  );
});

Contact.displayName = 'Contact';

export default Contact;