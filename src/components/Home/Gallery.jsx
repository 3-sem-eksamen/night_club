import Image from "next/image";

const Gallery = ({ img, width, height, imgalt }) => {
  return <Image src={`${process.env.api_url}${img}`} alt={imgalt} width={width} height={height} />;
};

export default Gallery;
