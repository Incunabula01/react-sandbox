import React, { Component } from 'react';

import './App.scss';

import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";


import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAward, faFlask, faTrash, faPlus, faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


import Navigation from './components/Navigation';
import TodoContainer from './components/TodoContainer';
import Calendar from './components/Calendar';


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
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         items: []
    //     };
    //
    //     // These deal with "this" being undefined
    //     this.addItem = this.addItem.bind(this);
    //     this.deleteItem = this.deleteItem.bind(this);
    //     this.itemDone = this.itemDone.bind(this);
    //
    // }




  //   addItem(event) {
  //       if(this._inputElement.value !== '' || this.event.key === 'Enter'){
  //           let newItem = {
  //               text: this._inputElement.value,
  //               key: `${Date.now()}__${Math.random() + 1}`,
  //               taskDone: false
  //           };
  //           this.setState((prevState) => {
  //               return {
  //                   items: prevState.items.concat(newItem)
  //               };
  //           });
  //       }
  //
  //       this._inputElement.value = '';
  //       console.log(this.state.items);
  //
  //     event.preventDefault();
  // }
  //
  //
  // deleteItem(key)  {
  //      let filteredItems = this.state.items.filter((items) => {
  //          return (items.key !== key)
  //      });
  //
  //      this.setState({
  //          items: filteredItems
  //      });
  // }
  //
  // itemDone(currentKey) {
  //
  //       let updatedItems = [];
  //
  //       this.state.items.forEach((items) => {
  //           if(items.key === currentKey){
  //              items.taskDone = !items.taskDone;
  //           }
  //           updatedItems.push(items);
  //       });
  //
  //     this.setState({
  //         items: updatedItems
  //     });
  // }



  render() {
    return (
          <div className="App">
            <header className="App-header">

                <AppBar position="static">
                    <Toolbar>
                        <FontAwesomeIcon icon="award" size="lg"/>
                        <Typography variant="h4" >
                            To Do List
                        </Typography>
                        <Navigation links={LINKS}/>
                    </Toolbar>
                </AppBar>

            </header>
            <section className="App-content">
                <Calendar/>
                <TodoContainer/>
            </section>
           <footer className="App-footer">
             {/*Put footer stuff here*/}
           </footer>
          </div>
    );
  }
}

export default App;
