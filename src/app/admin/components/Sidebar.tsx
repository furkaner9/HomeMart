"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex justify-between items-center bg-gray-800 text-white px-4 py-3">
        <span className="text-xl font-bold">Admin Paneli</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 h-screen p-4 fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
        ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block`}
      >
        <h2 className="text-2xl font-bold mb-6 hidden md:block">
          Admin Paneli
        </h2>
        <nav className="space-y-4">
          <NavItem href="/admin" label="Dashboard" />
          <NavItem href="/admin/products" label="Ürün Yönetimi" />
          <NavItem href="/admin/orders" label="Siparişler" />
          <NavItem href="/admin/users" label="Kullanıcılar" />
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-lg font-medium hover:text-teal-400 transition-colors duration-200"
    >
      {label}
    </Link>
  );
}
