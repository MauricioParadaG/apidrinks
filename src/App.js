import React from 'react';
import HeaderComponent from './components/Header.component';
import FormComponent from './components/Form.component';


function App() {
  return (
    <>
      <HeaderComponent/>

      <div className="container">
        <div className="row">
          <FormComponent/>
        </div>
      </div>
    </>
  );
}

export default App;
