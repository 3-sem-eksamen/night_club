import Image from "next/image";
const Tables = ({ img, number, isTaken }) => {
  return (
    <section>
      <Image className={isTaken ? "opacity-10" : ""} src={img} alt="table" width={230} height={150} />
      <h2>{number}</h2>
    </section>
  );
};

export default Tables;
