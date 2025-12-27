"use client";

import { LucideIcon } from "lucide-react";

interface StateCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export default function StateCard({ icon: Icon, value, label }: StateCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-40">
      <Icon className="w-8 h-8 text-pink-500 mb-2" />
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-gray-600">{label}</span>
    </div>
  );
}
