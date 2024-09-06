

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full bg-indigo-900  bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-70 ">
          <img src="/cll-logo.png" alt="CLL Logo" className="w-28 h-28 rounded-full ml-20 " />
          <div className="flex justify-evenly  items-center w-1/2">
    
            <h1 className="text-3xl font-mokoto text-center neon tracking-widest">HOME</h1>
            <h1 className="text-3xl font-mokoto text-center neon tracking-widest">GALLERY</h1>
            <h1 className="text-3xl font-mokoto text-center neon tracking-widest">EVENT</h1>
    
    
            
    
          </div>
    
          <button className="  rounded-full  h-12 w-56 mr-20 neon text-2xl  neon-border  font-mokoto tracking-widest p-2">Login</button>
        </div>
      );
}
