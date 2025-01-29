import Head from "next/head";
import Layout from "../../components/Layout";
import MainTopScreenSecundary from "../../components/MainTopScreenSecundary";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaMailBulk, FaInstagram, FaFacebook } from "react-icons/fa";
import MainBarButton from "../../components/MainBarButton";



export default function Contacto() {

  return (
    <div>
      <Head>
        <title>Contacto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainTopScreenSecundary title="Contacto" />
        <div className="p-2 md:px-24 overflow-hidden">

          <div className="grid grid-cols-2 gap-2 mx-auto p-2">
            <MainBarButton
              logo={
                <FaWhatsapp className="text-xl md:text-5xl flex my-auto" />
              }
              text="Whatsapp"
              description2="2615 44 9599"
              classType="text-navbar"
            />
            <MainBarButton
              logo={
                <FaMailBulk className="text-xl md:text-5xl flex my-auto" />
              }
              text="Mail"
              description2="doninodoroarticulosdelimpieza @gmail.com"
              classType="text-navbar"
            />
          </div>
        </div>
        <div className="px-2 md:px-24">
          <h1 className="text-center text-bold text-4xl p-6">REDES</h1>

          <div className="grid grid-cols-2 gap-2 mx-auto p-2">
            <MainBarButton
              logo={
                <FaFacebook className="text-xl md:text-5xl flex my-auto" />
              }
              text="Facebook"
              description2="Don Inodoro Artículos de limpieza"
              classType="text-navbar"
            />
            <MainBarButton
              logo={
                <FaInstagram className="text-xl md:text-5xl flex my-auto" />
              }
              text="Instagram"
              description2="don_inodoro
"
              classType="text-navbar"
            />
          </div>
        </div>
        <div>
          <h1 className="text-center text-bold text-4xl p-6">SUCURSALES</h1>
          <div className="px-4 md:px-24 text-center" 
              id="sucursal1"
              >

            <MainBarButton
              logo={
                <FaMapMarkerAlt className="text-xl md:text-5xl flex my-auto" />
              }
              text="Sucursal 1"
              description2="San martin 2449, Las Heras, Mendoza"
              classType="text-navbar"
            />
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.4759319927584!2d-68.8334153!3d-32.841461599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08a1ec878d69%3A0x82e7617261bbc3fe!2sAv.%20San%20Mart%C3%ADn%202449%2C%20M5539%20Las%20Heras%2C%20Mendoza!5e1!3m2!1ses-419!2sar!4v1738104863668!5m2!1ses-419!2sar"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="p-4 md:p-24 text-center"
            id="sucursal2"
        >
          <MainBarButton
            logo={
              <FaMapMarkerAlt className="text-xl md:text-5xl flex my-auto text-center justify-center" />
            }
            text="Sucursal 2"
            description2="Independencia 2121, Las Heras, Mendoza"
            classType="text-navbar"
          />
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.4363292643066!2d-68.81398072395402!3d-32.8424425666337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08ad365716d9%3A0xe5d45bf16a64ad25!2sIndependencia%202121%2C%20M5539%20Las%20Heras%2C%20Mendoza!5e1!3m2!1ses-419!2sar!4v1738104936291!5m2!1ses-419!2sar"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Layout>
    </div>
  );
}