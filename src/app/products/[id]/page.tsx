import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductById } from "@/lib/productService";
import ProductDetail from "@/components/product/ProductDetail";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | El Yapımı",
    };
  }

  return {
    title: `${product.title} | El Yapımı`,
    description: product.description.substring(0, 160),
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">
          Ana Sayfa
        </Link>
        <span className="mx-2">/</span>
        <Link href="/products" className="hover:text-indigo-600">
          Ürünler
        </Link>
        <span className="mx-2">/</span>
        <Link
          href={`/products?category=${product.category}`}
          className="hover:text-indigo-600"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </div>

      {/* Ürün Detayı */}
      <ProductDetail product={product} />

      {/* Benzer Ürünler - İleri seviye: buraya benzer ürünleri getirebilirsiniz */}
    </div>
  );
}
