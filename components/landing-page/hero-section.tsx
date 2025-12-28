"use client";

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight, PlusCircle, RocketIcon } from "lucide-react";
import StateCard from "./state-card";

const statsData = [
  {
    icon: RocketIcon,
    value: "10K+",
    label: "Projects Shared",
  },
  {
    icon: RocketIcon,
    value: "5K+",
    label: "Active Users",
  },
  {
    icon: RocketIcon,
    value: "1K+",
    label: "Communities Joined",
  },
];

export default function HeroSection() {
  return (
    <section className="relative py-24">
      <div className="relative mx-auto max-w-4xl px-6 py-20 bg-white/95 rounded-xl shadow-xl text-center flex flex-col items-center justify-center space-y-6">
        
        {/* Badge */}
        <Badge className="px-4 py-1 text-sm bg-pink-100 text-pink-700 rounded-full">
          Join thousands of creators sharing their work
        </Badge>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
          Share What You've Built, Discover What's Launching
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg leading-relaxed">
          A community platform to showcase your projects, get feedback, and connect
          with fellow creators. Authentic reviews and discussions to help you
          improve and grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            asChild
            className="group bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md px-6 py-3 flex items-center gap-2 transition-all"
          >
            <Link href="/share-project">
              <PlusCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
              Share Your Project
            </Link>
          </Button>

          <Button
            asChild
            className="group bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md px-6 py-3 flex items-center gap-2 transition-all"
          >
            <Link href="/explore-projects">
              Explore Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {statsData.map((stat) => (
            <StateCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
