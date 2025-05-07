import Link from "next/link";

export default function AdminPanel() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Admin Paneli</h2>
      <div className="grid grid-cols-1 gap-4">
        <Link
          href="/admin/products/add-product"
          className="bg-blue-600 text-white p-2 rounded text-center"
        >
          Ürün Ekle
        </Link>
        <Link
          href="/admin/products/edit-product"
          className="bg-yellow-600 text-white p-2 rounded text-center"
        >
          Ürün Düzenle
        </Link>
        <Link
          href="/admin/orders"
          className="bg-green-600 text-white p-2 rounded text-center"
        >
          Siparişler
        </Link>
      </div>
    </div>
  );
}
