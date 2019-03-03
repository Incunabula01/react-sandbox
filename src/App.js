import React, { Component } from 'react';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAward, faFlask, faTrash } from '@fortawesome/free-solid-svg-icons';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';

import logo from "./logo.svg";

const LINKS = [
  { label: 'Home', to: 'http://www.jwidenerdesign.com', icon: 'home' },
  { label: 'Twitter',  to :'https://www.twitter.com', icon: 'flask' },
  { label: 'LinkedIn', to: 'https://www.linkedin.com', icon: 'award'}
];

const TODO_ITEMS = [
    {id: 1, item: 'Ommpa Loompa'},
    {id: 2, item: 'Huzzah'},
    {id: 3, item: 'wheeeeee!!' }
];

library.add(faHome, faAward, faFlask);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>React To Do List</h1>
          </div>

          <Navigation links={LINKS}/>
        </header>
        <section className="App-content">
            <TodoList items={TODO_ITEMS}/>
        </section>
       <footer className="App-footer">
         {/*Put footer stuff here*/}
       </footer>
      </div>
    );
  }
}

export default App;
