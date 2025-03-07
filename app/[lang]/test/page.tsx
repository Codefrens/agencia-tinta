import UniqueReel from "@/components/ui/UniqueReel";
import React from "react";

const TestPage = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <div style={{ height: "100vh" }}></div>
      <UniqueReel
        backText="Cantina Canalla"
        videoSrc="https://res.cloudinary.com/nicojoystin/video/upload/v1741201313/agencia-tinta/portfolio/cantina-canalla/videos/Reel_3_-_Ron_Ilustrador_dflfxs.mp4"
      />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default TestPage;
