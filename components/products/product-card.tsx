"use client";

import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ChevronUpIcon } from "lucide-react";

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
    <Link href={`/products/${product.id}`} className="group">
      <Card className="hover:shadow-xl transition-shadow duration-300 rounded-xl cursor-pointer">
        <CardHeader className="space-y-2">
          {/* Header: Title + Featured Badge */}
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold transition-colors group-hover:text-primary">
              {product.name}
            </CardTitle>
            {product.isFeatured && (
              <Badge variant="secondary" className="px-2 py-1 text-xs rounded-full">
                Featured
              </Badge>
            )}
          </div>

          {/* Votes */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="p-1 transition-transform duration-200 group-hover:scale-110"
            >
              <ChevronUpIcon className="w-4 h-4" />
            </Button>
            <span className="font-medium">{product.votes}</span>
          </div>

          {/* Description */}
          <CardDescription className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </CardDescription>
        </CardHeader>

        {/* Tags */}
        <CardFooter className="flex flex-wrap gap-2 pt-2">
          {product.tags.map((tag) => (
            <Badge key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
}
