import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export  const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idModalRecipe, setIdModalRecipeState] = useState(null);

    return(
        <ModalContext.Provider
        value={{
            setIdModalRecipeState
        }}>
          {props.children}
        </ModalContext.Provider>
      )

}

export default ModalProvider;

