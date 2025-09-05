"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="mt-2 text-center text-gray-600">
          Prefer email? Fill this quick form or reach me via social links below.
        </p>

        <form
          className="mt-8 space-y-4 rounded-2xl border bg-white p-6 shadow-sm"
          onSubmit={onSubmit}
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
              disabled={status === "loading"}
              className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white transition hover:brightness-110 active:scale-[0.99]"
            >
              {status === "loading" ? "Sending..." : "Send"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-600">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              ❌ Something went wrong. Try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
