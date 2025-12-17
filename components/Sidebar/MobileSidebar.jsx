import { motion } from 'framer-motion';
import { Bell, DollarSign, House, Info, Mail, Menu, Settings, ShoppingBag, ShoppingCart, Users, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

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

const MobileSidebar = ({isOpen, onClose}) => {
    const [sidebarItems, setSidebarItems] = useState([]);
    const pathname = usePathname();
    
      useEffect(() => {
        fetch("data/data.json")
          .then((res) => res.json())
          .then((data) => setSidebarItems(data.sidebarItem));
      }, []);
  return (
    <div
      className={`fixed inset-0 w-80 bg-slate-900 px-4 z-50 lg:hidden transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="mt-4 flex items-center justify-between">
        <h2 className='text-2xl font-semibold'>Dashboard</h2>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-linear-to-r from-[#0D8BFF] to-[#19F1FF] text-white transition-colors w-10 h-10 cursor-pointer hover:bg-slate-700  flex items-center justify-center"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="mt-8 grow">
        {sidebarItems.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <Link key={item.name} href={item.href} onClick={onClose}>
              <motion.div
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 20px -15px rgba(34, 211, 238, 0.5)",
                }}
                className={`flex items-center ${
                  isOpen ? "justify-start" : "justify-center"
                } p-4 text-sm font-medium rounded-lg text-gray-100 hover:bg-cyan-800 transition-colors mb-2 ${
                  pathname === item.href
                    ? "bg-linear-to-r from-[#0D8BFF] to-[#19F1FF] text-white"
                    : "bg-cyan-900/10 text-gray-300"
                }`}
              >
                <Icon size={20} style={{ minWidth: "20px" }} />
                {isOpen && (
                  <span className="ml-4 whitespace-nowrap">{item.name}</span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default MobileSidebar