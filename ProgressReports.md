# Progress Reports / Documented Learning

[Team commitments](#team-commitments) | [Sprint 1](#sprint-1)

## Team commitments

- Use [semantic]() commit message
- Run linter before each commit
- 2 approvals before merging to master
- Stand ups every morning
- Retros every evening
- Frequent stand ups throughout day as needed
- Daily pairing
- Occasional mobbing

## Exploration of Visual Recognition machine learning

### Useful links 
- Download Batch Image Chrome Extension. [Link here](https://chrome.google.com/webstore/detail/batch-image-downloadfull/ahajhopfbfpekcljjjppolcmapaidldc?hl=en)
- AutoML Vision - Trainging imagine classifier. [Link here](https://www.youtube.com/watch?v=3342PeX1aNY)
- IBM Watson Studio - Training and testing models. [Link here](https://www.youtube.com/watch?v=KIw_iac56Hc)


### Reflection  

**Google Vision API**
- Pre-trained database is useful for recognising single item in a picture
- When trying on multiple items, it’s not as accurate as we expected. It shows as ‘food’ ‘package item’ ‘item’
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
| Train 2 items | Turns out the accuracy isn’t that great. It recognises tomato but not really garlic |
| Train 5 items | Added 3 more items on the first trial. The accuracy is surprisingly great. It knows almost all the items in the clear-background images. It even recognises garlic (which was not working well on the previous experiment) |
| Train other 5 items | We wanted to test other items and see if it works for the photos we took. This time it didn’t work well when testing the pics from us. <see below> It recognised apple as orange, cannot recognise banana. The training models work well with the images from google(clear, clean background) only |

- Then we hit the free usage limit. What we’ll do next is to add more pictures for each categories including real life ones, so it recognises the objects as what we input
- For the concept of recognising ingredients through fridge photos, we found it hard with visual recognition as most of the items are wrapped in package/containers. After the research and experiments for 2 days, we've decided to keep the idea of recipe generator, but using 'sound' as input - turning speech into text!

### Factors affecting recognition performance
- Pixel/Resolution
- The amount of images: It needs at least 100 pics for each category 


## Sprint 1

### Learning resources

Setup:
- [EditorConfig setup](https://medium.com/fantageek/setting-up-eslint-and-editorconfig-in-react-native-projects-31b4d9ddd0f6)
- [React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started)
  - select *React Native CLI Quickstart*
  - select *macOS*
  - select *Android*

Competitors:
- [Top Apps For Finding Recipes For Ingredients You Already Have](https://www.escoffieronline.com/top-apps-for-finding-recipes-for-ingredients-you-already-have/)
- [Samsung Family Hub Smart Fridge](https://www.samsung.com/us/explore/family-hub-refrigerator/apps/)
- [Alexa Skill - What's Cooking](https://www.hackster.io/wesee/what-s-cooking-6f6d87?ref=user&ref_id=25190&offset=2)
- [Kitche - Food Waste Mobile App](https://kitche.co/)

Image Recognition research:
- [Clarifai API](https://www.clarifai.com/blog/search-images-by-visual-similarity-with-the-clarifai-api)
- [Google Vision AI](https://cloud.google.com/vision)
- [Einstein Vision - Salesforce](https://einstein.ai/products)
- [IBM Watson Studio](https://www.ibm.com/uk-en/cloud/watson-studio)

Speech-to-Text:
- [5 Best Speech-to-Text APIs](https://nordicapis.com/5-best-speech-to-text-apis/)
- [React Native Voice tutorial]()
<!-- Insert React Native Voice tutorial here -->

OCR (Optical Character Recognition):
- [5 Best OCR APIs & Software](https://rapidapi.com/blog/top-5-ocr-apis/amp/)
- [TAGGUN - Real-time Receipt OCR API for developers](https://www.taggun.io/)

### What went well

### What could have gone better

We originally setup the project with the Expo CLI and decided to switch to the React Native CLI.
<!-- Include reasons why here -->
Expo setup resources:
- [React Native with Expo](https://facebook.github.io/react-native/docs/getting-started)
- [Android Studio Emulator](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/)
To make the switch we had to complete a [hard uninstall](https://stackoverflow.com/questions/17625622/how-to-completely-uninstall-android-studio-on-mac) of Android Studio and then follow the [setup resources above](#learning-resources).
