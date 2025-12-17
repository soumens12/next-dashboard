import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { motion } from 'framer-motion';

const data = [
  { name: 'Processing', value: 18 },
  { name: 'Pending', value: 24 },
  { name: 'ceied', value: 12 },
  { name: 'Delivered', value: 47 },
]

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#00aaff']

const OrderChart = () => {
  const tooltipFormatter = (value, name) => [`${value}%`, name]

  const renderLabel = ({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`

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
      <div className="h-80 md:h-80">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              label={renderLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={tooltipFormatter} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default OrderChart