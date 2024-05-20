import logo from "@/assets/logo.jpg";
import img from "@/assets/TCE94.png";
import Image from "next/image";
const NavbarColor = () => {
  return (
    <div className="bg-[#a6ce3a] w-full flex justify-between">
      <Image src={logo} alt="Logo" width={213} height={154} />
      <Image src={img} alt="Logo" width={213} height={154} />
    </div>
  );
};

export default NavbarColor;
