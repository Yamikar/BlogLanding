import React from "react";
import BlogCard from "./BlogCard";
import MınıCard from "./MınıCard";
import Link from "next/link";
function AllNews() {
  return (
    <div>
      <div className="flex justify-center gap-9 mt-12 ">
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center gap-8 mt-6">
        <MınıCard />
        <MınıCard />
        <MınıCard />
      </div>
    </div>
  );
}

export default AllNews;
