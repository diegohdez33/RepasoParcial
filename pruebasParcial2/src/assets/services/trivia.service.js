import axios from "axios";

export const fetchTrivia = async(amount, category, difficulty) => {
    try {
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`);
        
        /* if(data.status === 200){
            return Array.isArray(data.results);
        }else{
            return [];
        } */

        return data.results
    } catch (error) {
        console.error("An error ocurred: ", error);
    }
};
