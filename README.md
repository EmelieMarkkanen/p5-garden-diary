# Garden Diaries

## Milestone project 5 

Garden Diaries is an social networking platform designed specifically for avid hobby gardeners. With its user-friendly interface and comprehensive features, Garden Diaries offers a unique space for users to document and share their garden journeys through diary entries.

In addition to sharing their experiences, users can actively engage with the community by liking and commenting on posts. Garden Diaries provides a user-friendly "follow" feature, enabling users to effortlessly stay connected with their favorite content creators.

To keep their garden organized, Garden Diaries lets users to maintain an organized record of their plants. By uploading lists detailing information such as planting instructions, plant types, planting dates, and accompanying images, users can effortlessly track and monitor their garden.

Garden Diaries also offers convenient to-do and shopping lists. These practical tools lets users stay on top of their gardening tasks and effortlessly manage their shopping needs.

In summary, Garden Diaries is an all-encompassing platform that seamlessly integrates social networking and garden management.

Garden diaries is a fictional website created as a milestone project for Code Institutes fullstack developer course. 

![Garden Diaries main image](src/assets/Printscreens/Prntscrn.jpg)

## Live website
Link to live website [Garden Diaries](https://garden-diary.herokuapp.com/)

## Table of contents

- [Garden diaries](#garden-diaries)
- [Live website](#live-website)
- [Project](#project)
    - [Objective](#objective)
    - [Site user goal](#site-user-goal)
    - [Site owner goal](#site-owner-goal)
- [Project management](#project-management)
    - [Github project board, user stories, issues and milestones](#github-project-board-user-stories-issues-and-milestones)
    - [Wireframes](#wireframes)
- [Typography and color scheme](#typography-and-color-scheme)
    - [Typography](#typography)
    - [Color scheme](#color-scheme)
    - [Imagery](#imagery)
- [Features](#features)
    - [Existing features](#existing-features)
    - [Future features](#future-features)
- [Technology](#technology)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Other software and libraries](#other-software-and-libraries)
- [Testing](#testing)
    - [Automated tests](#automated-tests)
    - [Manual testing](#manual-testing)
        - [Browser test](#browser-test)
        - [Lighthouse](#lighthouse)
- [Deployment](#deployment)
    - [Github & Gitpod](#github--gitpod)
    - [Create a React project and app](#create-a-react-project-and-app)
    - [Heroku](#heroku)
- [Credits](#credits)

# Project

## Objective

## Site user goal

## Site owner goal

# Project management

## Github project board, user stories, issues and milestones

## Wireframes

# Typography and color scheme

## Typography
Font used throughout the website is Diphylleia, imported from [Google fonts](https://fonts.google.com/specimen/Diphylleia).

## Color scheme
Color scheme is made up of white and different green shades to match the project theme. 

## Imagery
Images are imported from [Pexels](https://www.pexels.com/). No result image is imported from [Sooraj MV on Dribbble](https://dribbble.com/shots/3399669-No-Results-Found). Logo is imported from [PNGEgg](https://www.pngegg.com/en/png-zfjmh). Favicon is generated from logo image through [Favicon generator](https://www.favicon-generator.org/). 


# Features

## Existing features

## Future features

### Profile image upload on sign up
User can add a profile image when signing up to Garden Diaries, instead of adding one after signing in the first time. 

### Thumbnail images for shopping list
User can upload an image that will be displayed as a thumbnail images next to the item name. 

### Image caching
Website performance on large screens could be enhanced by caching images, using for example a library like **Workbox**.

# Technology

## Languages

## Frameworks

## Other software and libraries

# Testing

## Automated tests
For this project I decided to focus on writing some automated tests for the components Asset, Avatar, JumboTron, MoreDropDown, NavBar, NotFound, PlantCard and TaskCard.

Tests are written using React testing library MSW. All tests can be found **[here](src/components/__tests__)**. Mock handlers and server setup can be found **[here](src/mocks/handlers.js)** and **[here](src/setupTests.js)**.

All automated tests have been run with npm and passed. 

## Manual testing

# Code validation

## Browser test

### JSX
JSX code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal. 

### CSS and React bootstrap
CSS and React bootstrap code have been manually validated and adjusted throughout development via direct feedback from npm in the terminal. 

## Lighthouse
Garden diaries have been tested using Chrome developer Lighthouse tester. Performance was quite impacted by large image sizes on all screen sizes, for signed in users, due to both post feed and profile avatars displaying. Performance was not impacted by the same issue on small and medium screens when signed out, due to profile avatar images not displaying for signed out users on these screen sizes. 

To fix this in the future a library like **Workbox** could be implemented for caching images.

![Lighthouse](src/assets/Printscreens/Lighthouse.jpg)


# Deployment

## Github and Gitpod

## Create a react project and app

## Heroku

# Credits







