import React, {useContext} from 'react';
import RecipeComponent from './Recipe.component';

import {RecipesContext} from '../context/Recipes.context';


const ListingRecipesComponent = () => {

    const {recipes} = useContext(RecipesContext);

    return (
        <div className="row mt-5">
            {recipes.map(recipe =>(
                <RecipeComponent
                key={recipe.idDrink}
                recipesState={recipe}
                />
            ))}
        </div>
    );
}

export default ListingRecipesComponent;
