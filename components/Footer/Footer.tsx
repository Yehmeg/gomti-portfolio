"use client";

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10 mt-20">
      <p className="text-gray-400">
        © {new Date().getFullYear()} Gomti Kumari • Built with Next.js, Tailwind CSS & Framer Motion
      </p>
    </footer>
  );
}