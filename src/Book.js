import React from 'react'

const Book = (props) => {
 const clickHandler = () => {
  alert('hello world');
 };
 const { img, title, author } = props;
 return (
  <article className="book">
   <img
    src={img}
    alt=""
    onClick={clickHandler}
   />
   <h1 onClick={() => alert('h1')}>{title}</h1>
   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }} onMouseOver={() => console.log('heyy')}> {author}</ h4 >
  </article >
 );
};

export default Book;
