

const Options = ({data={}}) => {

  return (
    <section className="flex justify-center items-center">
      <div className="text-black w-64 h-24 bg-white rounded-lg flex justify-center items-center m-4 hover:cursor-pointer">
        {data.correct_answer}
      </div>

      {
        data.incorrect_answers.map((r) => {
          return (
            <div key={Math.random} className="text-black w-64 h-24 bg-white rounded-lg flex justify-center items-center m-4 hover:cursor-pointer">
              {r}
            </div>
          )
        })
      }
    </section>
  );
}

export default Options;