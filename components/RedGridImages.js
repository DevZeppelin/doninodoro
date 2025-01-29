import RedGridPhotoComponent from "./RedGridPhotoComponent";
import RedGridTextComponent from "./RedGridTextComponent";


const RedGridImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <RedGridPhotoComponent src="/01.webp" />
      <RedGridTextComponent
        bg="bg-mainColor bg-opacity-50" 

        index="01"
        title="La empresa"
        text="Somos tu aliado en limpieza. Con años de experiencia, ofrecemos soluciones eficaces y confiables para cada rincón de tu hogar o negocio. Calidad y compromiso en cada producto."
      />
      <RedGridPhotoComponent src="/05.webp" />
      <RedGridTextComponent
        bg="bg-mainColor bg-opacity-70" 

        index="02"
        title="Nuestros productos"
        text="Descubre una gama diseñada para superar tus expectativas. ¡Escribinos al whatsapp y ahí mismo podrás ver nuestro catàlogo de productos! Tu consulta no molesta."
      />
      <RedGridPhotoComponent src="/03.webp" />
      <RedGridTextComponent
        bg="bg-mainColor bg-opacity-90" 
        index="03"
        title="Reparto"
        text="¡Andamos por toda Mendoza! Llevamos la limpieza hasta tu puerta. Consultá en nuestro Whatsapp qué dìa repartimos por tu zona."
      />
      <RedGridPhotoComponent src="/reparto.webp"  />
      <RedGridTextComponent
        bg="bg-mainColor"
        index="04"
        title="Atención personalizada"
        text="Tu satisfacción es nuestra prioridad. Un equipo experto listo para asesorarte y resolver cualquier duda. ¡Limpieza a tu medida!"
      />
      <RedGridPhotoComponent src="/04.webp" />
    </div>
  );
}

export default RedGridImages