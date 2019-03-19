import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
	<div className="container">
	   <div className="row">
	     <div className="col-lg p-down  bg-dark text-white-50">
               <h1>Books I am Reading</h1>
             </div>
	   </div>
	</div>

	<div class="container">
	  <div class="row">
	    <div class="col-4 bg-primary text-white">TITLE</div>
	    <div class="col-4 bg-secondary text-white-50">PROGRESS</div>
	    <div class="col-4 bg-dark text-white">AUTHOR</div>
          </div>
          <Books />
        </div>
      </div>
    );
  }
}

class Book extends React.Component {
    percentageBook(page, total){
	var percentage = (page/total)*100;
	return percentage.toFixed(1);
    }

    render() {
	return (
	<div class="row book">
		<div class="col-4 bg-title">
          <div class="name">
            <p>{this.props.title}</p>
          </div>
        </div>
		<div class="col-4 bg-progress">
		{this.percentageBook(this.props.currentPage, this.props.totalPages)}%
		<div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
            style={{ width: this.percentageBook(this.props.currentPage, this.props.totalPages) + "%" }}
              aria-valuenow={this.props.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div class="col-4 bg-author">
          <div class="name">
            <p>{this.props.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

const BooksTest = {
    1: {
	title: "COMMON LISP: A Gentle Introduction to Symbolic Computation",
	progress: 5,
	author: "David S. Touretzky",
	currentPage: 31,
	totalPages: 587,
    },
    2: {
	title: "The Joy of Clojure",
	progress: 20,
	currentPage: 83,
	totalPages: 311,
	author: "Michael Fogus, Chris Houser"
    },
    3: {
	title: "Discipline and Punish",
	progress: 80,
	currentPage: 203,
	totalPages: 333,
	author: "Michael Foucalt"
    },
    4: {
	title: "Go Programming Blueprints",
	progress: 20,
	currentPage: 139,
        totalPages: 385,
	author: "Mat Ryer"
    },
    5: {
	title: "Express in Action",
	progress: 20,
	currentPage: 85,
	totalPages: 258,
	author: "Evan Hahn"
    }
};

class Books extends React.Component {
  _renderObject() {
    return Object.entries(BooksTest).map(([key, value], i) => {
      return (
        <Book
          key={key}
          title={value.title}
          progress={value.progress}
	  currentPage={value.currentPage}
	  totalPages={value.totalPages}
	  author={value.author}
        />
      );
    });
  }
  render() {
    return <div>{this._renderObject()}</div>;
  }
}


export default App;
