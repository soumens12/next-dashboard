import React from 'react'
import { Skeleton } from '../ui/skeleton';

const CategoryChartSkeleton = () => {
  return (
    <div className="bg-cyan-500/10 rounded-xl p-6 w-full flex flex-col items-center">
      <Skeleton className="h-6 w-32 mb-4 bg-cyan-500/25" /> {/* Title */}
      <div className="relative">
        <Skeleton className="h-40 w-40 rounded-full bg-cyan-500/25" /> {/* Main pie */}
        {/* small circles to simulate legends */}
        <div className="flex justify-center gap-4 mt-4">
          <Skeleton className="h-4 w-20 rounded bg-cyan-500/25" />
          <Skeleton className="h-4 w-20 rounded bg-cyan-500/25" />
        </div>
      </div>
    </div>
  );
}

export default CategoryChartSkeleton