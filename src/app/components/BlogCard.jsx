import React from "react";

function BlogCard() {
  return (
    <div>
      <div className="h-card w-long border-[1px] border-gray-200 border-solid rounded-lg">
        <div className="image"></div>
        <div className="flex">
          <p className="text-orange-400 text-xs">Medium Write</p>
        </div>
        <div>
          <h1 className="font-bold text-lg">
            Meet all the new Stack: The documentation platform you know, made
            effortless with Al
          </h1>
          <p className="text-sm mt-2">
            We've helped thousands of teams document their knowledge and create
            amazing public docs for their users. It's always been our goal to be
            your go-to platform for creating and collaborating on amazing
            documentation. Now we're taking that even fu...
          </p>
        </div>
        <button className="mt-5">Read Now ...</button>
      </div>
    </div>
  );
}

export default BlogCard;
