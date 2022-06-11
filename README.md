# Spellcaster

## Overview

Spellcaster is an application that allows a user to browse through a list of spells from the 5th Edition of Dungeons and Dragons, click on the spell "cards", and view spell details, such as name, casters, components, description, casting time, range, and school. The User can also favorite spells for easier reference for their most used spells.

## Deployed Page

You can access deployed application [HERE!](https://spellcaster-react.herokuapp.com/)

## Technologies

- React
- React Router
- JavaScript
- HTML
- CSS
- Cypress

## Contributors

- [Jacob Lavarine](https://github.com/Jlavarine)


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Up

1. Start by going [here](https://github.com/Jlavarine/Spellcaster). From here you will want to click on the green rectangular button titled 'Code'. This should open a drop down menu where you should see a link. To the left of the link there should be an icon with two over lapping squares. You can click the icon to copy the link.
2. You will want to clone down the repo to you terminal using `git clone git@github.com:Jlavarine/Spellcaster.git`.
3. Once you have cloned the repo, change into the directory and install the project dependencies. Run `npm install` or `npm i` to install project dependencies.
4. Run `npm start` in the terminal to see the page. You will need to copy and paste the local server from the terminal and paste it into your browser. The local server should be simialiar to, "http://localhost:3000/". `Control + C` is the command to stop running the local server. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.

## Features

#### Homepage:
- On the homepage, the user can view all of the spells from Dungeons and Dragons 5th Edition.
- The user can click any spell to be redirected to that spell's details page.
![Home]()

#### Spell Details:
- On the spell details page, user is greeted with the clicked spell's details(such as name, casters, components, description, casting time, range, and school ).
- User can click on the home button to go back to the homepage, or the favorites button to go to the favorites page.
![Spell Details]()

#### Favorited Spells:
- On the  favorited spells page,  the user is greeted with all of their favorited spells.
- The user can click any spell to be redirected to that spell's details page.
- User can click on the home button to go back to the homepage.
![Favorited Spells]()

## Future Additions and Improvements

- Ability to delete a favorited spell
- Local storage/Backend to save favorites on page refresh
