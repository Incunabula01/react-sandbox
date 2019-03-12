import React, { Component } from 'react';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAward, faFlask, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';


import Navigation from './components/Navigation';
import TodoList from './components/TodoList';

import logo from "./logo.svg";

const LINKS = [
  { label: 'Home', to: 'http://www.jwidenerdesign.com', icon: 'home' },
  { label: 'Twitter',  to :'https://www.twitter.com', icon: 'flask' },
  { label: 'LinkedIn', to: 'https://www.linkedin.com', icon: 'award'}
];



library.add(faHome, faAward, faFlask, faTrash, faPlus);



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        // These deal with "this" being undefined
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

  addItem(event) {
        if(this._inputElement.value !== ''){
            let newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };

            });
        }

        this._inputElement.value = '';
        console.log(this.state.items);

      event.preventDefault();
  }

  deleteItem(key)  {
       let filteredItems = this.state.items.filter((items) => {
           return (items.key !== key)
       });

       this.setState({
           items: filteredItems
       });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>To Do List</h1>
          </div>

          <Navigation links={LINKS}/>
        </header>
        <section className="App-content">
            <div className="input-section">
                <form className="App" onSubmit={this.addItem}>
                    <input ref={(a) => this._inputElement = a} placeholder="Enter a task"/>
                    <button title="Add">
                        <FontAwesomeIcon icon="plus"/>
                    </button>
                </form>
            </div>
            <div className="list-section">
                <TodoList  items={this.state.items}
                            delete={this.deleteItem} />
            </div>
        </section>
       <footer className="App-footer">
         {/*Put footer stuff here*/}
       </footer>
      </div>
    );
  }
}

export default App;
