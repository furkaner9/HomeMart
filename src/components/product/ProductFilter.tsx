"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/button";

interface ProductFilterProps {
  categories: string[];
  minPrice: number;
  maxPrice: number;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  minPrice,
  maxPrice,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    category: searchParams.get("category") || "",
    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : minPrice,
    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : maxPrice,
    sort: searchParams.get("sort") || "newest",
  });

  const handleFilterChange = (name: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (filters.category) params.set("category", filters.category);
    if (filters.minPrice !== minPrice)
      params.set("minPrice", filters.minPrice.toString());
    if (filters.maxPrice !== maxPrice)
      params.set("maxPrice", filters.maxPrice.toString());
    if (filters.sort !== "newest") params.set("sort", filters.sort);

    router.push(`/products?${params.toString()}`);
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      minPrice,
      maxPrice,
      sort: "newest",
    });
    router.push("/products");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="font-bold text-lg mb-4">Filtreler</h3>

      {/* Kategori Filtreleme */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">Kategori</label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
        >
          <option value="">Tüm Kategoriler</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Fiyat Aralığı */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2 font-medium">
          Fiyat Aralığı
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              handleFilterChange("minPrice", Number(e.target.value))
            }
            min={minPrice}
            max={filters.maxPrice}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              handleFilterChange("maxPrice", Number(e.target.value))
            }
            min={filters.minPrice}
            max={maxPrice}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Sıralama */}
      <div className="mb-6">
        <label className="block text-gray-700 mb-2 font-medium">Sıralama</label>
        <select
          value={filters.sort}
          onChange={(e) => handleFilterChange("sort", e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
        >
          <option value="newest">En Yeniler</option>
          <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
          <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
        </select>
      </div>

      {/* Filtreleme Butonları */}
      <div className="flex flex-col space-y-2">
        <Button variant="primary" onClick={applyFilters}>
          Filtrele
        </Button>
        <Button variant="outline" onClick={resetFilters}>
          Filtreleri Temizle
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
