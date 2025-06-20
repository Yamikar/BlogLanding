import React from "react";
import deneme from "./src/images/photoM.jpg";

function MınıCard({ tag, title, content, image }) {
  return (
    <div>
      <div className="h-mını w-mını">
        <img src={image} alt="" />
        <div className="flex">
          <p className="text-orange-600 text-xs mt-5">{tag}</p>
        </div>
        <div>
          <h1 className="font-bold text-base">{title}</h1>
          <p className="text-xs mt-2">{content}</p>
        </div>
      </div>
    </div>
  );
}

export default MınıCard;
