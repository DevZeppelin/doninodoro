
const MainTopScreenSecundary = ({ title }) => {
  return (
    <div className="h-[50vh] bg-cover bg-hero-contacto">

      <p
        className="text-secundary text-5xl md:text-6xl p-8 md:p-16 text-right"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        {title}
      </p>
    </div>
  )
}

export default MainTopScreenSecundary