const RedGridTextComponent = ({bg,index,title,text}) => {
  return (
    <div className={`flex flex-col p-8 items-start justify-center space-y-3 ${bg} h-full text-white`}>
        <h1 className="text-5xl">{index}</h1>
        <h3 className='text-2xl uppercase'>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default RedGridTextComponent