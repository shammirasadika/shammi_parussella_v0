"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(to bottom, #14141e, #1a1a2e)" }}>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-chart-3 rounded-full blur-2xl opacity-30" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-white flex items-center justify-center">
                  {/* Interactive image/video frame */}
                  <HeroMedia />
                </div>
              </div>
            </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              <span className="text-yellow-400">Shammi Parussella</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full Stack Developer & .NET Consultant
            </p>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A self-motivated developer with <span className="text-primary font-semibold">4+ years</span> of experience
            in <span className="text-white font-semibold">.NET consulting</span>, training, and solution development.
            Committed to delivering excellence in every project.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Melbourne, Australia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>+61 459497554</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-chart-3" />
              <span>shammirasadika123@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              <a href="#get-in-touch">
                Get In Touch
                <span className="ml-2">↓</span>
              </a>
            </Button>
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0">
              <a href="#chat-with-ai">
                <span className="mr-2">💬</span>
                Chat with My AI
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white border-0">
              <a href="https://github.com/shammirasadika" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white border-0">
              <a
                href="https://www.linkedin.com/in/shammi-parussella-301603197"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}

  // --- HeroMedia: handles image/video/play button logic ---
  import { PlayCircle } from "lucide-react"


function HeroMedia() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [isPiP, setIsPiP] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video when button clicked
  const handlePlay = () => {
    if (!videoRef.current) return;
    // Only play if not already playing in frame
    if (!videoRef.current.paused && showVideo && !isPiP) return;
    setIsPiP(false);
    setShowVideo(true);
    videoRef.current.currentTime = videoTime;
    videoRef.current.play();
  };

  // When video ends, revert to image
  const handleVideoEnd = () => {
    setShowVideo(false);
    setVideoTime(0);
  };

  // Listen for PiP, pause, ended, tab hidden, and PiP return events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When PiP starts, show image in frame
    const handleEnterPiP = () => {
      setIsPiP(true);
      setShowVideo(false);
      setVideoTime(video.currentTime);
    };
    // When PiP ends (Back to tab), resume video in frame automatically if it was playing
    const handleLeavePiP = () => {
      if (video.paused || video.ended) {
        setIsPiP(false);
        setShowVideo(false);
        setVideoTime(video.currentTime);
        return;
      }
      setIsPiP(false);
      setShowVideo(true);
      // Wait for video to be visible, then play
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = videoTime;
          videoRef.current.play();
        }
      }, 100);
    };
    // Pause/ended/tab hidden: revert to image and pause video
    const handlePause = () => {
      setShowVideo(false);
      setVideoTime(video.currentTime);
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };
    const handleEnded = () => {
      setShowVideo(false);
      setVideoTime(0);
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setShowVideo(false);
        setVideoTime(video.currentTime);
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      }
    };

    video.addEventListener('enterpictureinpicture', handleEnterPiP);
    video.addEventListener('leavepictureinpicture', handleLeavePiP);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Remove duplicate leavepictureinpicture handler to avoid interfering with auto-resume

    return () => {
      video.removeEventListener('enterpictureinpicture', handleEnterPiP);
      video.removeEventListener('leavepictureinpicture', handleLeavePiP);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoTime]);

  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <Image
        src="/profile.jpg"
        alt="Shammi Parussella"
        fill
        className="object-cover"
        priority
        style={{ zIndex: 0, opacity: (!showVideo || isPiP) ? 1 : 0, transition: 'opacity 0.3s' }}
      />
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/into_fullstack/Shammi%20Parussella_%20Full-Stack%20Innovator.mp4"
        className="absolute inset-0 w-full h-full object-cover rounded-full"
        style={{
          zIndex: 1,
          background: 'transparent',
          opacity: showVideo && !isPiP ? 1 : 0,
          pointerEvents: showVideo && !isPiP ? 'auto' : 'none',
          transition: 'opacity 0.3s'
        }}
        controls
        autoPlay={showVideo && !isPiP}
        playsInline
        onEnded={handleVideoEnd}
      />
      {/* Play button overlay only when not playing video in frame or in PiP */}
      {(!showVideo || isPiP) && (
        <button
          aria-label="Play video"
          onClick={isPiP ? undefined : handlePlay}
          disabled={isPiP}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full p-4 transition ${isPiP ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/80'}`}
          style={{ zIndex: 2 }}
        >
          <PlayCircle className="w-12 h-12 text-white" />
        </button>
      )}
      // ...existing code...
    </div>
  );
}
