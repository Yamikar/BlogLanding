import React from "react";

function AdsCard() {
  return (
    <div className="p-6">
      <div className="flex ml-44 justify-center gap-5">
        {/* Sol taraf - Büyük içerik */}
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-4">Trends</h1>
          <div className="w-full h-48 bg-red-300 mb-4"></div>
          <h1 className="font-bold text-3xl mb-2">
            The Importance of Branding: tips for <br /> building a personal
            brand online
          </h1>
          <p className="text-lg text-gray-600">
            The future of Tech: Implications and also trends, this is so <br />
            very important. The future of Tech: Implications and also <br />
            trends, this is so very important.
          </p>
        </div>

        {/* Sağ taraf - Küçük kartlar */}
        <div className="flex-1">
          {[1, 2, 3].map((item) => (
            <div className="flex items-start gap-4 mb-4 mt-12" key={item}>
              <div className="w-36 h-32 bg-gray-400"></div>
              <h1 className="text-xl font-bold">
                The Importance of Branding: tips <br />
                for building a personal brand <br /> online
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdsCard;
