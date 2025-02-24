import React from "react";
import BlogCard from "./BlogCard";
function AllNews() {
  return (
    <div>
      <div className="flex justify-center gap-2 mt-28 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center gap-2 mt-3 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center gap-2 mt-3 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default AllNews;
