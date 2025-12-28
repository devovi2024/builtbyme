"use client";

import { Box, LucideIcon } from "lucide-react";

export default function EmptyState({
  message = "No products available",
  icon: Icon = Box,
}: {
  message?: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white/90 rounded-2xl shadow-md border border-gray-200 space-y-4">
      <Icon className="w-12 h-12 text-gray-400 animate-bounce" />
      <p className="text-gray-500 text-lg font-medium">
        {message}
      </p>
    </div>
  );
}
