"use client";

import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">BuiltByMe</h3>
          <p className="text-gray-500 text-sm">
            A platform to showcase your projects, connect with creators, and grow your skills.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Products</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link href="/explore" className="hover:text-pink-500 transition">Explore Projects</Link></li>
            <li><Link href="/share-project" className="hover:text-pink-500 transition">Share Project</Link></li>
            <li><Link href="/featured" className="hover:text-pink-500 transition">Featured</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-md font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li><Link href="/about" className="hover:text-pink-500 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-pink-500 transition">Careers</Link></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-gray-600 space-y-2 sm:space-y-0">
        <span>&copy; {new Date().getFullYear()} BuiltByMe. All rights reserved.</span>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-blue-600"><Facebook size={18} /></Link>
          <Link href="#" className="hover:text-blue-400"><Twitter size={18} /></Link>
          <Link href="#" className="hover:text-gray-800"><Github size={18} /></Link>
          <Link href="#" className="hover:text-blue-700"><Linkedin size={18} /></Link>
        </div>
      </div>
    </footer>
  );
}
