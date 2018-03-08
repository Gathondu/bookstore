const React = require('react');

const Book = (props) => {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.author}</div>
            <div>{props.read_time}</div>
        </div>
    );
};

export default Book;
