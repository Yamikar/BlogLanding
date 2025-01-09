import React from "react";

function BlogCard() {
  return (
    <div>
      <div className="w-96 h-bıgcard ">
        <div className="w-80 h-52 bg-blue-100"></div>
        <div className="flex mt-4 ">
          <div className="w-8 h-8 bg-orange-200 rounded-full"></div>
          <p className="text-xs mt-2 ml-3">Yılmaz Keksin</p>
        </div>
        <h1 className="text-2xl font-bold">
          Developing Useful Products <br /> That Would Meet User's <br /> Needs
        </h1>
        <p className="text-sm mt-2">Technology</p>
        <p className="mt-5">
          The future of Tech: Implications and also <br /> trends, this is so
          very important because it <br /> helps them to...
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
