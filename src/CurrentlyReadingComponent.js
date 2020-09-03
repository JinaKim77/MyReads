import React from 'react'
import './App.css'
import Button from './Button'

class CurrentlyReadingComponent extends React.Component{
    
    render(){
        return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                    <ol className="books-grid">
                      {this.props.allBooks.map((book)=>(
                        <li key={book.id}>
                         <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                            <Button allBooks={this.props.books}
                                    changeBookShelf={this.props.changeBookShelf} />
                         </div>
                          <div className="book-title">Book title : {book.title}</div>
                          <div className="book-authors">Author : {book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
                          <div className="book-authors">Shelf : {book.shelf}</div>
                        </li>
                      ))}
                    </ol> 
                </div>
              </div>
            </div>
        )
    }

}
export default CurrentlyReadingComponent