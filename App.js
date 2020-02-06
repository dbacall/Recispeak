import React from 'react';
import VoiceNative from './src/components/Voice'
import IngredientsList from './src/components/Ingredients'

const App: () => React$Node = () => {
  return (
    <VoiceNative />,
    <IngredientsList />
  );
};

export default App;
