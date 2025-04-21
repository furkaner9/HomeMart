"use client";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Toplam Ürün</h2>
          <p className="text-2xl font-bold text-teal-600">120</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Toplam Sipariş</h2>
          <p className="text-2xl font-bold text-teal-600">45</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Kullanıcılar</h2>
          <p className="text-2xl font-bold text-teal-600">300</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Gelir</h2>
          <p className="text-2xl font-bold text-teal-600">₺15,000</p>
        </div>
      </div>
    </div>
  );
}