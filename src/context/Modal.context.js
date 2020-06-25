import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export  const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idModalRecipe, setIdModalRecipeState] = useState(null);

    const [apiAnswer, setApiAnswerState] = useState([]);

    useEffect(() => {
        if(!idModalRecipe) return;

        const askingIdRecipeApi = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idModalRecipe}`
            const res = await axios.get(url);

            //console.log(res.data.drinks[0]);
            setApiAnswerState(res.data.drinks[0]);

        }
        askingIdRecipeApi();
    }, [idModalRecipe]);


    return(
        <ModalContext.Provider
        value={{
            setIdModalRecipeState,
            apiAnswer
        }}>
          {props.children}
        </ModalContext.Provider>
      )

}

export default ModalProvider;

