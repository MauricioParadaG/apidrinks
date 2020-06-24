import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export  const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipesState] = useState([]);
    const [formSearched, setFormSearchedState] = useState({
            ingredient:'',
            category :''
        }
      );

    //const [apiAnswer, setApiAnswerState] = useState({});

    useEffect(() => {
        if(formSearched.category ==='') return;

        const askingRecipesApi = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formSearched.ingredient}&c=${formSearched.category}`
            const res = await axios.get(url);

            //console.log(res.data.drinks);
            setRecipesState(res.data.drinks);

        }
        askingRecipesApi();
    }, [formSearched]);


    return(
      <RecipesContext.Provider
      value={{
        setFormSearchedState,
        recipes
        
      }}>
        {props.children}
      </RecipesContext.Provider>
    )
}

export default RecipesProvider;


