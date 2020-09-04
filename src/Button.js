import React from 'react'
import './App.css'

class Button extends React.Component{

    state={
        value: this.props.shelf
    }
    
    handleChange = event => {
        const book = this.props.book
        const newShelf = event.target.value

        this.setState({
            value: newShelf
        })
    
        this.props.changeBookShelf(book, newShelf)         

        //Just to check the selected value from the user
        console.log("value:"+newShelf)
    }

    
    render(){
        return(
            <div className="book-shelf-changer">
                {/*By default, the first not disabled option will be selected, which is "Currently Reading"
                   value={this.state.value} will be always undefined*
                   So value={this.props.book.shelf} */}
                <select value={this.props.book.shelf} onChange={this.handleChange} >
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