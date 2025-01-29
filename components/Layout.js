import { useState } from "react";
import Footer from "./Footer";
import MainTopScreen from "./MainTopScreen";
import TopLeyend from "./TopLeyend";
import WhatsappIcon from "./WhatsappIcon";

export default function Layout({ children }) {

  const [open, setOpen] = useState(false);

  const toggleNav = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="bg-gradient-to-b from-background to-secundary  ">
      <span className=" md:block">
        <TopLeyend bg="bg-darkColor" />
      </span>
      <MainTopScreen toggleNav={toggleNav} open={open} />

      <div className="text-textcolor">{children}</div>
      
      <Footer />
      <WhatsappIcon />
    </div>
  );
}