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
      value:'',
      searchBooksArr:[]
    }
  }

  searchBooks = (query) => {
    if (query !== '') {
      BooksAPI.search(query)
        .then(books => {
          if (books.error  ||books === undefined) {//when error occurs
            console.log("Error occurs");
            this.setState({ books: [] });
          } 
          
          books=books.map((book)=>{
            const bookInShelf = this.props.books.find(b=>b.id===book.id);

            if(bookInShelf){
              book.shelf=bookInShelf.shelf;
            }
            return book;
          })

          this.setState({searchBooksArr:books})
        
          //Display message in search page. Depends on the search result!
          if(this.state.searchBooksArr.length > 0){
            this.setState({ message: '-- Result --' })
          }
          
      });
    }else {//query.length equal to 0 or less than 0
        console.log("when query.length equal to 0 or less than 0: "+query)
        this.setState({ searchBooksArr: [] });
        this.setState({ message: '-- Search books that you want to read! --' })
    }
  };

  // function that uses BooksAPI search method
  handleChange=event=>{
    const val = event.target.value;
    this.setState({ value: val })
    
    //this.searchBooks(val)
    //This will make sure that the API call is made with a delay after the user has stopped typing in the input field
    setTimeout(() => {                     
      this.searchBooks(this.state.value)
    }, 300)

    //Display this message when there is no match and no found books! 
    if(this.state.searchBooksArr.length <= 0){
      this.setState({ message: '-- No book found --' })
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
                   <Result key={book.id} book={book} changeBookShelf={this.props.changeBookShelf}/>
                  ))}
              </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch;