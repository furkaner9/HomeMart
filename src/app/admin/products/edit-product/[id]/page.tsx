"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EditProductParams {
  params: {
    id: string;
  };
}

export default function EditProduct({ params }: EditProductParams) {
  const { id } = params;
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const router = useRouter();

  useEffect(() => {
    console.log("Fetching product data for:", id);
    // Firebase fetch logic will be implemented here.
    setName("Mevcut Ürün İsmi");
    setCategory("Kategori");
    setPrice("100");
    setStock("10");
    setDescription("Mevcut açıklama");
  }, [id]);

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Updating product:", {
      id,
      name,
      category,
      price,
      stock,
      description,
      images,
    });
    // Firebase update logic will be implemented here.
    router.push("/admin");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Ürün Düzenle</h2>
      <form onSubmit={handleUpdateProduct}>
        <div className="mb-4">
          <label className="block mb-1">İsim</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Kategori</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Fiyat</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Stok</label>
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Açıklama</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Görseller</label>
          <input
            type="file"
            multiple
            onChange={(e) => setImages(e.target.files)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 text-white p-2 rounded w-full"
        >
          Ürünü Güncelle
        </button>
      </form>
    </div>
  );
}
