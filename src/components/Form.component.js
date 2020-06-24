import React, {useContext, useState} from 'react';

import {CategoriesContext} from '../context/Categories.context';
import {RecipesContext} from '../context/Recipes.context';

const FormComponent = () => {

    const [formData, setFormDataState] = useState({
            ingredient:'',
            category :''
        }
      );

   // const [error, setErrorState] = useState(false);

    const {categories} = useContext(CategoriesContext);
    const {setFormSearchedState} = useContext(RecipesContext);
    //console.log(categories);

    const onChangeForm = event => {
      setFormDataState({
      ...formData,

      [event.target.name]: event.target.value
      });
    }  


    const onSubmit = event => {
        event.preventDefault();
        setFormSearchedState(formData);
/*
        if (formData.ingredient.trim() ==='' || 
        formData.category.trim() ==='' ){
            
      //      setErrorState(true);
            return;
        }
      //  setErrorState(false);
*/

    }

   

    return (
        <form onSubmit={onSubmit}
        className="col-12">
            <fieldset className="text-center">
                <legend>Which drink would you like to try in quarantine?</legend>
            </fieldset>

            <div className="row mt-4">

                <div className="col-md-4">
                    <input type="text"
                    className="form-control"
                    name="ingredient"
                    placeholder="Ingredients"
                    onChange={onChangeForm}
                    />
                </div>

                <div className="col-md-4">
                    <select
                    className="form-control"
                    name="category"
                    onChange={onChangeForm}
                    >
                        <option value="">- Select a Category-</option>
                {/** Iteration */}
                    {categories.map(category => (
                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                    ))}

                    </select>
                </div>

                {/** Button */}
                <div className="col-md-4">
                    <input type="submit"
                    className="btn btn-info btn-block"
                    value="Create Shake"/> 
                </div>

            </div>
        </form>
    )
}

export default FormComponent;
