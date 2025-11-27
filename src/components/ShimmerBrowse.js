const ShimmerBrowse = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white">

      <div className="relative w-full h-[85vh] bg-gray-800/60 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          style={{
            animation: "shimmer 1.5s infinite",
          }}
        ></div>
      </div>

      <div className="absolute top-[30%] left-10 space-y-4">

        <div className="h-12 w-64 bg-gray-700 overflow-hidden relative rounded-md">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[450px] bg-gray-700 relative overflow-hidden rounded-md">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[380px] bg-gray-700 relative overflow-hidden rounded-md">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="h-4 w-[300px] bg-gray-700 relative overflow-hidden rounded-md">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="flex gap-4 pt-4">
          <div className="h-12 w-28 bg-gray-700 relative overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ animation: "shimmer 1.5s infinite" }}
            ></div>
          </div>

          <div className="h-12 w-36 bg-gray-700 relative overflow-hidden rounded-md">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{ animation: "shimmer 1.5s infinite" }}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-8">
        <div className="h-7 w-40 bg-gray-700 rounded-md relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="flex gap-4 overflow-x-scroll mt-4 scrollbar-hide">
          {Array(10)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="min-w-[200px] h-[300px] bg-gray-800 rounded-md relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ animation: "shimmer 1.5s infinite" }}
                ></div>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-12 px-8">
        <div className="h-7 w-40 bg-gray-700 rounded-md relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ animation: "shimmer 1.5s infinite" }}
          ></div>
        </div>

        <div className="flex gap-4 overflow-x-scroll mt-4 scrollbar-hide">
          {Array(10)
            .fill("")
            .map((_, idx) => (
              <div
                key={idx}
                className="min-w-[200px] h-[300px] bg-gray-800 rounded-md relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ animation: "shimmer 1.5s infinite" }}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerBrowse;
