import React, { Component } from 'react';
// import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';


function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p></div>
    </div>
  );
}

function Book({title}){
return (<div className="answer">
<h4>{title}</h4></div>)
}

function Turn({author,books}){
  return (
  <div className="row turn" style={{backgroundColor:"White"}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="author">
      </img>
    </div>        
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} />)}

    </div>

  </div>);
}
function Continue(){
  return (<div>Continue</div>);
}
function Footer(){
  return (<div className="row">
  <p className="text-muted credit">All images are from <a target="_blank" href="https://commons.wikimedia.org/wiki/Main_Page">Wvikemedia Commons</a> and are in the pubic domain</p>
  </div>);
}
function AuthorQuiz({turnData}) {
    return (
    
      <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer></Footer>
      </div>
    );
  
}

export default AuthorQuiz;
