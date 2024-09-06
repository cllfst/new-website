

function ThirdPage() {
  return (
    <div className="flex flex-col w-full min-h-screen mt-14 mb-5 sm:mt-10 px-4">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-6xl font-mokoto text-white neon-white tracking-widest text-center leading-tight sm:leading-normal">
        JOIN OUR CLUB AND <br /> EXPLORE THE WORLD OF <br /> OPEN SOURCE
      </span>

      <div className="flex flex-col lg:flex-row lg:justify-evenly items-center w-full mt-8 sm:mt-10 lg:mt-20 space-y-6 sm:space-y-8 lg:space-y-0 ">
        <div className="flex flex-col justify-center items-center w-full max-w-xs sm:max-w-sm lg:max-w-xs bg-indigo-950  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-70 rounded-3xl">
          <img
            src="../public/pagesPicture/workshop-logo.png"
            alt="Workshop"
            className="w-full max-w-[150px] sm:max-w-[200px] rounded-2xl object-contain"
          />
          <p className="text-lg sm:text-xl lg:text-2xl font-sans text-white text-center mt-10 pb-10">
            Workshops to <br />
            Enhance Your Skills
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-xs sm:max-w-sm lg:max-w-xs  bg-indigo-950  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-70 rounded-3xl">
          <img
            src="../public/pagesPicture/hackathon.png"
            alt="Hackathon"
            className="w-full max-w-[150px] sm:max-w-[200px] rounded-2xl object-contain"
          />
          <p className="text-lg sm:text-xl lg:text-2xl font-sans text-white text-center mt-10 pb-10">
            Hackathons and <br />
            Competitions to Foster <br />
            Innovation
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-xs sm:max-w-sm lg:max-w-xs  bg-indigo-950  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-70 rounded-3xl">
          <img
            src="../public/pagesPicture/event.png"
            alt="Event"
            className="w-full max-w-[150px] sm:max-w-[200px] rounded-2xl object-contain"
          />
          <p className="text-lg sm:text-xl lg:text-2xl font-sans text-white text-center mt-10 pb-10">
            IT Events for <br />
            Social Networking
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
