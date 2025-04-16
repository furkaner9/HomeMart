"use client";

import React from "react";
import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Sepete ekleme işlemi burada yapılabilir
  const addToCart = (product: Product) => {
    console.log(`${product.title} sepete eklendi`);
    // Burada sepete ekleme mantığı olacak
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm border overflow-hidden"
        >
          <Link href={`/products/${product.id}`}>
            <div className="relative h-64 w-full">
              <Image
                src={product.images[0] || "/images/products/placeholder.png"}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <div className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="text-lg font-semibold mb-2 hover:text-indigo-600 transition">
                {product.title}
              </h3>
            </Link>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">{product.price} TL</span>
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
            <Button
              variant="primary"
              onClick={() => addToCart(product)}
              disabled={product.inventory === 0}
              fullWidth
            >
              {product.inventory > 0 ? "Sepete Ekle" : "Stokta Yok"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
