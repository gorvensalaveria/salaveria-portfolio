export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-gray-600 md:flex-row">
        <p>© {new Date().getFullYear()} Gorven Salaveria. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}
