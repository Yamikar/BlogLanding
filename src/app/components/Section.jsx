import React from "react";

function Section() {
  return (
    <section className="py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5">
        {/* Sol Bölüm */}
        <div className="text-center lg:text-left">
          <h1 className="font-extrabold text-5xl lg:text-6xl text-gray-800">
            Innovation.
          </h1>
          <h2 className="font-bold text-2xl lg:text-3xl text-gray-700 mt-8">
            The Future of Tech: <br /> Implications and Trends.
          </h2>
          <p className="text-base lg:text-lg text-gray-600 mt-5 leading-relaxed">
            The future of Tech: Implications and also trends, <br />
            this is so very important.
          </p>
        </div>
        {/* Sağ Bölüm */}
        <div className="h-64 w-full lg:w-1/2 bg-red-300 rounded-lg"></div>
      </div>
    </section>
  );
}

export default Section;
