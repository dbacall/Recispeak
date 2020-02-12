# RecipeCam

<a href="https://codeclimate.com/github/dbacall/Speakipe/maintainability"><img src="https://api.codeclimate.com/v1/badges/e15ffaeec6a3a2d033c8/maintainability" /></a> <a href="https://codeclimate.com/github/dbacall/Speakipe/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e15ffaeec6a3a2d033c8/test_coverage" /></a> [![CircleCI](https://circleci.com/gh/dbacall/Speakipe.svg?style=svg)](https://circleci.com/gh/dbacall/Speakipe)

[Quick start](#quick-start) | [User stories](#user-stories) | [Tech used](#tech-used)

## Quick start

- To install dependencies, run ```npm install``` in the terminal
- To run the tests and see code coverage, run ```npm test -- --coverage``` in the terminal
- To run the linter (ESLint), run ```npm run lint``` in the terminal
- EditorConfig was used to increase the code quality
- CodeClimate is attached to our repository to check code quality and maintainability
- Circle CI integrated the tests and the linter to supply an additional safeguard when merging to master
<!-- Need to add the below -->
- A mobile accessibility checker was used to increase the accessibility of the app

## User stories

```
As a user
So I can list what ingredients I have
I want to be able to make a voice recording of the items I have in my fridge
```
```
As a user
So I can know what I'm working with
I want to be able to see the list of ingredients
```
```
As a user
So I can correct anything wrong on the list
I want to be able to edit that list manually
```
```
As a user
So I know what to cook
I want to be able to see a list of recipes that use my ingredients
```
```
As a user
So I can cook the recipe
I want to be able to view an individual recipe
```

## Tech used

- React Native
- Jest
- React Native Voice
- Circle CI
- Spoonacular API (Named Entity Recognition & Search Recipes by Ingredients)
