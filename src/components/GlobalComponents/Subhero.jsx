import Image from "next/image";
const Subhero = ({title}) => {
    return ( 
        <section>
            <Image src="/assets/bg/footerbg.jpg"
            alt="footer background"
            width={1620}
            height={500}
            />
            <h2>{title}</h2>
            <Image src="/assets/bottom_line.png"
            alt="bottom line"
            width={1363}
            height={109}
            />

        </section>
     );
}
 
export default Subhero;