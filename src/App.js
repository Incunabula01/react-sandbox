import React, { Component } from 'react';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAward, faFlask, faTrash, faPlus, faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


import Navigation from './components/Navigation';
import TodoList from './components/TodoList';



const LINKS = [
  { label: 'Home', 
    to: 'http://www.jwidenerdesign.com', 
    icon: 'home' },
  { label: 'Twitter',
    to :'https://www.twitter.com', 
    icon: ['fab', 'twitter'] },
  { label: 'LinkedIn', 
    to: 'https://www.linkedin.com', 
    icon: ['fab', 'linkedin']}
];

library.add(faHome, faAward, faFlask, faTrash, faPlus, faCheck, faCheckSquare, faLinkedin, faTwitter);



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        // These deal with "this" being undefined
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.itemDone = this.itemDone.bind(this);

    }

    componentDidMount() {
        this.loadStateWithLocalStorage();

        window.addEventListener("beforeunload", this.saveStateToLocal.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.saveStateToLocal.bind(this));

        this.loadStateWithLocalStorage();
    }

    addItem(event) {
        if(this._inputElement.value !== ''){
            let newItem = {
                text: this._inputElement.value,
                key: `${Date.now()}__${Math.random() + 1}`,
                taskDone: false
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

  itemDone(currentKey) {

        let updatedItems = [];

        this.state.items.forEach((items) => {
            if(items.key === currentKey){
               items.taskDone = !items.taskDone;
            }
            updatedItems.push(items);
        });

      this.setState({
          items: updatedItems
      });
  }

  loadStateWithLocalStorage() {
        for(let key in this.state) {
            if(localStorage.hasOwnProperty(key)){
                let value = localStorage.getItem(key);

                try{
                    value = JSON.parse(value);
                    this.setState({[key]: value});
                } catch (e) {
                    window.alert(e);
                    this.setState({[key]: value});
                }
            }
        }
  }

  saveStateToLocal() {
        for(let key in this.state) {
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <FontAwesomeIcon icon="award" size="lg"/>
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
                           delete={this.deleteItem}
                           itemDone={this.itemDone}
                />
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
