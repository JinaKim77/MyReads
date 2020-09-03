import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import BookSearch from './BookSearch.js'

//Main page -- keep it simple in this page
class BooksApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    }
  }//end of consturctor

  // Get the book data when the component loads
  componentDidMount(){
    BooksAPI.getAll()
      .then((data)=>{
        this.setState({books:data})
    })
  }

 //update function to handle changing the shelf of the book
 changeBookShelf=(book,shelf)=>{

  //change the shelf
  //BooksAPI.update(book,shelf);
  console.log('Clicked!');
  if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
    
  BooksAPI.update(book,shelf);  
  
  //Now update the book array in the state
  BooksAPI.getAll()
    .then(data=>
      this.setState({books:data}) 
  )
}


  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <Route
          exact path='/'
          render={ ()=>(
            <BookList 
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
            /> //render BookList Component, to do that you need to import BookList component
          )}
        />

        <Route
          path='/search'
          render={()=>(
            <BookSearch 
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
            /> //render BookList Component, to do that you need to import that component
          )}
        />
          
        </div>
      </div>
    )//end of return
  }//end of render()
}//end of App component

  export default BooksApp;