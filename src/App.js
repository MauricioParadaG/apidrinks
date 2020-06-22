import React from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';

import CategoriesProvider from './context/Categories.context';

function App() {
  return (
    <CategoriesProvider>
      <HeaderComponent/>

      <div className="container">
        <div className="row">
          <FormComponent/>
        </div>
      </div>
    </CategoriesProvider>
  );
}

export default App;
