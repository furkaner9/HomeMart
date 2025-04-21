import React from "react";

const users = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Kullanıcılar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Kullanıcı 1</h2>
          <p className="text-gray-600">Açıklama: Kullanıcı 1 açıklaması.</p>
          <p className="text-teal-600 font-bold">₺100</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-700">Kullanıcı 2</h2>
          <p className="text-gray-600">Açıklama: Kullanıcı 2 açıklaması.</p>
          <p className="text-teal-600 font-bold">₺200</p>
        </div>
        {/* Diğer kullanıcı kartları buraya eklenebilir */}
      </div>
    </div>
  );
};

export default users;
