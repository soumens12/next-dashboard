"use client";
import React from 'react'
import { motion } from 'framer-motion';
import StatCard from '@/components/StatCard';
import { ChartBarStacked, DollarSign, ShoppingBag, SquareActivity } from 'lucide-react';
import ProductsTable from '@/components/ProductsTable';

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <div className="w-full mx-auto py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          <StatCard name="Total Products" Icon={ShoppingBag} value="4,352" />
          <StatCard name="Total Stock" Icon={SquareActivity} value="18, 000" />
          <StatCard
            name="Total Sold"
            Icon={DollarSign}
            value="12, 000"
          />
          <StatCard name="Total Categories" Icon={ChartBarStacked} value="$200,00" />
        </motion.div>

        <ProductsTable/>
      </div>
    </div>
  );
}

export default ProductsPage