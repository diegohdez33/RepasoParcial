import { fetchTrivia } from "../../services/trivia.service"
import categories from "../../categories.json"
import difficulty from "../../difficulty.json" 

const categoriesj = categories;
const difficultyj = difficulty;

export function Search(){

    return (
        <section className=" bg-purple-700 h-screen flex flex-col items-center justify-start ">
            <form className=" bg-neutral-500 rounded-2xl p-4 m-8 flex flex-col  flex-wrap items-right justify-center gap-4 ">
                <label> Type a number between 1-50 </label>
                <input type="number" ></input>
                <label> Choose a category  </label>
                <select name="category">
                    {categoriesj.map((r)=>{
                        return (
                            <option key={r.id}> { r.name } </option>
                        );
                    })}
                </select>
                <label> Choose a difficult</label>
                <select name="difficult">
                    {difficultyj.map((k)=>{
                        return (
                            <option key={k.id}> { k.difficulty } </option>
                        );
                    })}
                </select>
                <button type="submit" className=" bg-gray-700 rounded-2xl h-8 "> Submit </button>
            </form>
        </section>
    );
}