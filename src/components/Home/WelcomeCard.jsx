import Image from 'next/image';
const WelcomeCard = ({img, icon, text}) => {
    return ( 
        <section>
            <Image src={img} alt="Welcome Image" width={370} height={474} />
            <Image src={icon} alt="Welcome Icon" width={50} height={50} />
            <p></p>
        </section>
     );
}
 
export default WelcomeCard;