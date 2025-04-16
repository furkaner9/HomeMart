import { Product, ProductFilter } from "@/types/product";

// Mock ürün verileri
const products: Product[] = Array.from({ length: 30 }, (_, i) => {
  const id = (i + 1).toString();
  const categories = ["Seramik", "Ahşap", "Tekstil", "Takı", "Dekorasyon"];
  const category = categories[Math.floor(Math.random() * categories.length)];

  return {
    id,
    title: `El Yapımı ${category} Ürün ${id}`,
    description: `Bu benzersiz el yapımı ${category.toLowerCase()} ürün, geleneksel tekniklerle özenle üretilmiştir. Evinize şık ve sıcak bir dokunuş katacak bu özel parça, her detayında zanaatkârın ustalığını yansıtıyor.`,
    price: Math.floor(Math.random() * 900) + 100, // 100-1000 TL arası fiyat
    category,
    images: [
      `/images/products/placeholder.png`,
      `/images/products/placeholder.png`,
    ],
    inventory: Math.floor(Math.random() * 20), // 0-20 arası stok
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    ).toISOString(), // Son 30 gün içinde
  };
});

export const getProducts = async (
  filters?: ProductFilter
): Promise<Product[]> => {
  // API çağrısını simüle etmek için timeout
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredProducts = [...products];

  // Filtreleme işlemleri
  if (filters) {
    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category === filters.category
      );
    }

    if (filters.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= filters.minPrice!
      );
    }

    if (filters.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price <= filters.maxPrice!
      );
    }

    // Sıralama işlemleri
    if (filters.sort) {
      switch (filters.sort) {
        case "price-asc":
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          filteredProducts.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          break;
      }
    }
  }

  return filteredProducts;
};

export const getProductById = async (id: string): Promise<Product | null> => {
  // API çağrısını simüle etmek için timeout
  await new Promise((resolve) => setTimeout(resolve, 300));

  const product = products.find((p) => p.id === id);
  return product || null;
};

export const getCategories = async (): Promise<string[]> => {
  // Benzersiz kategorileri döndür
  return Array.from(new Set(products.map((p) => p.category)));
};

export const getProductPriceRange = async (): Promise<{
  min: number;
  max: number;
}> => {
  const prices = products.map((p) => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  };
};

