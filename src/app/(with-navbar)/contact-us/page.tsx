'use client'

import { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [resultType, setResultType] = useState<'success' | 'error' | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Field validation logic
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Invalid email address.';
        break;
      case 'phone':
        if (!value.trim()) return 'Phone is required.';
        const phoneRegex = /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
        if (!phoneRegex.test(value)) return 'Invalid phone number format.';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required.';
        break;
      default:
        break;
    }
    return '';
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    setResultType(null);
    setErrors({});
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // Validation on submit: only show errors for fields not already validated on blur
    const newErrors: { [key: string]: string } = {};
    const fields = ['name', 'email', 'phone', 'message'];
    fields.forEach((field) => {
      const value = (data[field] as string) || '';
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }));
      setTouched((prev) => ({ ...prev, ...fields.reduce((acc, f) => ({ ...acc, [f]: true }), {}) }));
      setSubmitting(false);
      return;
    }
    console.log('Form data:', data);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      let json = null;
      try {
        json = await res.json();
      } catch {}
      // Check for both HTTP and API-level errors
      if (
        res.ok &&
        json &&
        ((json.success && !json.data?.error) || (json.data && !json.data.error))
      ) {
        setResult('Message sent!');
        setResultType('success');
        form.reset();
      } else {
        // Show a general error message, not the API error detail
        setResult('Failed to send. Please try again later or notify the website owner about this issue.');
        setResultType('error');
      }
    } catch {
      setResult('Error sending message.');
      setResultType('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main id="contact" className="section min-h-screen flex flex-col justify-between">
      <h1>Contact</h1>
      <div className="section-inner flex flex-col md:flex-row justify-between items-stretch md:items-end w-full p-4 gap-12">
        {/* Contact Form - Top on mobile, left on desktop */}
        <form className="bg-white/80 w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <label className="flex flex-col text-sm font-medium">
            Name
            <input
              type="text"
              name="name"
              className={`form-underline-input${errors.name ? ' form-underline-input-error' : ''}`}
              onBlur={handleBlur}
            />
            {touched.name && errors.name && <span className="text-xs text-red-600 mt-1">{errors.name}</span>}
          </label>
          <label className="flex flex-col text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              className={`form-underline-input${errors.email ? ' form-underline-input-error' : ''}`}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <span className="text-xs text-red-600 mt-1">{errors.email}</span>}
          </label>
          <label className="flex flex-col text-sm font-medium">
            Phone
            <input
              type="tel"
              name="phone"
              className={`form-underline-input${errors.phone ? ' form-underline-input-error' : ''}`}
              onBlur={handleBlur}
            />
            {touched.phone && errors.phone && <span className="text-xs text-red-600 mt-1">{errors.phone}</span>}
          </label>
          <label className="flex flex-col text-sm font-medium">
            Message
            <textarea
              name="message"
              rows={4}
              className={`form-underline-input resize-none${errors.message ? ' form-underline-input-error' : ''}`}
              onBlur={handleBlur}
            />
            {touched.message && errors.message && <span className="text-xs text-red-600 mt-1">{errors.message}</span>}
          </label>
          <button type="submit" className="mt-2 bg-gray-900 text-white font-semibold py-2 rounded hover:bg-gray-800 transition" disabled={submitting}>
            {submitting ? 'Sending...' : 'Submit'}
          </button>
          {result && (
            <div
              className={`text-sm mt-2 font-semibold px-3 py-2 rounded border flex items-center justify-center ${
                resultType === 'success' ? 'text-green-600 bg-green-100 border-green-500' : resultType === 'error' ? 'text-red-600 bg-red-100 border-red-500' : ''
              }`}
            >
              {result}
            </div>
          )}
        </form>

        {/* Info - Bottom on mobile, right on desktop */}
        <div className="bg-white/80 p-4 w-full max-w-sm flex flex-col gap-2 text-gray-800 items-start md:items-end">
          <a
            href="mailto:a.blake@southernhq.co"
            className="flex flex-row-center items-center gap-2 hover:underline focus:underline outline-none"
            aria-label="Send email to a.blake@southernhq.co"
          >
            <MdOutlineEmail />
            <span>a.blake@southernhq.co</span>
          </a>
          <a
            href="tel:0434770307"
            className="flex flex-row-center items-center gap-2 hover:underline focus:underline outline-none"
            aria-label="Call 0434 770 307"
          >
            <MdOutlinePhone />
            <span>0434 770 307</span>
          </a>
          <a
            href="https://www.instagram.com/powerhousepropertyhunter/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row-center items-center gap-2 hover:underline focus:underline outline-none"
            aria-label="Visit Instagram powerhousepropertyhunter"
          >
            <FaInstagram />
            <span>powerhousepropertyhunter</span>
          </a>
          <div className='flex flex-row-center items-center gap-2'>
            <HiOutlineOfficeBuilding />
            <p>85 William St, Darlinghurst NSW 2010</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
