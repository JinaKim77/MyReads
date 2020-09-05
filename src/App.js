import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BookList from './BookList.js'
import BookSearch from './BookSearch.js'

//parent component 
class BooksApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [] 
    }
  }//end of consturctor

  // Get the book data when the component loads
  // Get all books when app is loaded in browser
  componentDidMount(){
    BooksAPI.getAll()
      .then((data)=>{
        this.setState({books:data})
    })
  }

 //update function to handle changing the shelf of the book
 changeBookShelf=(book,shelf)=>{
    
    //to save the changes done to the shelves
    //when shelves are updated it is mantained even after refresh
    BooksAPI.update(book,shelf);

    if(shelf !== 'none'){
        console.log("shelf is not none");
        //book.shelf = shelf;
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id)
            //concatenating book to the state.books
            .concat({ ...book, shelf }) //add the book with the updated shelf value
        }));
        console.log(book.shelf);
    }else{ //shelf==='none'
        console.log("shelf is none");
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id)
        }));
    }

}//end of this method

  render() {
    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
        <Route
          exact path='/'>
            <BookList  //To render something when a route is matched, we can also pass it as a child. 
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
            /> 
        </Route>

        <Route
          path='/search'>
            <BookSearch  //To render something when a route is matched, we can also pass it as a child. 
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
            /> 
        </Route>
          
        </div>
      </div>
    )
  }
}

  export default BooksApp;