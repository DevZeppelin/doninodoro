import Head from "next/head";
import Layout from "../../components/Layout";
import MainTopScreenSecundary from "../../components/MainTopScreenSecundary";
import Image from "next/image";

export default function Nosotros() {

  return (
    <div>
      <Head>
        <title>Nosotros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainTopScreenSecundary title="Nosotros" />

        <div>
          <div className="flex flex-col md:flex-row p-8 md:p-24 gap-8">
            <Image src="/01.webp" width={400} height={400} />
            <div className="flex items-center justify-center p-8 md:p-24">
              <p>
                En Don Inodoro entendemos que un hogar limpio es un hogar feliz. Por eso, nos dedicamos a ofrecerte una amplia gama de productos de limpieza diseñados para satisfacer tus necesidades. Con más de 12 años de experiencia en el mercado, hemos construido una relación de confianza con nuestros clientes, basada en la calidad de nuestros productos y en un servicio personalizado.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-8 md:p-24 gap-8">
            <div className="p-8 md:p-24">
              <h2 className="text-3xl pb-4 font-black">MISIÓN</h2>
              <p>
              Ser la referencia en el mercado de productos de limpieza, garantizando la máxima calidad y confiabilidad en cada uno de nuestros productos

              </p>

              <h2 className="text-3xl pb-4 pt-8 font-black">VISIÓN</h2>
              <p>
              Ser el aliado perfecto para un hogar limpio y saludable, ofreciendo productos seguros y eficaces que simplifiquen las tareas del hogar.
              </p>
            </div>
            <Image src="/logo.webp" width={400} height={400} />
          </div>
        </div>
      </Layout>
    </div>
  );
}