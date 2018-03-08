const React = require('react');
import Book from './Book';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book =>
                <Book {...book} />
            )}
        </div>
    );
};

export default BookList;
