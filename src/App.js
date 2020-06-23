import React from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';

import CategoriesProvider from './context/Categories.context';
import RecipiesProvider from './context/Recipies.context';

function App() {
  return (
    <CategoriesProvider>
      <RecipiesProvider>
        <HeaderComponent/>

        <div className="container">
          <div className="row">
            <FormComponent/>
          </div>
        </div>
      </RecipiesProvider>  
    </CategoriesProvider>
  );
}

export default App;
