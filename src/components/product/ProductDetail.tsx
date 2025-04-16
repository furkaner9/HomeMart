"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import Button from "../ui/button";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const addToCart = () => {
    console.log(`${quantity} adet ${product.title} sepete eklendi`);
    // Burada sepete ekleme mantığı olacak
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Ürün Görselleri */}
      <div>
        <div className="relative aspect-square w-full mb-4">
          <Image
            src={
              product.images[activeImageIndex] ||
              "/images/products/placeholder.png"
            }
            alt={product.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Küçük Görseller */}
        <div className="flex space-x-2">
          {product.images.map((image, idx) => (
            <div
              key={idx}
              className={`relative w-20 h-20 cursor-pointer border-2 rounded ${
                activeImageIndex === idx
                  ? "border-indigo-600"
                  : "border-transparent"
              }`}
              onClick={() => setActiveImageIndex(idx)}
            >
              <Image
                src={image || "/images/products/placeholder.png"}
                alt={`${product.title} - Görsel ${idx + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-500 mb-4">{product.category}</p>

        <div className="text-2xl font-bold mb-4">{product.price} TL</div>

        <div className="mb-6">
          <p className="text-gray-700">{product.description}</p>
        </div>

        <div className="mb-6">
          <p className="mb-2 font-medium">Stok Durumu:</p>
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
              product.inventory > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.inventory > 0
              ? `Stokta (${product.inventory})`
              : "Stokta Yok"}
          </div>
        </div>

        {product.inventory > 0 && (
          <div className="mb-6">
            <label htmlFor="quantity" className="block mb-2 font-medium">
              Adet
            </label>
            <div className="flex items-center">
              <button
                type="button"
                className="bg-gray-200 p-2 rounded-l"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                min="1"
                max={product.inventory}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-16 text-center border-y p-2"
              />
              <button
                type="button"
                className="bg-gray-200 p-2 rounded-r"
                onClick={() =>
                  setQuantity(Math.min(product.inventory, quantity + 1))
                }
              >
                +
              </button>
            </div>
          </div>
        )}

        <Button
          variant="primary"
          size="lg"
          onClick={addToCart}
          disabled={product.inventory === 0}
          fullWidth
        >
          {product.inventory > 0 ? "Sepete Ekle" : "Stokta Yok"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
