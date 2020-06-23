import React, {useContext} from 'react';

import {CategoriesContext} from '../context/Categories.context';

const FormComponent = () => {

    const {categories} = useContext(CategoriesContext);

    //console.log(categories);
    
    return (
        <form 
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
                    />
                </div>

                <div className="col-md-4">
                    <select
                    className="form-control"
                    name="category"
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
