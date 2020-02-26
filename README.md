# Recispeak

<a href="https://codeclimate.com/github/dbacall/Speakipe/maintainability"><img src="https://api.codeclimate.com/v1/badges/e15ffaeec6a3a2d033c8/maintainability" /></a> <a href="https://codeclimate.com/github/dbacall/Speakipe/test_coverage"><img src="https://api.codeclimate.com/v1/badges/e15ffaeec6a3a2d033c8/test_coverage" /></a> [![CircleCI](https://circleci.com/gh/dbacall/Speakipe.svg?style=svg)](https://circleci.com/gh/dbacall/Speakipe)

[Demo](#demo) | [Getting Started](#getting-started) | [User Stories](#user-stories) | [Features](#features)| [Code Style](#code-style) | [Tech used](#tech-used) | 

An Android app that uses voice recognition, allowing the user to list the foods in their kitchen, and see a list of recipes based on those ingredients. Designed to tackle food waste and save the user money on future food shops.

## Demo

![Recispeak Demo Gif Part 1](https://media.giphy.com/media/UqwnCxy5mrlxqemZ6R/giphy.gif) ![Recispeak Demo Gif Part 2](https://media.giphy.com/media/iDb59vn7ORd8NwBxUX/giphy.gif)

## Getting Started

- Fork this repo and clone it to your local system
- To install dependencies, run ```npm install``` in the terminal
- Go to this link https://facebook.github.io/react-native/docs/getting-started
- Click on React Native CLI Quickstart
- Click on your preferred development OS
- Click on Android and follow the instructions in the 'Android development environment' section
- From your terminal run `react-native run-android`
  
### Code Quality

- EditorConfig was used to increase the code quality
- CodeClimate is attached to our repository to check code quality and maintainability
- Circle CI integrated the tests and the linter to supply an additional safeguard when merging to master

### Running the Tests

- To run the tests and see code coverage, run ```npm test -- --coverage``` in the terminal

### Running the Linter

- To run the linter (ESLint), run ```npm run lint``` in the terminal

## User Stories

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
So I can remove anything wrong on the list
I want to be able to delete from the ingredients list
```
```
As a user
So I can include ingredients that I forgot to say
I want to be able to add ingredients to the ingredients list manually
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
```
As a user
So I know what to do if I fail to say any ingredients
I want to see a page that tells me what to do next in this situation
```

## Features

- Speech Recognition
- Conversion of speech into ingredients list
- Add ingredients manually
- Delete ingredients
- See list of recipes based on ingredients
- See number of missing ingredients from recipes
- Filter by number of missing ingredients
- See individual recipes with instructions

## Code Style

- OOD
- TDD
- Spiking

## Tech Used

- React Native
- Jest
- React Native Voice
- Supernova Studio
- CSS
- Circle CI
- Code Climate
- Rapid API (Named Entity Recognition)
- Spoonacular API (Search Recipes by Ingredients & Recipe Instructions)
