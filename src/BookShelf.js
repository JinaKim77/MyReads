import React from 'react'
import './App.css'
import Button from './Button'

class BookShelf extends React.Component{
    
    render(){
        return(
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                    <ol className="books-grid">
                      {this.props.allBooks.map((book)=>(
                        <li key={book.id}>
                         <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
                                 style={{ width: 128, 
                                          height: 193, 
                                          //backgroundImage: `url(${book.imageLinks.thumbnail})`
                                          backgroundImage: `url(${book.hasOwnProperty("imageLinks")? book.imageLinks.thumbnail: ""})`}}>
                            </div>
                            <Button 
                                    changeBookShelf={this.props.changeBookShelf} 
                                    books = {this.props.books} 
                                    book={book}  //book should be passed for book props 
                            />
                          </div>
                          <div className="book-title">Book title : {book.title}</div>
                          <div className="book-authors">Author : {book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
                         </div>
                        </li>
                      ))}
                    </ol> 
                </div>
              </div>
            </div>
        )
    }

}
export default BookShelf