import React, {createContext, useState} from 'react';

export  const CategoriesContext = createContext();

const CategoriesProvider = (props) => {

    const [formData, setFormDataState] = useState('hello');


    return(
      <CategoriesContext.Provider
      value={{
        formData
      }}>
        {props.children}
      </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;


