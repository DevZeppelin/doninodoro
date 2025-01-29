import Image from "next/image"

const PhotoAndDescription = () => {
  return (
    <div className="h-auto md:h-screen grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 mx-auto">
      <div className="flex md:hidden my-12"></div>
      <div className="px-8 md:px-0 m-8 md:m-24 flex items-center justify-center">
        <Image
          src="/main.webp"
          width={400}
          height={500}
        />
      </div>
      <div className="p-12 md:p-16 space-y-8 my-auto text-lg">
        <p>
          En Don Inodoro entendemos que un hogar limpio es un hogar feliz.
        </p>
        <p>
          Por eso, nos dedicamos a ofrecerte una amplia gama de productos de limpieza diseñados para satisfacer tus necesidades.
        </p>
        <p>Con más de 12 años de experiencia en el mercado, hemos construido una relación de confianza con nuestros clientes, basada en la calidad de nuestros productos y en un servicio personalizado.
        </p>

      </div>
    </div>
  )
}

export default PhotoAndDescription