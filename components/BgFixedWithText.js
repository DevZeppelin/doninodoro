import { useEffect, useState } from "react";


const BgFixedWithText = () => {

const [bgClass, setBgClass] = useState("bg-fixed");

  useEffect(() => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setBgClass("bg-local");
    }
  }, []);


  return (
    <div className={`h-[90vh] md:h-[60vh] 
    bg-hero-mobile md:bg-hero-fixed ${bgClass} bg-cover 
    flex items-center md:justify-end
    mt-24`}>

<div className="grid grid-cols-1 md:grid-cols-2">
  
  <div></div>
  
  
        <div className="flex justify-center mx-8 md:mx-auto
       bg-secundary bg-opacity-80 p-4 md:p-24
       rounded-3xl">
          <p className="text-xl md:text-2xl text-center">
  
            🧼 Ofrecemos productos de limpieza de alta calidad para hogares y negocios, garantizando eficacia, seguridad y cuidado del medio ambiente. ✨
          </p>
        </div>
</div>



    </div>
  )
}

export default BgFixedWithText