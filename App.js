import React from 'react';
import VoiceNative from './src/components/Voice'
import IngredientsList from './src/components/Ingredients'

const App: () => React$Node = () => {
  return (
    // For visibility, toggle between pages:
    <VoiceNative />
    // <IngredientsList />
  );
};

export default App;
