import React from 'react'
import { motion } from 'framer-motion'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
  { month: 'Jan', productA: 2400, productB: 2210, productC: 2290 },
  { month: 'Feb', productA: 1398, productB: 2210, productC: 2000 },
  { month: 'Mar', productA: 9800, productB: 2290, productC: 2000 },
  { month: 'Apr', productA: 3908, productB: 2000, productC: 2181 },
  { month: 'May', productA: 4800, productB: 2181, productC: 2500 },
  { month: 'Jun', productA: 3800, productB: 2500, productC: 2100 },
]

const ProductLineChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-cyan-500/10 backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 mx-2 md:mx-0"
    >
      <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">
        Product Line Sales
      </h2>
      <div className="h-80 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="month" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #444' }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend />
            <Line type="monotone" dataKey="productA" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="productB" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="productC" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export default ProductLineChart