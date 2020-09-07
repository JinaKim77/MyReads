import React from 'react'
import './App.css'

class Button extends React.Component{

    
    handleChange = event => {
        const book = this.props.book
        const newShelf = event.target.value
    
        this.props.changeBookShelf(book, newShelf)         
    }

    
    render(){

        // <select value={this.props.book.shelf || 'none'}  onChange={this.handleChange} >
        const shelf = this.props.book.shelf ? this.props.book.shelf : "none"

        return(
            <div className="book-shelf-changer">
                {/*By default, the first not disabled option will be selected, which is "Currently Reading"
                   value={this.state.value} will be always undefined*
                   So value={this.props.book.shelf} */}
                <select value={shelf} onChange={this.handleChange} >
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