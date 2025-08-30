"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">Gorven Salaveria</h1>
        <ul className="hidden md:flex gap-6">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-blue-600">{section}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {open && (
          <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center p-4 md:hidden">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((section) => (
              <li key={section} className="py-2">
                <a href={`#${section.toLowerCase()}`} onClick={() => setOpen(false)}>{section}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
