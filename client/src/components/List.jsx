import React from "react";

const List = (props) => {
    const { novels, search } = props

    return (
        <ul>
            {novels
                .filter((book) => { return book.title.toLowerCase().includes(search.toLowerCase()) })
                .map((book) => { return <li>{book.title} by {book.author.nameFirst} {book.author.nameLast}</li> }) }
        </ul>
    )
}

export default List