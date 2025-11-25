const VideoTitle = ({ title, overview }) => {
  return (
    <div className="
      absolute top-0 left-0
      text-white  w-screen aspect-video
      bg-gradient-to-r from-black
    ">

      <div className="relative top-1/3 left-[5%] space-y-6 ">
        <h1 className="font-bold text-6xl ">
          {title}
        </h1>

        <p className="text-lg text-gray-300 w-[35%]">
          {overview}
        </p>

        <div className="flex gap-4 mt-4">
          <button className="
          flex items-center gap-3 
          bg-white text-black 
          px-8 py-3 rounded-md font-bold
          hover:bg-opacity-90 transition scale-100 hover:scale-[1.03]
        ">
            <img src="/assets/play_icon.svg" className="w-7 h-7" alt="" />
            Play
          </button>

          <button className="
          flex items-center gap-3 
          bg-gray-700/70 text-white 
          px-8 py-3 rounded-md font-bold
          hover:bg-gray-600/50
          transition scale-100 hover:scale-[1.03]
        ">
            <img src="/assets/info_icon.svg" className="w-7 h-7" alt="" />
            More Info
          </button>
        </div>
      </div>

    </div>
  );
};

export default VideoTitle;
