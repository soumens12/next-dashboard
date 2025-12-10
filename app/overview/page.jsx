"use client";
import CategoryChart from "@/components/CategoryChart";
import OrderChart from "@/components/OrderChart";
import ProductLineChart from "@/components/ProductLineChart";
import SalesChart from "@/components/SalesChart";
import StatCard from "@/components/StatCard";
import CategoryChartSkeleton from "@/components/skeleton/CategoryChartSkeleton";
import SalesChartSkeleton from "@/components/skeleton/SalesChartSkeleton";
import StatCardSkeleton from "@/components/skeleton/StatCardSkeleton";
import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, SquareActivity, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

const OverviewPage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // 2 sec delay
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="flex-1 relative z-10">
      <main className="w-full mx-auto py-4 px-4 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          {loading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <StatCard
                name="Total Sales"
                Icon={DollarSign}
                value="$102, 000"
                
              />
              <StatCard
                name="Total Clients"
                Icon={Users}
                value="$10, 00"
                
              />
              <StatCard
                name="Total Products"
                Icon={ShoppingBag}
                value="$102, 000"
                
              />
              <StatCard
                name="Stock"
                Icon={SquareActivity}
                value="$200,00"
                
              />
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {loading ? <SalesChartSkeleton /> : <SalesChart />}
          {loading ? <CategoryChartSkeleton /> : <CategoryChart />}
          <OrderChart />
          <ProductLineChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
