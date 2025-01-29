import ActivitieComponent from "./ActivitieComponent";

const Activities = () => {
  return (
    <div className="h-auto mb-48" id="quienes-somos">
      <h1 className="text-center text-bold text-4xl p-6 mt-24">QUIENES SOMOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 h-auto p-20">
          <ActivitieComponent title="Misión"
          text="Ser la referencia en el mercado de productos de limpieza, garantizando la máxima calidad y confiabilidad en cada uno de nuestros productos." />
          
        <ActivitieComponent title="Visión" 
        text="Ser el aliado perfecto para un hogar limpio y saludable, ofreciendo productos seguros y eficaces que simplifiquen las tareas del hogar." />
      </div>
    </div>
  );
}


export default Activities