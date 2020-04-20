PWA Budget Tracker
Overview
A PWA Budget Tracker application to allow for offline access and functionality. This app utilizes Service Workers and Cache APIs to cache assets and API responses to ensure this app works without an internet connection. If offline the Budget Tracker will still function normally, then when an online connection is established, it makes api calls to update the database with info added while offline. This app is built using a Mongo database with a Mongoose schema and handle routes with Express.

Utilizing the App
Experience the deployed app on Heroku: [Here](https://nmcconnell-budgettracker.herokuapp.com/ "Here")

When the user loads the page, they are given the option to add or subtract an expense.

The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.

The chart below will update as the user adds more deposits to their list.

Offline Functionality:

Enter deposits offline
Enter expenses offline
When brought back online:

Offline entries are added to tracker.
Demonstration
Landing Page
homepage

When App is Brought Back Online
online

Tech used
HTML
CSS
Bootstrap
Javascript
Node.js
Express
MongoDB
Mongoose
Robo 3T
Service Worker
IndexDB
Webmanifest
