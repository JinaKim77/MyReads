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
      books: [],

      searchBooksArr:[]  
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
            books: state.books.filter((b) => b.id !== book.id).concat(book)
        }));
        console.log(book.shelf);
    }else{ //shelf==='none'
        console.log("shelf is none");
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id)
        }));
    }

    //get updated data
    //BooksAPI.getAll()
    // .then((data)=>{
    //  this.setState({books:data})
    //})

}//end of this method

searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(books => {
          if (books.error) {//when error occurs
            this.setState({ searchBooksArr: [] });
          } else {
            this.setState({ searchBooksArr: books });
          }
      });
    }else {//query.length equal to 0 or less than 0
        this.setState({ searchBooksArr: [] });
    }
  };

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
            /> //render BookList Component
          )}
        />

        <Route
          path='/search'
          render={()=>(
            <BookSearch 
              allBooks={this.state.books}
              changeBookShelf={this.changeBookShelf}
              searchBooks={this.searchBooks}
              searchBooksArr={this.state.searchBooksArr}
            /> //render BookList Component
          )}
        />
          
        </div>
      </div>
    )//end of return
  }//end of render()
}//end of App component

  export default BooksApp;