"use client";
import { useEffect, useRef, useState } from "react";

export default function VimeoLazy({ videoId, hash }) {
  const wrapperRef = useRef(null);
  const [showIframe, setShowIframe] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
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
        padding: "56.25% 0 0 0",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden"
      }}>

      {/* Poster */}
      {!videoReady && (
        <img
          src={`/assets/images/Posters/${videoId}.jpg`}
          alt="Creative Triplet"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />
      )}

      {/* Vimeo iframe */}
      {showIframe && (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?h=${hash}&background=1&autoplay=1&muted=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          onLoad={() => setVideoReady(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: videoReady ? 1 : 0,
            transition: "opacity 0.4s ease"
          }}
          title="Vimeo video"
        />
      )}

    </div>
  );
}