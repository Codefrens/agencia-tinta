import UniqueReel from "@/components/ui/UniqueReel";
import React from "react";

const TestPage = () => {
  return (
    <div style={{ paddingTop: "5rem" }}>
      <div style={{ height: "100vh" }}></div>
      <UniqueReel
        backText={"ejemplo"}
        videos={[
          {
            videoUrl:
              "https://res.cloudinary.com/nicojoystin/video/upload/v1741201313/agencia-tinta/portfolio/cantina-canalla/videos/Reel_3_-_Ron_Ilustrador_dflfxs.mp4",
            videoAlt: "Reel Cantina Canalla",
            posterSrc:
              "https://res.cloudinary.com/nicojoystin/video/upload/w_800,so_2/v1741201302/agencia-tinta/portfolio/cantina-canalla/videos/Cantina-Franquicia_nngcjz.jpg",
          },
          {
            videoUrl:
              "https://res.cloudinary.com/nicojoystin/video/upload/v1741201313/agencia-tinta/portfolio/cantina-canalla/videos/Reel_3_-_Ron_Ilustrador_dflfxs.mp4",
            videoAlt: "Reel Cantina Canalla",
            posterSrc:
              "https://res.cloudinary.com/nicojoystin/video/upload/w_800,so_2/v1741201302/agencia-tinta/portfolio/cantina-canalla/videos/Cantina-Franquicia_nngcjz.jpg",
          },
        ]}
      />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default TestPage;
