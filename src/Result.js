import React from 'react'
import Button from './Button'

class Result extends React.Component{

    render(){
       const {book,shelf}  = this.props;
        
       return (
         <li>
           <div className="book">
             <div className="book-top">
               <div
                 className="book-cover"
                 style={{
                   width: 128,
                   height: 193,
                   //backgroundImage: `url(${book.imageLinks.thumbnail})`
                   backgroundImage: `url(${book.hasOwnProperty("imageLinks")? book.imageLinks.thumbnail: ""})`}}
               />
               <Button book={this.props.book} 
                       shelf={shelf} 
                       allBooks={this.props.books}
                       changeBookShelf={this.props.changeBookShelf}/>
             </div>
             <div className="book-title">Book title : {book.title}</div>
             <div className="book-authors">Author : {book.authors ? book.authors.join(', ') : 'Unknown Author'}</div>
             <div className="book-authors">Shelf : {book.shelf}</div>
           </div>
         </li>
       );
       
     }

}
export default Result
                        