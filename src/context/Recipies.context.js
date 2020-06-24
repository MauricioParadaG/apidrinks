import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export  const RecipiesContext = createContext();

const RecipiesProvider = (props) => {

    const [recipies, setRecipiesState] = useState([]);
    const [formSearched, setFormSearchedState] = useState({
            ingredient:'',
            category :''
        }
      );

    //const [apiAnswer, setApiAnswerState] = useState({});

    useEffect(() => {
        if(formSearched.category ==='') return;

        const askingRecipiesApi = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${formSearched.ingredient}&c=${formSearched.category}`
            const res = await axios.get(url);

            //console.log(res.data.drinks);
            setRecipiesState(res.data.drinks);

        }
        askingRecipiesApi();
    }, [formSearched]);


    return(
      <RecipiesContext.Provider
      value={{
        setFormSearchedState,
        recipies
        
      }}>
        {props.children}
      </RecipiesContext.Provider>
    )
}

export default RecipiesProvider;


