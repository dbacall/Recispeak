# Progress Reports / Documented Learning

[Team commitments](#team-commitments) | [Sprint 1](#sprint-1) | [Sprint 2](#sprint-2) | [Reflection on Team Dynamics](#reflection-on-team-dynamics) | [Reflection on React Native](#reflection-on-react-native) | [Summary](#summary)

## Team commitments

- Use semantic commit message
- Run linter before each commit
- 2 approvals before merging to master
- Stand ups every morning
- Retros every evening
- Frequent stand ups throughout day as needed
- Daily pairing
- Occasional mobbing

## Sprint 1

[Learning resources](#learning-resources) | [Monday](#monday) | [Exploration of Visual Recognition machine learning](#exploration-of-visual-recognition-machine-learning) | [Tuesday](#tuesday) | [Wednesday](#wednesday) | [Thursday](#thursday) | [Friday](#friday) | [Saturday](#saturday) | [Sunday](#sunday) | [Sprint Demo 1 Coach Feedback](#sprint-demo---coach-feedback)

### Learning resources

#### Setup:

- [EditorConfig setup](https://medium.com/fantageek/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6)
- [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started)
  - select *React Native CLI Quickstart*
  - select *macOS*
  - select *Android*

#### Competitors:

- [Top Apps For Finding Recipes For Ingredients You Already Have](https://www.escoffieronline.com/top-apps-for-finding-recipes-for-ingredients-you-already-have/)
- [Samsung Family Hub Smart Fridge](https://www.samsung.com/us/explore/family-hub-refrigerator/apps/)
- [Alexa Skill - What's Cooking](https://www.hackster.io/wesee/what-s-cooking-6f6d87?ref=user&ref_id=25190&offset=2)
- [Kitche - Food Waste Mobile App](https://kitche.co/)

#### Image Recognition research:

- [Clarifai API](https://www.clarifai.com/blog/search-images-by-visual-similarity-with-the-clarifai-api)
- [Google Vision AI](https://cloud.google.com/vision)
- [Einstein Vision - Salesforce](https://einstein.ai/products)
- [IBM Watson Studio](https://www.ibm.com/uk-en/cloud/watson-studio)

#### Speech-to-Text:

- [5 Best Speech-to-Text APIs](https://nordicapis.com/5-best-speech-to-text-apis/)
- [React Native Voice tutorial]()
<!-- Insert React Native Voice tutorial here -->

#### OCR (Optical Character Recognition):

- [5 Best OCR APIs & Software](https://rapidapi.com/blog/top-5-ocr-apis/amp/)
- [TAGGUN - Real-time Receipt OCR API for developers](https://www.taggun.io/)

### Monday

- Generating project ideas
- Image recognition research

### Exploration of Visual Recognition machine learning

#### Useful links
- Download Batch Image Chrome Extension. [Link here](https://chrome.google.com/webstore/detail/batch-image-downloadfull/ahajhopfbfpekcljjjppolcmapaidldc?hl=en)
- AutoML Vision - Training imagine classifier. [Link here](https://www.youtube.com/watch?v=3342PeX1aNY)
- IBM Watson Studio - Training and testing models. [Link here](https://www.youtube.com/watch?v=KIw_iac56Hc)

#### Reflection

**Google Vision API**

- Pre-trained database is useful for recognising single item in a picture
- When trying on multiple items, it's not as accurate as we expected. It shows as 'food', 'package item', 'item'
- 50% accuracy for testing multiple items. It's not the tool we need for the app

**Google AutoML Vision**

- AutoML is another tool for training models based on the pictures we upload
- It takes longer time to train models compared to IBM Watson
- It works for single item recognition with high accuracy, but not for multiple items
- Free package limits: 40 node hours. We can only train up to 5-6 models for free

**IBM Watson**

- We realised that what we need is training our own models to upload more real-life photos as database (different angles of an item/in slightly different package)
- 3 stage experiments:  

| Experiments | Results |
| ------------ | ------- |
| Train 2 items | Turns out the accuracy isn't that great. It recognises tomato but not really garlic |
| Train 5 items | Added 3 more items on the first trial. The accuracy is surprisingly great. It knows almost all the items in the clear-background images. It even recognises garlic (which was not working well on the previous experiment) |
| Train other 5 items | We wanted to test other items and see if it works for the photos we took. This time it didn't work well when testing the pics from us. <see below> It recognised apple as orange, cannot recognise banana. The training models work well with the images from google(clear, clean background) only |   
  
- Then we hit the free usage limit. What we'll do next is to add more pictures for each category including real life ones, so it recognises the objects as what we input.
- For the concept of recognising ingredients through fridge photos, we found it hard with visual recognition as most of the items are wrapped in package/containers. After the research and experiments for 2 days, we decided to keep the idea of recipe generator, but using 'sound' as input - turning speech into text!

#### Factors affecting recognition performance

- Pixel/Resolution
- The amount of images: It needs at least 100 pics for each category

### Tuesday

- Trying to learn React Native
- Expo set-up with code climate, Circle CI, eslint, test coverage
  - [React Native with Expo](https://facebook.github.io/react-native/docs/getting-started)
  - [Android Studio Emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/)
- Discuss new ideas to adapt the project without use of image recognition. Agreed on voice recognition instead as it still delivers a fast user experience.
- Researching APIs for generating recipes and recognising food words

### Wednesday

- Realising limitations of using voice recognition on Expo
- Deciding to start again using React Native CLI instead
  - To make the switch we had to complete a [hard uninstall](https://stackoverflow.com/questions/17625622/how-to-completely-uninstall-android-studio-on-mac) of Android Studio and then follow the [setup resources above](#learning-resources).
- Installing React Native Voice using the new set-up
- Researching how to use the Spoonacular Detect Food in Text API (named entity recognition)
  - A form using the application/x-www-form-urlencoded content type was needed for the POST request but Spoonacular did not provide instructions
  - Used the API via RapidAPI instead, which did provide helpful examples
- Writing the Ingredients component and learning how to render the desired content from the API

### Thursday

- Debugging React Native Voice issues and refactoring
- Setting up our environment from scratch again: code climate, Circle CI, eslint, test coverage
- Planning how to iterate over all the API calls to gather the information needed (recipe list and individual recipes)

### Friday

- Write Recipes List component and render over JSON object; time consuming to learn how to iterate over object correctly and pull out the correct information
- Set up navigation between components - lack of resources online for straightforward navigation. Many convoluted approaches online.

### Saturday

- Debug Recipes List component
- Debug Circle CI with imported API Keys
- Researching how to feature test with Jest and Enzyme

### Sunday

- Write Individual Recipe component and render over JSON object
- Complete navigation between components
- Further research on how to write unit/feature tests

### Sprint Demo 1

*MVP: User can record a memo and the ingredients they mentioned are listed on screen.*  

#### Coach feedback
- Our MVP was ambitious.
- Could have broken the original image recognition idea down further, and researched scanning individual items using TensorFlow (https://www.tensorflow.org/tutorials/images/classification).
- Testing: write feature tests and check the component renders correctly. Unit test where appropriate.

## Sprint 2

[Monday](#monday) | [Tuesday](#tuesday) | [Wednesday](#wednesday) | [Thursday](#thursday) | [Friday](#friday) | [Sprint Demo 2 Coach Feedback](#sprint-demo-2-coach-feedback) | [Testing with Jest/Enzyme](#testing-with-jest/enzyme)

### Monday

- Restructure navigation into a separate class (Speakipe.js)
  - Moved the logic from ingredients and recipes list pages here
  - This made more sense and made the overall code more readable
  - Spoke with a React developer who advised that this was a best practise approach
- Add feature: delete button for ingredients
- Explore Supernova Studio (design to code software) in readiness for styling

### Tuesday

- Strong time boxing: had a number of bugs and chores to fix. All pairs/solos successfully completed tasks:
- Add feature: add an ingredient manually
- Writing unit and feature tests
- Refactor individual recipe page logic and move to Speakipe.js navigator and fix API bug (not rendering correctly)
- Design mock-ups ready for styling in Adobe XD

### Wednesday

- Planning: Decided what features were realistic to implement in one day before feature freeze that night
- Add feature: filter for number of missing ingredients required to make a recipe
- Add feature: back buttons on every page (improved navigation)
- Styling using Supernova Studio
  - Software was helpful to use when designing a sleek user experience at speed
  - Time constraints meant we had little time to learn this software and the powerful tools it has to offer
  - Time constraints meant our views were long and somewhat convoluted - no time yet to refactor / extract into better file system
- Tweaking, debugging, improving the styling. Debugging importing fonts.
- Writing more unit and feature tests
- Update README

### Thursday

- Tweaking and debugging final styling (back buttons, ingredients filter etc.)
- Fix screen orientation to portrait view
- Team reflection of the overall project
- Presentation prep (script, powerpoint, filming the demo)

### Friday

- Project fair: live demos of app to visitors
- Presentation: deliver talk on our product to audience

### Sprint Demo 2

*Next goal: See recipe page, add ingredients manually, add filter (stretch goal)*   

#### Could go better

- More even commits across the team
- Update learning documentation / progress reports

#### What went well

- We set good deadlines / time-boxing / moved to the next part if blocked (didn't waste time if blocked for too long)
- We went from having nothing to show, to having the entire core structure of the app!
- Flexible to change the idea
- Paring went well
- Constant communication; always knew what everyone else was doing.

### Testing with Jest/Enzyme
<!-- Insert Julie's notes here -->


## Reflection on Team Dynamics

### What went well

- Good time boxing, especially in Week 2 once project was off the ground.
- Flexibility as a team; knew when to stop and move on, or when to push forward.
- Team agreement at every point; always had team consensus when changing direction/tweaking ideas.
- Strong communication; constantly talking and consulting each other. Always knew what others were working on.
- Great direction and agreement in stand-ups/retros.
- Good and clear commit messages using the semantic style.
- Merging pull requests after a minimum of 2 reviews/approvals from other team members.
- Team of 5 people can be good for extra research / debugging.

### What could have gone better

- Some pairs could have taken more breaks
- Sometimes too rigid with our pairing; could have been more flexible with solo work.
- Feeling behind on commits; uneven commits across the team.
- Utilised our Trello board more (ticketing system).
- Team of 5 people can be difficult for a strong pairing ethos as an odd number.

## Reflection on React Native

### Positives

- Decent documentation / numerous online resources such as blogs.
- Very flexible & developer friendly.
- Powerful: many tools and add-ons available to scale your project.
- Fun to learn a widely used tool and stretch yourself.
- Great to see the product as it formed; encouraging to see the progress.
- Can be used to scale something quickly.
- Can be used on both IOS and Android.

### Negatives

- 2 weeks is short time to learn it (confusing at first) and pick the right tools.
- Testing was also difficult to learn at first.
- Inconsistent file structure across React Native projects online; could not find a best practise approach.
- Sometimes you could not find a solution online (e.g. finding a straightforward navigation solution between pages).
- Depending on how the environment is set-up, you can have bugs to fix before you've written any code (debugging in the dark as you did not right the code where the bugs are stemming from).

### Expo CLI specific

- set structure
- not as flexible / limited
- could not use React Native Voice with it

### React Native CLI specific

- empty canvas so very flexible
- set up with Android Studio was very long
- endless tools and add-ons available

## Summary

1. First week - learning the language; trying to understand where and how to start. Was a slow start but we worked flexibly and diligently as a team.
2. Second week - scaling the project very quickly; adding features, styling & testing. We were very proud of how the project turned out and our ability to build it so fast.
