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

    useEffect(() => {
        const askingRecipiesApi = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const res = await axios.get(url);

            setRecipiesState(res.data.drinks);

        }
        askingRecipiesApi();
    }, []);


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


