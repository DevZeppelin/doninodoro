import Image from "next/image";


const RedGridPhotoComponent = ({src}) => {
  return (
    <div className="relative w-full h-[60vh]">
      <Image src={src} fill className="object-cover" />
    </div>
  );
}

export default RedGridPhotoComponent