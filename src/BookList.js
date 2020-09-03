import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
import CurrentlyReadingComponent from './CurrentlyReadingComponent'
import WantToReadComponent from './WantToReadComponent'
import ReadComponent from './ReadComponent'

//Each shelf should be displayed, so let's say each shelf should be in a box for their books to be displayed separately
class BookList extends React.Component{

    render(){

        return(
            <div>
                {/*Disaply first shelf*/}
                <CurrentlyReadingComponent 
                    allBooks={this.props.allBooks.filter(book => book.shelf === 'currentlyReading')}
                    changeBookShelf={this.props.changeBookShelf}
                />

                {/*Display second shelf*/ }
                <WantToReadComponent 
                   allBooks={this.props.allBooks.filter(book => book.shelf === 'wantToRead')}
                   changeBookShelf={this.props.changeBookShelf}
                />

                {/*Display third shelf*/}
                <ReadComponent 
                    allBooks={this.props.allBooks.filter(book => book.shelf === 'read')}
                    changeBookShelf={this.props.changeBookShelf}
                />

                {/*This link will only show up in main page*/}
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }

}
export default BookList;