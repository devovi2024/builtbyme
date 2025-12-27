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
      <div className="relative mx-auto max-w-4xl px-6 py-20 bg-white/90 backdrop-blur-md rounded-xl shadow-xl text-center flex flex-col items-center justify-center space-y-6">
        <Badge className="bg-pink-100 text-pink-700">
          Join thousands of creators sharing their work
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
          Share What You've Built, Discover What's Launching
        </h1>

        <p className="mx-auto max-w-2xl text-base text-gray-700 sm:text-lg">
          A community platform to showcase your projects, get feedback, and connect
          with fellow creators. Authentic reviews and discussions to help you
          improve and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/share-project">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md px-6 py-3 flex items-center gap-2">
              <PlusCircle size={20} />
              Share Your Project
            </Button>
          </Link>
          <Link href="/explore-projects">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-md px-6 py-3 flex items-center gap-2">
              Explore Projects
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {statsData.map((stat) => (
            <StateCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
