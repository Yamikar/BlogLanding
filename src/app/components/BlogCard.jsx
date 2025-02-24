import React from "react";

function BlogCard() {
  return (
    <div className="card-style">
      <div className="container">
        <div className="image-card"></div>
      </div>
      <p className="text-blue-500 text-sm ml-6 mt-5">Technology</p>
      <h2 className="text-2xl  ml-6 font-bold">
        The Impact of Technology on <br /> the Workplace: How <br /> Technology
        is Changing
      </h2>
      <div className="flex gap-2 mt-5 ml-6">
        <p className="text-base">Yılmaz Keskin</p>
        <p className="text-base">Şubat 24 , 2025</p>
      </div>
    </div>
  );
}

export default BlogCard;
