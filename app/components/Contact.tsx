"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const mailto = `mailto:youremail@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
    form.name || "Visitor"
  )}&body=${encodeURIComponent(form.message)}%0D%0A%0D%0AFrom:%20${encodeURIComponent(
    form.email
  )}`;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="mt-2 text-center text-gray-600">
          Prefer email? Fill this quick form or reach me via social links below.
        </p>

        <form
          className="mt-8 space-y-4 rounded-2xl border bg-white p-6 shadow-sm"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailto; // simple no-backend fallback
          }}
        >
          <div>
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-xl border px-4 py-2 outline-none ring-blue-200 focus:ring"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-xl border px-4 py-2 outline-none ring-blue-200 focus:ring"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="w-full rounded-xl border px-4 py-2 outline-none ring-blue-200 focus:ring"
              placeholder="How can I help?"
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:brightness-110 active:scale-[0.99]"
            >
              Send
            </button>
            <a
              href="mailto:youremail@example.com"
              className="text-blue-600 underline-offset-2 hover:underline"
            >
              Or email directly
            </a>
          </div>
        </form>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a className="text-blue-600 hover:underline" href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="text-blue-600 hover:underline" href="https://x.com/yourhandle" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  );
}
