import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import logo from './logo.svg';
import './AuthorQuiz.css';
import './bootstrap.min.css';

// Testing new UI tool for GIT

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1>
      <p>Select the book written by the author shown</p></div>
    </div>
  );
}

function Book({title,onClick}){
return (<div className="answer" onClick={()=>{onClick(title)}}>
<h4>{title}</h4></div>)
}

function Turn({author,books,highlight,onAnswerSelected}){
  function highlistToBgColor(highlight){
    const mapping = {
      'none':'','correct': 'green', 'wrong': 'red'
    };
    return mapping[highlight];
  }
  return (<div className="row turn" style={{backgroundColor:highlistToBgColor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="author">
      </img>
    </div>        
    <div className="col-6">
     {books.map((title) => <Book title={title} key={title}     onClick={onAnswerSelected} />)}
    </div>
  </div>);
}
Turn.propTypes = {
  author: PropTypes.shape({
    name : PropTypes.string.isRequired,
    imageUrl : PropTypes.string.isRequired,
    imageSource:PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books:PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected :PropTypes.func.isRequired,
  highlight:PropTypes.string.isRequired
};

function Continue(){
  return (<div>Continue</div>);
}
function Footer(){
  return (<div className="row">
  <p className="text-muted credit">All images are from <a target="_blank" href="https://commons.wikimedia.org/wiki/Main_Page">Wvikemedia Commons</a> and are in the pubic domain</p>
  </div>);
}

// class EvenCounter extends React.Component{
//   constructor (props){
//     super(props);
//     this.state = {clicks:0};
//     this.clickHandler = this.clickHandler.bind(this);
//   }
//   clickHandler(event){
//     const clicksNew = this.state.clicks +1;
//     this.setState({clicks:clicksNew});
//     if(clicksNew % 2 ===0){
//       this.props.onEventClick(clicksNew);
//     }
//   }
//   render(){
//    return <div onClick={this.clickHandler}>
//     This div has been clicked {this.state.clicks} times.</div>
//   }
//}

function AuthorQuiz({turnData, highlight,onAnswerSelected}) {
    return (
    
      <div className="container-fluid">
     
       
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <Footer></Footer>
     
      </div>
    );
  
}

export default AuthorQuiz;
