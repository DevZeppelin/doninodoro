import { useEffect, useState } from "react";

const MainScreen = () => {

  const [bgClass, setBgClass] = useState("bg-fixed");

  useEffect(() => {
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setBgClass("bg-local");
    }
  }, []);

  return (
    // <div className="h-[90vh] md:h-[60vh] bg-hero-mobile2 md:bg-hero-pattern bg-fixed bg-cover flex items-center md:justify-end">
    <div className={`h-[90vh] md:h-[60vh] bg-hero-mobile2 md:bg-hero-pattern ${bgClass} bg-cover flex items-center md:justify-end`}>
    
      <span
        className="text-secundary text-5xl md:text-6xl p-8 md:p-16 text-right"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        <p>Brillo impecable,</p> <p>resultados increíbles.</p>
      </span>
    </div>
  );
}

export default MainScreen