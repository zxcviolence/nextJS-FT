import React from "react";
import Image from "next/image";
import pic from "../assets/wallpaperflare.com_wallpaper.jpg";
import MainContainer from "../components/MainContainer";

const anime = () => {
  return (
    <MainContainer>
      <Image src={pic} alt="anime" style={{width: "100%", height: "100%"}} />
    </MainContainer>
  );
};

export default anime;
