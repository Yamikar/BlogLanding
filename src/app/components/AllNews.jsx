import React from "react";
import BlogCard from "./BlogCard";
function AllNews() {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <h1 className="text-4xl font-bold">Latest News</h1>
        <button>Development</button>
        <button>UX/UI </button>
        <button>Carirer</button>
      </div>
      <div className="flex justify-center gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center gap-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default AllNews;
