import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { motion } from 'framer-motion';
const data = [
  { name: "Smartphones", value: 30 },
  { name: "Laptops", value: 25 },
  { name: "Furniture", value: 18 },
  { name: "Beauty & Personal Care", value: 15 },
  { name: "Gaming Accessories", value: 13 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

const CategoryChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-cyan-500/10 backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 mx-2 md:mx-0"
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Category Distribution
      </h2>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              dataKey="value"
              label={({ name, value }) => `${value}%`}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ color: "white" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default CategoryChart