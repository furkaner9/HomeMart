import Link from "next/link";
import React from "react";
import Image from "next/image";

const Products = ({
  product,
}: {
  product?: {
    id: string;
    images: string[];
    title: string;
    category: string;
    price: number;
    inventory: number;
  };
}) => {
  if (!product) {
    return (
      <div className="text-center text-gray-500">Ürün bilgisi bulunamadı.</div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64">
          <Image
            src={product.images[0] || "/images/products/placeholder.png"}
            alt={product.title}
            layout="fill"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600">{product.category}</p>
        <p className="text-teal-600 font-bold">₺{product.price}</p>
        <p className="text-sm text-gray-500">Stok: {product.inventory}</p>
      </div>
    </div>
  );
};

export default Products;
