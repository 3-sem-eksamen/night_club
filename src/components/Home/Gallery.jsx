import Image from "next/image";

const Gallery = ({ img, width, height, imgalt }) => {
  return <Image src={`http://localhost:4000${img}`} alt={imgalt} width={width} height={height} />;
};

export default Gallery;
