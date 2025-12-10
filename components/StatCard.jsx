
import React from 'react'
import { motion } from 'framer-motion';

const StatCard = ({name, Icon, value}) => {

    
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px -10px rgba(34, 211, 238, 0.45)",
      }}
      className="bg-cyan-500/10 backdrop-blur-md overflow-hidden shadow-lg rounded-xl"
    >
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-300">
          <Icon size={24} className="mr-2 text-gray-400" />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold bg-linear-to-r from-[#0D8BFF] to-[#19F1FF] bg-clip-text text-transparent">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

export default StatCard