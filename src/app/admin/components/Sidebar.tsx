"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen p-4">
      <nav className="space-y-4">
        <Link
          href="/admin"
          className="block text-lg font-semibold hover:text-teal-400"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className="block text-lg font-semibold hover:text-teal-400"
        >
          Ürün Yönetimi
        </Link>
        <Link
          href="/admin/orders"
          className="block text-lg font-semibold hover:text-teal-400"
        >
          Siparişler
        </Link>
        <Link
          href="/admin/users"
          className="block text-lg font-semibold hover:text-teal-400"
        >
          Kullanıcılar
        </Link>
      </nav>
    </aside>
  );
}
