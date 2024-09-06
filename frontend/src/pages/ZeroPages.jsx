import { useRef, useEffect } from 'react';
import FirstPage from './FirstPage';
import SecondePage from './SecondePage';
import ForthPage from './ForthPage';
import ThirdPage from './ThirdPage';
import Header from '../components/Header';
import Divider from '../components/Divider'; // Import the Divider component

function ZeroPages() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleVideoEnd);
    video.play();

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <video
        ref={videoRef}
        src="/firstPage.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
        preload="auto"
      />

      <Header />
      <div className="flex flex-col w-full min-h-screen mt-6 sm:mt-10 px-4 relative">
        <FirstPage />
        <Divider /> {/* Divider between pages */}
        <SecondePage />
        <Divider /> {/* Divider between pages */}
        <ThirdPage />
        <Divider /> {/* Divider between pages */}
        <ForthPage />
      </div>
    </div>
  );
}

export default ZeroPages;
