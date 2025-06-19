import React from "react";

function Header() {
  return (
    <div>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          {/* Sol Taraf: Yılmaz Keskin */}
          <div className="flex-1 text-lg font-semibold text-gray-800">
            Yılmaz Keskin
          </div>

          {/* Sağ Taraf */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                href="https://ymzkes.netlify.app/"
              >
                Personal Page
              </a>

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="mailto:keskinyilmaz037@gmail.com"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
