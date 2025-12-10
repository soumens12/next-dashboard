import React from 'react'
import { Skeleton } from '../ui/skeleton';

const SalesChartSkeleton = () => {
  return (
    <div className="bg-cyan-500/10 rounded-xl p-6 w-full h-[380px]">
      <Skeleton className="h-6 w-40 mb-6 bg-cyan-500/25" /> {/* Title */}
      <div className="space-y-4">
        <Skeleton className="h-48 w-full bg-cyan-500/25" />
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-4 w-20 bg-cyan-500/25" />
          <Skeleton className="h-4 w-20 bg-cyan-500/25" />
        </div>
      </div>
    </div>
  );
}

export default SalesChartSkeleton