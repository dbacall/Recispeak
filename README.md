# RecipeCam

<!-- Need to update badges for new project -->
<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a> <a href="https://codeclimate.com/github/codeclimate/codeclimate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage" /></a>

[Quick start](#quick-start) | [Tech used](#tech-used)  

## Quick start

- To install dependencies, run ```npm install``` in the terminal
- To run the tests and see code coverage, run ```npm test -- --coverage --watchAll=false``` in the terminal
- To run the linter (ESLint), run ```npm run lint``` in the terminal
- EditorConfig was used to increase the code quality
- CodeClimate is attached to our repository to check code quality and maintainability
- Circle CI integrated the tests and the linter to supply an additional safeguard when merging to master
<!-- Need to add the below -->
- A mobile accessibility checker was used to increase the accessibility of the app

## Tech used

- React Native
- Jest
- React Native Voice
- Circle CI
- Spoonacular API (Named Entity Recognition & Search Recipes by Ingredients)
