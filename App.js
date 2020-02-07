import React from 'react';
import VoiceNative from './src/components/Voice'
import IngredientsList from './src/components/Ingredients'
import RecipesList from './src/components/RecipesList'
import Recipe from './src/components/Recipe'

const App: () => React$Node = () => {
  return (
    // For visibility, toggle between pages:
    // <VoiceNative />
    // <IngredientsList />
    // <RecipesList />
    <Recipe />
  );
};

export default App;
