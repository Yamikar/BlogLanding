import React from "react";

function FıllterConsole() {
  return (
    <div>
      <div className=" ml-36 mt-10">
        <h3 className="text-3xl font-bold">All Articles</h3>
        <p className="text-sm">
          Find or list tools that will help designers build to last. Simplify
          design with our comprehensive <br /> and carefully vetted library from
          the start
        </p>
      </div>
      <div className="flex justify-center gap-5  mt-5 ">
        <input type="text" placeholder="Search articles..." />
        <button className="btn-1">Medium</button>
        <button className="btn-1">Github</button>
        <button className="btn-1">Udmey</button>
        <button className="btn-1">Github</button>
        <button className="btn-1">Udmey</button>
      </div>
    </div>
  );
}

export default FıllterConsole;
