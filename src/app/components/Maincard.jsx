import React from "react";
import Header from "./Header";
function Maincard() {
  return (
    <div className="flex justify-center flex-col">
      <div className="bg-gray-100 w-full h-96">
        <h1 className="text-center font-bold text-6xl mt-24">
          Insight and Updates{" "}
        </h1>
        <p className="text-center mt-5">
          A collection of hand-picked articles for freelancers, by freelancers.
          Deep dives, <br /> insights, and honest advice to navigate the
          freelance landscape.
        </p>
      </div>
    </div>
  );
}

export default Maincard;
