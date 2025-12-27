"use client";

import { ArrowUpIcon, Star } from "lucide-react";
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
    <section className="py-16 px-6 md:px-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <SectionHeader
          title="Featured Today"
          icon={Star}
          description="Top picks from our community this week"
        />
        <Button variant="outline" className="mt-4 md:mt-0">
          <Link href="/products" className="flex items-center gap-2">
            View All <ArrowUpIcon className="w-4 h-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
