function MiniBlog() {
  return (
    <div className="p-6 ml-44">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2>

      <div className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Main Blog Card */}
        <div className="flex-1 justify-center">
          <div className="w-full h-64 bg-red-300 rounded-lg mb-4"></div>
          <h1 className="font-bold text-2xl mb-2">
            The Importance of Branding: Tips for <br /> Building a Personal
            Brand Online
          </h1>
          <p className="text-lg text-gray-600">
            The future of tech: implications and trends. This is so <br />
            important for understanding future advancements <br />
            and their impact on society.
          </p>
        </div>

        {/* Secondary Blog Cards */}
        <div className="flex-1 space-y-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="w-24 h-24 bg-red-100 rounded-lg"></div>
              <div>
                <h1 className="font-bold text-lg mb-1">
                  The Importance of Branding: Tips for <br /> Building a
                  Personal Brand Online
                </h1>
                <p className="text-sm text-gray-600">
                  The future of tech: implications and trends. This is so <br />
                  important for understanding future advancements <br />
                  and their impact on society.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniBlog;
