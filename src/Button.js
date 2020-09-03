import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Button extends React.Component{

    state={
        shelf:this.props.shelf,
        book:this.props.id
    }
    
    render(){
        return(
            <div className="book-shelf-changer">
                <select value={this.state.shelf} onChange={this.props.changeBookShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default Button