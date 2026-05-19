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
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
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
