import React from "react";
import { Metadata } from "next";
import {
  getProducts,
  getCategories,
  getProductPriceRange,
} from "@/lib/productService";
import { ProductFilter } from "@/types/product";
import ProductList from "@/components/product/ProductList";
import ProductFilterComponent from "@/components/product/ProductFilter";

export const metadata: Metadata = {
  title: "Ürünler | El Yapımı",
  description: "Benzersiz el yapımı ürünleri keşfedin ve satın alın.",
};

interface ProductsPageProps {
  searchParams: {
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: "price-asc" | "price-desc" | "newest";
  };
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  // Filtreleri alıyoruz
  const filters: ProductFilter = {
    category: searchParams.category,
    minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
    maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
    sort: searchParams.sort,
  };

  // Verileri paralel olarak alıyoruz
  const [products, categories, priceRange] = await Promise.all([
    getProducts(filters),
    getCategories(),
    getProductPriceRange(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tüm Ürünler</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filtreler */}
        <div className="md:w-1/4">
          <ProductFilterComponent
            categories={categories}
            minPrice={priceRange.min}
            maxPrice={priceRange.max}
          />
        </div>

        {/* Ürün Listesi */}
        <div className="md:w-3/4">
          {/* Aktif filtreler ve ürün sayısı */}
          <div className="mb-6 flex justify-between items-center">
            <span className="text-gray-600">
              {products.length} ürün bulundu
            </span>

            {searchParams.category && (
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
                Kategori: {searchParams.category}
              </div>
            )}
          </div>

          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}
