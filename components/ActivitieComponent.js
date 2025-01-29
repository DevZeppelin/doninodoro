import { FaAngleDoubleRight } from "react-icons/fa";


const ActivitieComponent = ({title,text}) => {
  return (
    <div className="grid grid-cols-5 p-4">
      <div className="text-4xl flex justify-center mt-4 text-mainColor">
        <FaAngleDoubleRight />
      </div>
      <div className="col-span-4 p-4">
        <h3 className="font-extrabold text-lg pb-4 ">{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default ActivitieComponent