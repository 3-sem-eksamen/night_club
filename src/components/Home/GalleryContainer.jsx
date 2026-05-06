import Gallery from "./Gallery";

const GalleryContainer = () => {
  return (
    <section>
      <h2>Night club Gallery</h2>
      <FetchGallery />
    </section>
  );
};

const FetchGallery = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/gallery");
  const GalleryImages = await response.json();

  return GalleryImages.map((img) => {
    return (
      <div key={img.id}>
        <Gallery img={img.asset.url} imgalt={img.asset.alt} width={img.asset.width} height={img.asset.height} />
      </div>
    );
  });
};

export default GalleryContainer;
