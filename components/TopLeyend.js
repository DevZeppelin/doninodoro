import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const TopLeyend = ({ bg }) => {
  return (
    <div className={`flex   flex-row justify-between gap-4 py-4 md:py-2 text-secundary  text-sm ${bg}`}>
      <div className="hidden md:flex flex-col  my-auto md:flex-row 
                      space-x-0 md:space-x-4 px-2 md:px-20 space-y-4 md:space-y-0">
        <div className="flex gap-2">
          <FaMapMarkerAlt className="text-liveColor" />
          San martin 2449, Las Heras, Mdz
        </div>
        <span className="hidden md:flex">|</span>
        <div className="flex gap-2">
          <FaMapMarkerAlt className="text-liveColor" />
          Independencia 2121, Las Heras, Mdz
        </div>
        <span className="hidden md:flex">|</span>
        <div className="flex gap-2">
          <FaPhoneAlt className="text-liveColor" />
          2615 44 9599
        </div>

      </div>
      <div className="flex space-x-4 px-6 md:px-20 text-secundary text-3xl p-1">
        <a href="https://www.facebook.com/share/1AmPavGfMN/" target="_blank" rel="noreferrer">
          <FaFacebook className="hover:text-liveColor" />
        </a>
        <a href="https://www.instagram.com/don_inodoro?igsh=MTJvM2xsaXRoZ21qNA==" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-liveColor" />
        </a>
        <a href="mailto:doninodoroarticulosdelimpieza@gmail.com" target="_blank" rel="noreferrer">
          <FaMailBulk className="hover:text-liveColor" />
        </a>
      </div>
    </div>
  );
};

export default TopLeyend;