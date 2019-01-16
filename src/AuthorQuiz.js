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

function Turn({author,books,highlight}){
  function highlistToBgColor(highlight){
    const mapping = {
      'none':'','correct': 'green', 'wrong': 'red'
    };
    return mapping[highlight];
  }
  return (
  <div className="row turn" style={{backgroundColor:highlistToBgColor(highlight)}}>
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

class EvenCounter extends React.Component{
  constructor (props){
    super(props);
    this.state = {clicks:0};
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){
    const clicksNew = this.state.clicks +1;
    this.setState({clicks:clicksNew});
    if(clicksNew % 2 ===0){
      this.props.onEventClick(clicksNew);
    }
  }
  render(){
    return <div onClick={this.clickHandler}>
    This div has been clicked {this.state.clicks} times.</div>
  }
}

function AuthorQuiz({turnData, highlight}) {
    return (
    
      <div className="container-fluid">
     
       
      <Hero />
      <Turn {...turnData} highlight={highlight} />
      <Continue />
      <Footer></Footer>
      <h2>A bit of extra fun</h2>
      <EvenCounter onEventClick={(data) =>{
       console.log(`even number ${data}`)}} />
      </div>
    );
  
}

export default AuthorQuiz;
