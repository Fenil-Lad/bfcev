import React, { useRef, useState } from 'react';
import './WhatsInItForYou.css';
// import { Pause, Play } from 'lucide-react'; // Ensure you install lucide-react or use custom icons
// import { PauseFilled, PlayFilled } from 'lucide-react'; // Import the filled icons
import { Pause, Play } from 'lucide-react'; // Import solid (filled) icons

const WhatsInItForYouSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="whatsinitforyou-wrapper">
      <div className="whatsinitforyou-section">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="whatsinitforyou-video"
          src="/video.mp4" // Replace with your actual video path
          autoPlay
          muted
          loop
        />

        {/* Play/Pause Toggle Button */}
        <button className="video-toggle-button" onClick={toggleVideo}>
          {isPlaying ? (
            <Pause size={30} strokeWidth={1.5} color="#ffffff" />
          ) : (
            <Play size={30} strokeWidth={1.5} color="#ffffff" />
          )}
        </button>

        {/* Content Section */}
        <div className="whatsinitforyou-content">
          <h2 className="whatsinitforyou-title">What’s in it for You?</h2>
          <p className="whatsinitforyou-description">
            Powering the future with smart, secure, and sustainable logistics through EV innovation, data intelligence, and scalable tech.
          </p>
          <button className="whatsinitforyou-button">Explore now</button>
        </div>
      </div>
    </section>
  );
};

export default WhatsInItForYouSection;
