import React from 'react'

function Fih() {
  // Use a ref to manipulate the video element directly
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;

    // Handle the video end event to restart it
    const handleVideoEnd = () => {
      // Reset to the start and play immediately
      video.currentTime = 0;
      video.play();
    };

    // Add the event listener for the end event
    video.addEventListener("ended", handleVideoEnd);

    // Play the video
    video.play();

    // Cleanup event listener on component unmount
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div
      className="video-background relative h-screen w-full overflow-hidden
     "
    >
      <video
        ref={videoRef} // Attach the ref to the video element
        src="/firstPage.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
        preload="auto" // Ensure the video is preloaded to minimize delays
      />
      <div className="flex flex-col  items-center w-full  h-screen mt-[50px]">
        <span className="text-[50px] font-mokoto  text-white neon-white tracking-widest text-center text-wrap mb-5">
          Key
        </span>
        <img
          src="../public/pagesPicture/cll-grp.jpg"
          alt=""
          className="w-[1000px] neon-border-cyan-glow  object-cover  "
        />
        <p className="text-[30px] font-sans  text-white  text-center mt-5">
          Genesis, the competitive programming event organized by CLL <br /> Clu at
          MUST University Tunisia, is a thrilling platform where <br />brilliant minds
          converge to tackle intricate algorithmic problems  <br />with brilliant
          solutions.
        </p>
      </div>
    </div>
  );
}
export default Fih