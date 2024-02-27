import video from "../../assets/video/video.mp4";

const Hero = () => {
  return (
    <div>
      <video width="100%" autoPlay loop muted>
        <source src={video} />
      </video>
    </div>
  );
};

export default Hero;
