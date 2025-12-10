"use client";

import { useState } from "react";

const ProductsTable = () => {
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Smartphones",
      price: "$999",
      stock: 120,
    },
    {
      id: 2,
      name: "MacBook Air M2",
      category: "Laptops",
      price: "$1299",
      stock: 50,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      category: "Gaming Accessories",
      price: "$59",
      stock: 200,
    },
    {
      id: 4,
      name: "Sofa Set",
      category: "Furniture",
      price: "$450",
      stock: 30,
    },
    {
      id: 5,
      name: "Face Wash",
      category: "Beauty & Personal Care",
      price: "$15",
      stock: 150,
    },
  ];

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-cyan-500/10 backdrop-blur-md overflow-hidden shadow-lg rounded-xl">
      <div className="px-4 py-5 sm:p-6">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <h1 className="flex-1 text-2xl font-bold text-gray-100 bg-clip-text mb-4">
            Product Table
          </h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search product..."
            className="w-auto mb-4 p-2 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="p-3 border-b border-gray-700">ID</th>
                <th className="p-3 border-b border-gray-700">Product Name</th>
                <th className="p-3 border-b border-gray-700">Category</th>
                <th className="p-3 border-b border-gray-700">Price</th>
                <th className="p-3 border-b border-gray-700">Stock</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-gray-800 transition border-b border-gray-700"
                >
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.name}</td>
                  <td className="p-3">{p.category}</td>
                  <td className="p-3">{p.price}</td>
                  <td className="p-3">{p.stock}</td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-5 text-center text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
