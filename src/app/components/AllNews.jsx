import React from "react";
import BlogCard from "./BlogCard";
function AllNews() {
  return (
    <div>
      <div className="flex justify-center gap-10 mr-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center gap-14 mr-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default AllNews;
