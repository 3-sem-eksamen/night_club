const Videos = ["/assets/media/video-crowd.mp4", "/assets/media/video-dj-crowd-2.mp4", "/assets/media/video-dj-crowd1.mp4"];

const Video = () => {
  return (
    <div>
      {Videos.map((video, i) => (
        <video key={i} width="500" height="300" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default Video;
