import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//SETUP VARS
import { bookVariable } from './books.js';
import Book from './Book.js';

//function
function BookList() {
  return (
    <section className="bookList" style={{ gap: "1rem" }}>
      {/*map é uma função que retorna todos os elementos de um array,
      logo, é passado "book" como parâmetro, pois é ele que recebe
      os valores e os trata, para que seja passado como uma proprie-
      dade da tag "Book"*/}
      {bookVariable.map((book) => {
        //retornando diretamente em uma propriedade de book
        // return <Book key={book.id} boozk={book}></Book>
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

