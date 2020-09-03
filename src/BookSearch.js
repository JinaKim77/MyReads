import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
//import ReactDOM from 'react-dom'

class BookSearch extends React.Component{

  constructor(props){
    super(props)

    this.state={
      message:'Search books that you want to read!',
      searched:false //is the user input something on the page?
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
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}
export default BookSearch;