"use client"
import React from 'react'
import { Skeleton } from '../ui/skeleton';

const StatCardSkeleton = () => {
  return (
    <div className="bg-cyan-500/10 backdrop-blur-md overflow-hidden shadow-lg rounded-xl p-6">
      {/* Title Row */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded-full bg-cyan-500/25" />{" "}
        {/* Icon */}
        <Skeleton className="h-4 w-24 bg-cyan-500/25" /> {/* Title text */}
      </div>

      {/* Value */}
      <div className="mt-4">
        <Skeleton className="h-8 w-28 bg-cyan-500/25" />
      </div>
    </div>
  );
}

export default StatCardSkeleton