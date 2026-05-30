import { IVideo } from "@/types/common";

const Video = ({ srcMp4, srcWebm, srcPoster, autoPlay = false }: IVideo) => {
  return (
    <video controls preload='metadata' autoPlay={autoPlay} poster={srcPoster}>
      <source src={srcWebm} type='video/webm' />
      <source src={srcMp4} type='video/mp4' />
    </video>
  );
};

export default Video;
