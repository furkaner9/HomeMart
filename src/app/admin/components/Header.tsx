"use client";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Çıkış Yap
      </button>
    </header>
  );
}