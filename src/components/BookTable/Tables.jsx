"use client";
import Image from "next/image";

const Tables = ({ img, number, isTaken }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 relative h-[150px] w-[230px]">
      <Image className={`col-start-1 row-start-1 w-full h-full object-cover ${isTaken ? "opacity-10" : "opacity-100"}`} src={img} alt="table" width={230} height={150} />

      <h2 className="col-start-1 row-start-1 place-self-center z-10">{number}</h2>
    </div>
  );
};

export default Tables;
