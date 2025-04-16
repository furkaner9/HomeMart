import Link from "next/link";
import Button from "@/components/ui/button";

export default function ProductNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Ürün Bulunamadı</h1>
      <p className="text-lg text-gray-600 mb-8">
        Aradığınız ürün bulunamadı veya kaldırılmış olabilir.
      </p>
      <div className="flex justify-center">
        <Link href="/products">
          <Button variant="primary" size="lg">
            Tüm Ürünlere Dön
          </Button>
        </Link>
      </div>
    </div>
  );
}
