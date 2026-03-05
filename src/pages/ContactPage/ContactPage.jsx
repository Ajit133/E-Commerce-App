import React, { useState } from 'react';
import './ContactPage.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="contactPage">
      <div className="pageHero">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Our team is always here to help.</p>
      </div>

      <div className="contactBody">
        <div className="infoPanel">
          <div className="infoItem">
            <LocationOnOutlinedIcon className="icon" />
            <div>
              <h4>Our Address</h4>
              <p>123 Fashion Avenue, New York, NY 10001, USA</p>
            </div>
          </div>
          <div className="infoItem">
            <PhoneOutlinedIcon className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+1 (800) 123-4567</p>
            </div>
          </div>
          <div className="infoItem">
            <EmailOutlinedIcon className="icon" />
            <div>
              <h4>Email</h4>
              <p>hello@mystore.com</p>
            </div>
          </div>
          <div className="infoItem">
            <AccessTimeOutlinedIcon className="icon" />
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="formPanel">
          {sent ? (
            <div className="thankYou">
              <h2>Thank you, {form.name}! 🎉</h2>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>
              <div className="row">
                <div className="field">
                  <label>Your Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="field">
                  <label>Email Address *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder="Order enquiry, returns, etc." />
              </div>
              <div className="field">
                <label>Message *</label>
                <textarea name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Write your message here..." required />
              </div>
              <button type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
