"use client";

import { CompassIcon, HomeIcon, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Header() {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const Logo = () => {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <SparkleIcon className="w-6 h-6 text-yellow-500" />
        <span className="font-bold text-lg">
          Built <span className="text-pink-500">By</span> <span>Me</span>
        </span>
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />

=        <nav className="flex items-center space-x-4">
          <Link href="/" className="p-2 rounded hover:bg-gray-100 transition">
            <HomeIcon className="w-5 h-5 text-gray-700" />
          </Link>

          <Link href="/explore" className="p-2 rounded hover:bg-gray-100 transition">
            <CompassIcon className="w-5 h-5 text-gray-700" />
          </Link>

          {isLogedIn ? (
            <Button asChild className="ml-2">
              <Link href="/submit-product" className="flex items-center gap-1">
                <SparkleIcon className="w-4 h-4" /> Submit Product
              </Link>
            </Button>
          ) : (
            <div className="flex gap-2 ml-2">
              <Button>Sign In</Button>
              <Button>Sign Up</Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
