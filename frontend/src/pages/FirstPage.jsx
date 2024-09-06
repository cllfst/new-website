



function FirstPage() {
 ;

  return (
    <>
  

   

      <div className="flex items-center relative">
        <img
          src="/penguin-neon.png"
          alt="Penguin Neon"
          className="h-[1180px] transform translate-x-[-500px] translate-y-[0px] flex"
        />
        <span className="text-[100px] font-mokoto neon tracking-[50px] translate-x-[-880px] translate-y-[-170px]">
          CLL
        </span>
        <div className="translate-x-[-1210px] translate-y-[35px] items-center justify-center text-center">
          <span className="text-[40px] font-mokoto neon tracking-[10px]">
            CLUB DES LOGICIELS <br /> LIBRE <br />
          </span>
          <span className="text-[30px] font-mokoto text-info tracking-widest translate-x-[-1460px] translate-y-[100px] text-nowrap ">
            SINCE 2004
          </span>
        </div>
        <img
          src="../public/pagesPicture/firstPage-pic.jpg"
          alt="First Page"
          className="relative translate-x-[-990px] translate-y-[-100px] min-w-[900px] neon-border-cyan rounded-[40px] mb-5"
        />
      </div>
    
    </>
  );
}

export default FirstPage;
