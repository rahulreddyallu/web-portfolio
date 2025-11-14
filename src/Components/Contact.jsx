import React, { useState } from 'react';
import '../Styles/Contact.css';

export default function Contact() {
  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Replace this with your actual form submission logic
      // For example: sending to an API endpoint, EmailJS, or Formspree
      
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);

    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Something went wrong. Please try again.' 
      });
    }
  };

  return (
    <div className="Contact">
      {/* Animated Background */}
      <div className="contact-bg-gradient" />

      {/* Main Content */}
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <h1>Let's Connect</h1>
          <p className="contact-subtitle">
            Have a question, project idea, or just want to say hello? 
            I'd love to hear from you.
          </p>
        </header>

        {/* Two Column Layout */}
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              I'm always open to discussing new opportunities, collaborations, 
              or answering any questions you might have.
            </p>

            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:rahul@example.com">rahul@example.com</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <h3>LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/yourprofile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">💻</span>
                <div>
                  <h3>GitHub</h3>
                  <a 
                    href="https://github.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h3>Location</h3>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Success Message */}
              {formStatus.submitted && (
                <div className="alert alert-success" role="alert">
                  <strong>✓ Message sent successfully!</strong>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="alert alert-error" role="alert">
                  <strong>✕ {formStatus.error}</strong>
                </div>
              )}

              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Your name"
                  disabled={formStatus.submitting}
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span className="error-message" id="name-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="your.email@example.com"
                  disabled={formStatus.submitting}
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span className="error-message" id="email-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  disabled={formStatus.submitting}
                  aria-required="true"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span className="error-message" id="message-error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-btn"
                disabled={formStatus.submitting}
                aria-busy={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
