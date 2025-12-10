"use client";

import { motion } from "framer-motion";
import {Bell,DollarSign,House,Info,Mail,Menu,Settings,ShoppingBag,ShoppingCart,Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const ICONS = {
  House,
  DollarSign,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Mail,
  Users,
  Bell,
  Info,
};

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sidebarItems, setSidebarItems] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItem));
  }, []);
  return (
    <div
      className={`relative z-10 transition-all duration-300 ease-in-out shrink-0 ${
        isSidebarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-cyan-500/10 backdrop-blur-md p-4 flex flex-col">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full bg-linear-to-r from-[#0D8BFF] to-[#19F1FF] text-white transition-colors w-10 h-10 cursor-pointer hover:bg-slate-700 mb-6  flex items-center justify-center"
        >
          <Menu size={24} />
        </button>
        <nav className="mt-8 grow">
          {sidebarItems.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 20px -15px rgba(34, 211, 238, 0.5)",
                  }}
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start" : "justify-center"
                  } p-4 text-sm font-medium rounded-lg text-gray-100 hover:bg-cyan-800 transition-colors mb-2 ${
                    pathname === item.href
                      ? "bg-linear-to-r from-[#0D8BFF] to-[#19F1FF] text-white"
                      : "bg-cyan-900/10 text-gray-300"
                  }`}
                >
                  <Icon size={20} style={{ minWidth: "20px" }} />
                  {isSidebarOpen && (
                    <span className="ml-4 whitespace-nowrap">{item.name}</span>
                  )}
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
