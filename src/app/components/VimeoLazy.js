"use client";
import { useEffect, useRef, useState } from "react";

export default function VimeoLazy({ videoId, hash }) {
  const wrapperRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4, // load when 40% visible
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "relative",
        padding: "56.25% 0 0 0",
        background: "#000", // prevents white flash
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      {loadVideo && (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=${hash}&autoplay=1&loop=1&muted=1&background=1`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  );
}