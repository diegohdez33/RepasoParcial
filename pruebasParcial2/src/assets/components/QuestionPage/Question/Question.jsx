

const Question = ({ data={} }) => {

  return (
    <div className="text-black font-bold text-2xl bg-white m-10 w-full h-64 p-8 flex justify-center items-center rounded-lg ">
      {data.question}
    </div>
  ); 
}

export default Question;