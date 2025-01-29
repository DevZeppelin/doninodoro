
const Footer = () => {
  return (
    <div className="bg-darkColor text-white text-xl flex flex-col py-0">
      
      
      <div className="text-sm max-w-2xl p-4">
        Make in Mendoza, Argentina, by{" "}
        <a href="https://devzeppelin.com.ar" target="_blank">
          DevZeppelin
        </a>{" "}
        &copy; &nbsp;
        <p>{new Date().getFullYear()}</p>
      </div>
      
    </div>
  );
}

export default Footer