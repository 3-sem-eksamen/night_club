import Image from "next/image";
const Tables = ({img, number}) => {
    return ( 
        <section>
            <Image src={img} alt="table" width={230} height={150}/>
            <h2>{number}</h2>
        </section>
     );
}
 
export default Tables;
