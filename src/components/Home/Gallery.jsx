import Image from "next/image";

const GalleryImages = ["/assets/content-img/gallery1_big.jpg", "/assets/content-img/gallery2_big.jpg", "/assets/content-img/gallery3_big.jpg", "/assets/content-img/gallery4_big.jpg", "/assets/content-img/gallery5_big.jpg", "/assets/content-img/gallery6_big.jpg", "/assets/content-img/gallery7_big.jpg", "/assets/content-img/gallery8_big.jpg", "/assets/content-img/gallery9_big.jpg", "/assets/content-img/gallery10_big.jpg", "/assets/content-img/gallery11_big.jpg", "/assets/content-img/gallery12.jpg", "/assets/content-img/gallery13_big.jpg", "/assets/content-img/gallery14_big.jpg"];

const Gallery = () => {
  return (
    <div>
      {GalleryImages.map((image, i) => (
        <Image key={i} src={image} alt="" width={500} height={500} />
      ))}
    </div>
  );
};

export default Gallery;
