import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import Button from "../ui/button";

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full">
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
          <h3 className="font-medium text-lg hover:text-indigo-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm mb-2">{product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">{product.price.toFixed(2)} TL</span>
          <Button
            variant="primary"
            size="sm"
            onClick={onAddToCart}
            disabled={product.inventory <= 0}
          >
            {product.inventory > 0 ? "Sepete Ekle" : "Stokta Yok"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
