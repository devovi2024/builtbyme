"use client";

import { ArrowUpRight, Star } from "lucide-react";
import ProductCard, { Product } from "../products/product-card";
import SectionHeader from "../common/section-header";
import { Button } from "../ui/button";
import Link from "next/link";

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Custom Wooden Chair",
    description: "Handcrafted wooden chair with a modern design.",
    tags: ["wood", "furniture", "handmade"],
    votes: 124,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Eco-friendly Notebook",
    description: "Notebook made from recycled materials.",
    tags: ["stationery", "eco-friendly", "recycled"],
    votes: 98,
    isFeatured: true,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
        <SectionHeader
          title="Featured Today"
          icon={Star}
          description="Top picks from our community this week"
        />

        <Button
          variant="outline"
          asChild
          className="group rounded-full border-border/60 hover:border-primary transition-colors"
        >
          <Link href="/products" className="flex items-center gap-2">
            View All
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="transition-transform duration-200 hover:-translate-y-1"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
