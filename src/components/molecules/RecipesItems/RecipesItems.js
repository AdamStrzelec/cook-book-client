import React from 'react';
import RecipeItem from '../RecipeIcon/RecipeItem';

const RecipesItems = ({ recipes }) => (
    <div>     
        {
        recipes.map((recipe, index) => <RecipeItem
            key={index} 
            id={recipe.id}
            image={recipe.imagePath}
            name={recipe.name}
            description={recipe.description}
            grade={recipe.averageRate}
            type={recipe.type}
        />)
        }     
    </div>
)

export default RecipesItems;
