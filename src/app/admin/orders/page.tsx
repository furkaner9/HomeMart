import React from "react";

const orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Siparişler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Sipariş 1</h2>
          <p className="text-gray-600">Açıklama: Sipariş 1 açıklaması.</p>
          <p className="text-teal-600 font-bold">₺100</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Sipariş 2</h2>
          <p className="text-gray-600">Açıklama: Sipariş 2 açıklaması.</p>
          <p className="text-teal-600 font-bold">₺200</p>
        </div>
        {/* Diğer sipariş kartları buraya eklenebilir */}
      </div>
    </div>
  );
};

export default orders;
