import React from "react";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="w-header  h-16 bg-white  border-[1px] border-gray-200 border-solid">
        <ol>
          <li>Home</li>
          <li>Profile</li>
          <li>Content</li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
