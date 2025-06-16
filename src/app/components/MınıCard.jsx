import React from "react";

function MınıCard() {
  return (
    <div>
      <div className="h-mını w-mını border-[1px] border-gray-300 border-solid rounded-lg">
        <div className="sm-image"></div>
        <div className="flex">
          <p className="text-orange-600 text-xs mt-5">Medium Write</p>
        </div>
        <div>
          <h1 className="font-bold text-base">
            Meet all the new Stack: The documentation platform you know, made
            effortless with Al
          </h1>
          <p className="text-xs mt-2">
            We've helped thousands of teams document their knowledge and create
            amazing public docs for their users.
          </p>
        </div>
        <button className="mt-5 ">Read Now ...</button>
      </div>
    </div>
  );
}

export default MınıCard;
