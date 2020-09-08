# MyReads Project - A book Tracking App

This is the starter template for the final assessment project for Udacity's React Fundamentals course. 
The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

This MyReads app allows users to manage books in three different shelves that are "Currently Reading" , "Want To Read" , "Read" and "none". Users can also search for new books and categorize them accordingly (The search page allows users to select their preferred shelf). Books that have not been assigned a shelf should have a checkmark next to "None". If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page.



## TL;DR

To get started developing right away:

* Clone or download the repo : https://github.com/JinaKim77/MyReads
* install all project dependencies with `npm install`
* start the development server with `npm start`
* Navigate to http://localhost:3000/ on your browser.



## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BookList.js # This is used to initiate shelves array for title and id and map with filter(with condition)
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookSearch.js # This is used to searh books, handle input changes and display message in search page. Depends on the search result!
    ├── BookShelf.js # This is used to display each shelf (three shelves) and their contents.
    ├── Button.js # This is used to handle changes (selection of book shelves)
    ├── Button.js # This is used to display the search result 
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.


### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request


### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Contributing

This repository is the starter code for _all_ Udacity students. 

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
