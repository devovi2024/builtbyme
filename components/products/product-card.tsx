"use client";

import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
            {product.isFeatured && <Badge variant="secondary">Featured</Badge>}
          </div>
          <CardDescription className="text-sm text-gray-600">
            {product.description}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          {product.tags.map((tag) => (
            <Badge key={tag} className="text-xs">{tag}</Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
