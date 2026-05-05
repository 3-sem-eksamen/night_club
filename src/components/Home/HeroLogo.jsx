import Image from "next/image";

const HeroLogo = () => {
  return (
    <>
      <Image src="/assets/icon/Logo.svg" alt="Logo" width={500} height={500} />
      <span>Have a good time</span>
      <Image src="/assets/bottom_line.png" alt="Bottom Line" width={500} height={500} />
    </>
  );
};

export default HeroLogo;
