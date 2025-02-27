import { Translations } from "@/translations/types";
import styles from "./Hero.module.css";
import Container from "@/components/ui/Container";
import VideoButton from "@/components/ui/VideoButton";

const Hero = ({
  translations,
}: {
  translations: Translations["homePage"]["hero"];
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.video}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ transform: "scale(1)" }}
        >
          <source
            src="https://download-video-ak.vimeocdn.com/v3-1/playback/8467f025-b155-4f1c-b11c-752f61e0d4b8/b289c6f0-264a6685?__token__=st=1740069275~exp=1740083675~acl=%2Fv3-1%2Fplayback%2F8467f025-b155-4f1c-b11c-752f61e0d4b8%2Fb289c6f0-264a6685%2A~hmac=15f4f536c941e3bd580182132ae96b5f853e7e21e490f9205cc375ef1d3b6e18&r=dXMtY2VudHJhbDE%3D"
            type="video/mp4"
          />
        </video>
      </div>
      <Container>
        <div className={styles.content}>
          <p className={styles.subtitle}>{translations.subtitle}</p>
          <h1 className={styles.title}>{translations.title}</h1>
          <div>
            <VideoButton>{translations.reelLabel}</VideoButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
