const MainBarButton = ({ logo, text,  description2 }) => {
    return (
      <div className="p-2 md:p-4 max-w-xl flex text-left text-base md:text-lg cursor-pointer
      h-auto rounded-2xl gap-2
      border-2 border-darkColor bg-secundary
      hover:bg-darkColor hover:text-secundary
      ">
        <div className="text-liveColor">{logo}</div>
        <div className="my-auto">
          {/*para pasar classname como prop:  <p className={classType}><b>{text}</b></p> */}
          <p className="text-sm md:text-base">
            <b>{text}</b>
          </p>
          <p className="text-xs md:text-sm overflow-hidden break-all">{description2}</p>
        </div>
       
      </div>
    );
}

export default MainBarButton