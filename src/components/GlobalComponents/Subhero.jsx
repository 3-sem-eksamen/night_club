import Image from "next/image";
const Subhero = ({ title }) => {
  return (
    <section className="grid">
      <Image className="col-start-1 row-start-1 w-full h-full object-cover opacity-50" src="/assets/bg/footerbg.jpg" alt="footer background" width={1620} height={500} />
      <div className="col-start-1 row-start-1 flex flex-col items-center justify-center z-10">
        <h2>{title}</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
      </div>
    </section>
  );
};

export default Subhero;
