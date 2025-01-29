import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import NavBarMobile from "./NavBarMobile";
import { GiHamburgerMenu } from "react-icons/gi";

const MainTopScreen = ({ toggleNav, open }) => {
  return (
    <div><div className="flex px-4 md:px-24 gap-4 justify-center md:justify-between bg-gradient-to-b from-slate-50 to-slate-200">
      <Link href="/">
        <Image
          src="/logo.webp"
          width={250}
          height={300}
          alt="don-inodoro-logo"
          className="p-2 md:my-2  "
        />
      </Link>



      <NavBar />
    </div>
    <button
          onClick={toggleNav}
          aria-label="Hamburguer Button of Main Content"
          className="flex md:hidden text-secundary"
        >
          <GiHamburgerMenu className="text-4xl m-2 absolute top-3 right-5" />
        </button>
        <NavBarMobile open={open} />
    
    
    </div>
  );
}

export default MainTopScreen