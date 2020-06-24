import React from 'react';

const RecipeComponent = props => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{props.recipesState.strDrink}</h2>

                <img className="card-img-top" src={props.recipesState.strDrinkThumb} alt={`Drink pic of ${props.recipesState.strDrink}`} />
            </div>

            <div className="card-body">
                <button
                type="button"
                className="btn btn-primary btn-block"
                >
                    View Recipe
                </button>
            </div>

        </div>
    )
}

export default RecipeComponent;
