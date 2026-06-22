"use client";
import { useEffect, useRef, useState } from "react";

export default function VimeoLazy({ videoId, hash }) {
  const wrapperRef = useRef(null);
  const [showIframe, setShowIframe] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [minPosterTimePassed, setMinPosterTimePassed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);

          setTimeout(() => {
            setMinPosterTimePassed(true);
          }, 3000);

          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0.0,
      }
    );

    if (wrapperRef.current) {

      observer.observe(wrapperRef.current);
    }

    return () => observer.disconnect();
  }, [])

  const isVideoFullyReady = videoReady && minPosterTimePassed;
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
      {!isVideoFullyReady && (
        <img
          src={`/assets/images/Posters/${videoId}.jpg`}
          alt="Creative Triplet"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease"
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