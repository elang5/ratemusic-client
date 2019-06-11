# Ratemusic Client 

(https://elan-ratemusic.netlify.com/)

## What is Rate Music?

This is an app that allows users to view aggregated album scores and to review albums, using Spotify's Web API to provide thousands of albums to be reviewed that can easily be listened to. 

## Setting Up

- Install Dependencies: `npm install`

## Screenshots
![Image of Landing Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/landing.png)

The landing page will walk you through the basis of the app, i.e. how to set up account, search for albums, and so on.

![Image of Albums Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/albums.png)

The albums page shows all of the albums which have a review stored in the database. When you search for an album, these albums will temporarily be replaced with the search results, whcih you can then click on to post a review, read other user's reviews, or listen to the album.

![Image of Register Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/register.png)

The registration page utilizes basic validation for password entry, ensuring it is at least 8 characters in length, including an uppercase letter, number, and special character. Upon successful registration, you will be taken to the login page. 

![Image of Login Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/login.png)

Upon successful login, you will be taken to the albums list page. 

![Image of Review List Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/reviewlist.png)

Clicking on an album will take you to an album's list of reviews. A link to listen to the album on Spotify appears at the top, along with a button to post a review. 

![Image of Review Page](https://github.com/elang5/ratemusic-client/tree/master/src/img/review.png)

The review page, similar to the review list page, has a link to listen to the album on Spotify. 

## Tech Stack
* React
* Spotify Web API JS
* JWT Decode
* Enzyme
* Font Awesome

## Scripts

-Start the application for development: `npm start`
-Run development tests: `npm test`
