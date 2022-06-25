import React from "react";

const List = (props) => {
    const { novels, search } = props

    return (
        <ul style={{listStyleType: 'none', padding: 0, marginTop: 40}}>
            {novels
                .filter((book) => { return book.title.toLowerCase().includes(search.toLowerCase()) })
                .map((book) => { return <li style={{margin: 10}}>{book.title} by {book.author.nameFirst} {book.author.nameLast}</li> }) }
        </ul>
    )
}

export default List