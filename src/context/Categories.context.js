import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export  const CategoriesContext = createContext();

const CategoriesProvider = (props) => {

    const [categories, setCategoriesState] = useState([]);

    useEffect(() => {
        const askingCategoriesApi = async () =>{
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const res = await axios.get(url);

            setCategoriesState(res.data.drinks);

        }
        askingCategoriesApi();
    }, []);


    return(
      <CategoriesContext.Provider
      value={{
        categories
      }}>
        {props.children}
      </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;


