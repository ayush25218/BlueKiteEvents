"use client";

import React, { useEffect, useRef, useState, FormEvent } from "react";
import Image from "next/image";

// --- SVG Icon Components (no changes needed here) ---
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function ContactPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '', isError: false });
  const [isLoading, setIsLoading] = useState(false);
  const textToType = "LET'S CONNECT";
  const revealRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= textToType.length) {
          clearInterval(intervalId);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 150);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const validRefs = revealRefs.current.filter(Boolean) as HTMLElement[];
    if (validRefs.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    validRefs.forEach((el, index) => {
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });
    return () => validRefs.forEach((el) => el && observer.unobserve(el));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus({ submitted: false, message: '', isError: false });

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus({ submitted: true, message: 'Thank you! Your message has been sent.', isError: false });
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }
    } catch (error: unknown) {
      let msg = 'Something went wrong.';
      if (
        error &&
        typeof error === 'object' &&
        'message' in error &&
        typeof (error as { message: unknown }).message === 'string'
      ) {
        msg = (error as { message: string }).message;
      }
      setFormStatus({ submitted: true, message: `Error: ${msg}`, isError: true });
    }
    finally {
      setIsLoading(false);
      setTimeout(() => setFormStatus({ submitted: false, message: '', isError: false }), 6000);
    }
  };

  const contactDetails = [
    { icon: <MailIcon />, text: "info@bluekiteevents.com", href: "mailto:info@bluekiteevents.com" },
    { icon: <PhoneIcon />, text: "+91 9355 510 707", href: "tel:+919355510707" },
    { icon: <LocationIcon />, text: "New Delhi, India" },
  ];

  const formFields = [
    { id: "name", name: "name", type: "text", label: "Full Name" },
    { id: "email", name: "email", type: "email", label: "Email Address" },
    { id: "subject", name: "subject", type: "text", label: "Subject" },
    { id: "message", name: "message", type: "textarea", label: "Your Message" },
  ];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8 mt-10">
      <main className="w-full max-w-6xl rounded-2xl shadow-2xl shadow-slate-900/10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* LEFT: Info Section */}
        <section className="flex items-center justify-center relative">
          <div className="relative w-full h-full rounded-2xl shadow-2xl shadow-blue-900/30 border border-white/10 bg-gradient-to-b from-[#166397] to-[#142967] flex flex-col justify-center p-8 sm:p-12 transition-all duration-500 hover:scale-105 hover:shadow-3xl">
            {/* The rest of your left info content goes here */}
            <div className="relative z-10">
              <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight flex items-center" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <span>{textToType.substring(0, currentIndex)}</span>
                  {currentIndex < textToType.length && (
                    <span className="ml-2 w-1 h-10 bg-blue-400 animate-blink" />
                  )}
                </h1>
              </div>

              <p ref={addToRefs} className="mt-4 text-lg text-slate-200 leading-relaxed opacity-0 translate-y-8 transition-all duration-700">
                Have a question or a project in mind? We&apos;d love to hear from you. Fill out the form or use the contact details below.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactDetails.map((item) => (
                  <div key={item.text} ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700">
                    <a href={item.href} className="transition-opacity hover:opacity-80">
                      <div className="flex items-center gap-4 group">
                        <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500/50">
                          {item.icon}
                        </div>
                        <span className="font-medium text-slate-100">{item.text}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT: Form Section */}
        <section className="p-8 sm:p-12 bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 h-full">
            {formFields.map((field) => (
              <div key={field.id} ref={addToRefs} className="relative opacity-0 translate-y-8 transition-all duration-700">
                {field.type === 'textarea' ? (
                  <textarea id={field.id} name={field.name} required rows={5} placeholder=" " className="peer w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none" />
                ) : (
                  <input type={field.type} id={field.id} name={field.name} required placeholder=" " className="peer w-full bg-slate-50 border-2 border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors" />
                )}
                <label htmlFor={field.id} className="pointer-events-none absolute left-4 -top-2.5 text-sm text-slate-500 transition-all duration-300 bg-white px-1 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600">
                  {field.label}
                </label>
              </div>
            ))}
            <div ref={addToRefs} className="opacity-0 translate-y-8 transition-all duration-700 mt-auto">
              <button type="submit" disabled={isLoading} className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 disabled:bg-slate-400 disabled:cursor-not-allowed">
                {isLoading ? 'SENDING...' : 'SEND MESSAGE'} <SendIcon />
              </button>
              {formStatus.submitted && (
                <p className={`font-medium mt-4 text-center sm:text-left ${formStatus.isError ? 'text-red-600' : 'text-green-600'}`}>
                  {formStatus.message}
                </p>
              )}
            </div>
          </form>
        </section>

        <style jsx>{`
          @keyframes blink { 50% { opacity: 0; } }
          .animate-blink { animation: blink 1s step-end infinite; }
          @media (prefers-reduced-motion: reduce) { .animate-blink { animation: none; } }
        `}</style>
      </main>
    </div>
  );
}
