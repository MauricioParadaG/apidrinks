import React, {useContext} from 'react';
import RecipeComponent from './Recipes.component';

import {RecipiesContext} from '../context/Recipies.context';


const ListingRecipiesComponent = () => {

    const {recipies} = useContext(RecipiesContext);

    return (
        <div className="row mt-5">
            {recipies.map(recipe =>(
                <RecipeComponent
                key={recipe.idDrink}
                recipiesState={recipe}
                />
            ))}
        </div>
    );
}

export default ListingRecipiesComponent;
