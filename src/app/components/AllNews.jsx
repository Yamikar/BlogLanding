import React from "react";
import MınıCard from "./MınıCard";
import Link from "next/link";

function AllNews() {
  return (
    <div className="px-1">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard />
        <MınıCard />
        <MınıCard />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard />
        <MınıCard />
        <MınıCard />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard />
        <MınıCard />
        <MınıCard />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 mt-6">
        <MınıCard />
        <MınıCard />
        <MınıCard />
      </div>
    </div>
  );
}

export default AllNews;
