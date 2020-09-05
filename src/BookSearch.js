import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Result from './Result'

class BookSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      message:'',
      showResult:false, //did you find the result?
      value:'',
      searchBooksArr:[] 
    }
  }

  searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(books => {
          if (books.error) {//when error occurs
            this.setState({ searchBooksArr: [] });
          } else {
            console.log("check query 1: "+query)
            console.log("check searchBooksArr : "+this.state.searchBooksArr)

            //before updating the state, check if the search result is from the latest search query
            this.setState({ searchBooksArr: books });
          }
      });
    }else {//query.length equal to 0 or less than 0
        console.log("check query 2: "+query)
        this.setState({ searchBooksArr: [] });
    }
  };


  handleChange=event=>{
    const val = event.target.value;
    this.setState({ value: val })
    
    //call this search() method here!
    this.searchBooks(val)

    //Just to check
    console.log("value : "+val)

    //Display message in search page. Depends on the search result!
    if(this.state.searchBooksArr.length <= 0){
      this.setState({ message: 'Sorry, no book found, try again!' })
    }else{
      this.setState({ message: 'Search books that you want to read!' })
    }
  }


    render(){
        return(
            <div className="search-books">
              <h1>{this.state.message}</h1>
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {/*Display search result!*/}
                  {this.state.searchBooksArr.map(book=>(
                    //a unique key prop should be provided for each list item
                    //This allows React to efficiently keep track of changes in the list.
                    <Result key={book.id} book={book} changeBookShelf={this.props.changeBookShelf}/>))}
              </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch;