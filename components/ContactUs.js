import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div
            id="contacto"
            className="grid grid-cols-1 md:grid-cols-3 p-8 gap-8"
        >
            <div className="flex justify-center mx-auto p-8">
                <Link href="/">
                    <Image
                        src="/logo.webp"
                        width={400}
                        height={400}
                        alt="mza-cars-logo"
                    />
                </Link>
            </div>
            <div className="p-4 md:p-16 space-y-6 text-center overflow-hidden  ">

                <p className="text-2xl font-bold">Contactanos</p>
                <p><b>Dirección 1</b> San martin 2449, Las Heras, Mendoza</p>
                <p><b>Dirección 2</b> Independencia 2121, Las Heras, Mendoza</p>

                <p><b>WhatsApp:</b> 2615 44-9599</p>

                <p><b>Email:</b> doninodoroarticulosdelimpieza@gmail.com</p>

                <p><b>Horario:</b> Lunes a Viernes de 8:30 a 14:00 y de 15:00 a 17:00 hs.</p>




            </div>
            <div className="text-center flex flex-col space-y-4 justify-center align-middle">
                <p className="text-xl">Seguinos en nuestras redes</p>
                <div className="flex space-x-4 px-20 text-mainColor text-3xl p-1 justify-center text-5xl">
                    <a href="https://www.facebook.com/share/1AmPavGfMN/" target="_blank" rel="noreferrer">
                        <FaFacebook className="hover:text-liveColor" />
                    </a>
                    <a href="https://www.instagram.com/don_inodoro?igsh=MTJvM2xsaXRoZ21qNA==" target="_blank" rel="noreferrer">
                        <FaInstagram className="hover:text-liveColor" />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs