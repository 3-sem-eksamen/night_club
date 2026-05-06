import Video from "./Video";
import Image from "next/image";

const VideoContainer = () => {
  return (
    <section>
      <h2>Latest video</h2>
      <Image src="/assets/bottom_line.png" width={200} height={200} />
      <Video />
    </section>
  );
};

export default VideoContainer;
