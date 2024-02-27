// import css from "./Hero.module.css";
// import photo from "../../assets/images/wallet/IMG_5096.jpg";
import video from "../../assets/video/video.mp4";

const Hero = () => {
  return (
    <div>
      <video src={video} width="100%" playsInline autoPlay={true}></video>
    </div>
  );
};

export default Hero;
