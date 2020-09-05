import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'


        const SHELVES = [
            {
              title: 'Currently Reading',
              id: 'currentlyReading'
            },
            {
              title: 'Want To Read',
              id: 'wantToRead'
            },
            {
              title: 'Read',
              id: 'read'
            }
          ];

        const BookList =({allBooks,changeBookShelf}) =>(
            <div>
                {/*Disaply shelves*/}
                {SHELVES.map(({ title, id})=>(
                     <BookShelf 
                     key={id}
                     title={title}
                     allBooks={allBooks.filter(book => book.shelf === id)}
                     changeBookShelf={changeBookShelf}
                 />
                ))}
               
                {/*This link will only show up in main page*/}
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>

        )
    
export default BookList;