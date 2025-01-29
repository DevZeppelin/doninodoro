import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaMailBulk } from "react-icons/fa";
import MainBarButton from "../components/MainBarButton";

const Cards = () => {
    return (
        // <div className="hidden md:grid grid-cols-4 gap-3 mx-auto p-2 px-16">
        <div className="hidden md:flex relative mt-16 justify-center">
            <div className="absolute md:-top-32 flex gap-2">

                <Link href="/contacto#sucursal1">
                    <MainBarButton
                        logo={
                            <FaMapMarkerAlt className="text-xl md:text-4xl flex my-auto min-h-24" />
                        }
                        text="Sucursal 1"
                        description2="San martin 2449, Las Heras, Mendoza"
                        classType="text-navbar"
                    />
                </Link>
                <Link href="/contacto#sucursal2">

                    <MainBarButton
                        logo={
                            <FaMapMarkerAlt className="text-xl md:text-4xl flex my-auto min-h-24" />
                        }
                        text="Sucursal 2"
                        description2="Independencia 2121, Las Heras, Mendoza"
                        classType="text-navbar"
                    />
                </Link>

                <MainBarButton
                    logo={
                        <FaWhatsapp className="text-xl md:text-4xl flex my-auto min-h-24" />
                    }
                    text="Whatsapp"
                    description2="2615 44 9599"
                    classType="text-navbar"
                />
                <MainBarButton
                    logo={
                        <FaMailBulk className="text-xl md:text-4xl flex my-auto min-h-24" />
                    }
                    text="Mail"
                    description2="doninodoroarticulosdelimpieza @gmail.com"
                    classType="text-navbar"
                />
            </div>
        </div>
    )
}

export default Cards