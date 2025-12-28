"use client";

import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard, { Product } from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProducts() {
  const recentlyLaunched: Product[] = [
    {
      id: 1, 
      name: "Smart Home Hub",
      description: "Control all your smart devices from one place.",
      tags: ["smart", "home", "hub"],
      votes: 45,
      isFeatured: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Check out the latest products from our community"
        />

        {recentlyLaunched.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentlyLaunched.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
