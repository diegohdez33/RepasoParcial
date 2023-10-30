
const Options = ({data={}}) => {
  
  const shuffle = (array=[]) => { //genera un orden aleatorio en un array
    return array.sort(() => Math.random() - 0.5); 
  }; 
  
  const answers = [...data.incorrect_answers, data.correct_answer];
  const shuffledAnswers = shuffle(answers);
  let canChoose = true;

  const onClickHandler = (e) => {

    if(canChoose){
      if(e.target.value === data.correct_answer){
        e.target.style.backgroundColor = "rgb(163 230 53)";
        canChoose = !canChoose;
      } else {
        e.target.style.backgroundColor = "rgb(239 68 68)";
        canChoose = !canChoose;
      }
    }
  }


  return (
    <section className="flex justify-center items-center">
      {
        shuffledAnswers.map((r) => {
          return (
            <button 
              key={Math.random} 
              className="text-black w-64 h-24 bg-white rounded-lg flex justify-center items-center m-4 hover:cursor-pointer hover:bg-cyan-300"
              value={r}
              onClick={onClickHandler}
            >
              {r}
            </button>
          )
        })
      }
    </section>
  );
}

export default Options;