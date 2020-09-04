import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
//import ReactDOM from 'react-dom'
import Result from './Result'

class BookSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      message:'',
      showResult:false, //did you find the result?
      value:''
    }
  }

  handleChange=event=>{
    const val = event.target.value;
    this.setState({ value: val })
    
    //call this search() method here!
    this.props.searchBooks(val)

    //Just to check
    console.log("value : "+val)

    //Display message in search page. Depends on the search result!
    if(this.props.searchBooksArr.length <= 0){
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
              <button></button>
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {/*Display search result!*/}
                  {this.props.searchBooksArr.map(book=>(
                    <Result book={book} changeBookShelf={this.props.changeBookShelf}/>))}
              </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch;