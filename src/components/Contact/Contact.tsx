import React, { useState } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactInfo {
  email: string;
  location: string;
  hours: string;
}

interface Props {
  contactInfo?: ContactInfo;
}

const initial: FormData = { name: '', email: '', message: '' };

const defaultContactInfo: ContactInfo = {
  email: 'hello@offscreen.com',
  location: 'New Brunswick, NJ',
  hours: 'Mon-Fri, 9am-5pm EST'
};

function Contact({ contactInfo = defaultContactInfo }: Props) {
  const [formData, setFormData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Partial<FormData> {
    const errs: Partial<FormData> = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email.';
    if (!formData.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
  
    try {
      //This is where i'm adding the database
      await fetch("http://localhost:5001/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      setSubmitted(true);
      setFormData(initial);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <main>
      <section className={styles.hero}>
        <h1>Get in Touch</h1>
        <p>Have a question, suggestion, or want to collaborate? We would love to hear from you.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>

          <div className={styles.info}>
            <h2>Contact Information</h2>
            <p>We are a small team passionate about helping people find hobbies they love. Reach out anytime.</p>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📧</span>
              <div>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{contactInfo.email}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>📍</span>
              <div>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>{contactInfo.location}</span>
              </div>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🕐</span>
              <div>
                <span className={styles.infoLabel}>Hours</span>
                <span className={styles.infoValue}>{contactInfo.hours}</span>
              </div>
            </div>

            <div className={styles.social}>
              <h3>Follow Us</h3>
              <div className={styles.socialDots}>
                <span>Instagram</span>
                <span>Twitter</span>
                <span>TikTok</span>
              </div>
            </div>

            <div className={styles.faqBox}>
              <h3>Quick Answers</h3>
              <div className={styles.faqItem}>
                <strong>Is Off Screen free?</strong>
                <p>Yes — completely free to use, always.</p>
              </div>
              <div className={styles.faqItem}>
                <strong>Can I suggest a hobby?</strong>
                <p>Absolutely — send us a message using the form.</p>
              </div>
              <div className={styles.faqItem}>
                <strong>How does the quiz work?</strong>
                <p>6 questions matched against 8 hobby profiles.</p>
              </div>
            </div>
          </div>

          <div className={styles.formWrap}>
            <h2>Send us a message</h2>
            <p className={styles.formSubtext}>We read every message and respond within 1-2 business days.</p>

            {submitted ? (
              <div className={styles.success}>
                <span>✅</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. We will get back to you soon.</p>
                <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.field}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.inputError : ''}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.inputError : ''}
                  />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className={styles.select}
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="hobby">Suggest a Hobby</option>
                    <option value="bug">Report an Issue</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What is on your mind?"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? styles.inputError : ''}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>

                <div className={styles.charCount}>
                  {formData.message.length} / 500 characters
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Contact;