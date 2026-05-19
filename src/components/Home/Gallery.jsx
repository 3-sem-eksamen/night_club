import Image from "next/image";

const Gallery = ({ img, width, height, imgalt }) => {
  return <Image src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`} alt={imgalt} width={width} height={height} />;
};

export default Gallery;
