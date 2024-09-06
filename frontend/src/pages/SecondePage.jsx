

function SecondePage() {


  return (
    <>
     <div className="flex justify-center items-center w-full mt-40">
        <span className="text-3xl lg:text-5xl font-mokoto neon tracking-widest text-center px-4 ">
          WHO WE ARE
        </span>
      </div>
      
      {/* Main Content */}
      <div className=" relative flex items-center flex-col lg:flex-row lg:items-start lg:justify-center h-screen mt-10 lg:mt-[6.25rem] px-4 lg:px-0">
        
        {/* Indigo Background Content */}
        <div className="flex flex-col lg:flex-row items-center bg-indigo-950  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-70 p-5 rounded-2xl lg:rounded-[40px] max-w-8xl lg:w-2/3">
          <img
            src="../public/pagesPicture/workshop-pic.png"
            alt="Workshop"
            className="w-full lg:w-[570px] rounded-xl lg:rounded-[40px] object-contain"
          />
          <p className="text-base lg:text-lg font-sans text-white text-center lg:text-left lg:pl-5 mt-4 lg:mt-0">
            CLL or &quot;Club des Logiciels Libres&quot; is a dynamic community
            club dedicated to promoting and supporting open-source software.
            Passionate about the values of collaboration, transparency, and
            innovation, the CLL brings together enthusiasts, developers, and
            users who are keen on exploring and contributing to the open-source
            ecosystem. Through workshops, discussions, and collaborative
            projects, the club fosters an environment where members can share
            knowledge, develop skills, and contribute to the broader open-source
            community, making technology accessible and empowering for all.
          </p>
        </div>

        {/* Penguin Image */}
       
      </div>
    </>
  
  );
}

export default SecondePage;
