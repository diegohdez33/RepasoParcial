import Question from "./Question/Question";
import Options from "./Options/Options";

const data = {
  "category": "Geography",
  "type": "multiple",
  "difficulty": "medium",
  "question": "The land of Gotland is located in which European country?",
  "correct_answer": "Sweden",
  "incorrect_answers": [
    "Denmark",
    "Norway",
    "Germany"
  ]
};

const QuestionPage = () => {

  return (
    <section className="w-full h-screen p-10 flex flex-col justify-center items-center gap-8">
      <Question data={data}/>
      <Options data={data}/>
    </section>
  );
}

export default QuestionPage;