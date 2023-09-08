// The 48 Laws of Power
// Robert Greene

import React from "react";
import ReactDOM from "react-dom/client";
import books from "./books";
import Book from "./Book";
import "./index.css";


const BookList = () => {
  return (<>
    <h1>Amazon Best Sellers</h1>
    <section className="booklist">
      {books.map((book,index) => {
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>
    </>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
