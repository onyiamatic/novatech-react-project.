import React from 'react';
import { useState } from "react";

const initialForm = { fullName: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.fullName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFeedbackType("error");
      setFeedback("Please complete every field before submitting.");
      return;
    }
    if (!emailIsValid) {
      setFeedbackType("error");
      setFeedback("Please enter a valid email address.");
      return;
    }
    setFeedbackType("success");
    setFeedback(`Thanks, ${form.fullName.trim()}! Your demo message has been received.`);
    setForm(initialForm);
  }

  return (
    <main className="page-shell">
      <section className="page-hero container">
        <span className="eyebrow">LET'S TALK</span>
        <h1>We'd like to<br /><span>hear from you.</span></h1>
        <p>Have a question about a product or need help? Send our demo team a message.</p>
      </section>
      <section className="container contact-layout section">
        <div className="contact-details">
          <span className="eyebrow">CONTACT DETAILS</span>
          <h2>Start a conversation.</h2>
          <p>These are sample contact details for the student project. Replace them with verified business details if you use this site for a real organisation.</p>
          <div className="contact-detail"><span>✉</span><div><small>EMAIL</small><strong>hello@novatech.example</strong></div></div>
          <div className="contact-detail"><span>☎</span><div><small>PHONE</small><strong>+234 800 000 0000</strong></div></div>
          <div className="contact-detail"><span>⌖</span><div><small>LOCATION</small><strong>Lagos, Nigeria (sample)</strong></div></div>
          <div className="notice">Demo form: messages are validated in your browser and are not sent to an email server.</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send us a message</h2>
          <div className="form-row">
            <label>Full name<input name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" /></label>
            <label>Email address<input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" /></label>
          </div>
          <label>Subject<input name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" /></label>
          <label>Message<textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="Write your message..." /></label>
          {feedback && <p className={`form-feedback ${feedbackType}`} role="status">{feedback}</p>}
          <button className="button button-primary submit-button" type="submit">Submit message <span>↗</span></button>
        </form>
      </section>
    </main>
  );
}
