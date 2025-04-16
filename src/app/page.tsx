import Header from "@/components/layout/Header";
import Image from "next/image";
import Link from "next/link";

// Örnek ürün verisi
const featuredProducts = [
  {
    id: "1",
    title: "El Yapımı Seramik Vazo",
    price: 250,
    category: "Seramik",
    images: ["/images/products/placeholder.png"],
  },
  {
    id: "2",
    title: "Ahşap Dekoratif Tepsi",
    price: 180,
    category: "Ahşap",
    images: ["/images/products/placeholder.png"],
  },
  {
    id: "3",
    title: "Örme Bebek Battaniyesi",
    price: 150,
    category: "Tekstil",
    images: ["/images/products/placeholder.png"],
  },
  {
    id: "4",
    title: "El Dokuma Kilim",
    price: 650,
    category: "Dokuma",
    images: ["/images/products/placeholder.png"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-indigo-50 rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Benzersiz El Yapımı Ürünler
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Zanaatkârların özenle ürettiği eşsiz el yapımı ürünleri keşfedin
              ve evinize benzersiz bir dokunuş katın.
            </p>
            <Link
              href="/products"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Ürünleri Keşfet
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96 w-full">
            <Image
              src="/images/products/resim1.jpg"
              alt="El Yapımı Ürünler"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Popüler Kategoriler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Seramik", "Ahşap", "Tekstil", "Takı"].map((category, index) => (
            <Link
              href={`/products?category=${category}`}
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center hover:bg-gray-200 transition-colors"
            >
              <h3 className="font-medium">{category}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Öne Çıkan Ürünler</h2>
          <Link
            href="/products"
            className="text-indigo-600 hover:underline font-medium"
          >
            Tümünü Gör
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative h-48 w-full">
                  <Image
                    src={
                      product.images[0] || "/images/products/placeholder.png"
                    }
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="font-medium text-lg">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">
                    {product.price.toFixed(2)} TL
                  </span>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm font-medium hover:bg-indigo-700 transition-colors">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-100 rounded-lg p-8">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2">Bültenimize Abone Olun</h2>
          <p className="text-gray-600 mb-4">
            Yeni ürünler, indirimler ve daha fazlası hakkında bilgi almak için
            abone olun.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
