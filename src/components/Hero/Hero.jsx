import video from "../../assets/video/video.mp4";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <video width="100%" autoPlay loop muted className={css.video}>
        <source src={video} />
      </video>
    </div>
  );
};

export default Hero;
