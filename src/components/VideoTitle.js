const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 space-y-5 absolute text-white bg-gradient-to-r from-black w-full aspect-video">

      <h1 className="font-bold text-6xl drop-shadow-lg">{title}</h1>

      <p className="text-lg w-1/3 text-gray-200 drop-shadow-md">{overview}</p>

      <div className="flex gap-5">
        <button className="
          flex items-center gap-3 
          bg-white text-black 
          px-7 py-3 rounded-md font-bold
          transition duration-200 
          hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98]
          shadow-md
        ">
          <img src="/assets/play_icon.svg" className="w-7 h-7" alt="btn" />
          Play
        </button>

        <button className="
          flex items-center gap-3 
          bg-gray-500/70 text-white 
          px-7 py-3 rounded-md font-bold
          transition duration-200 
          hover:bg-gray-400/40 hover:scale-[1.02] active:scale-[0.98]
          backdrop-blur-sm
        ">
          <img src="/assets/info_icon.svg" className="w-7 h-7" alt="info" />
          More Info
        </button>

      </div>

    </div>
  );
};

export default VideoTitle;
