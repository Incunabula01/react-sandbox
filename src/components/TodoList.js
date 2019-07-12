import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import './todolist.scss';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.manageTasks = this.manageTasks.bind(this);
    }

    deleteTasks(key) {
        this.props.delete(key);
    };

    manageTasks(key) {
        this.props.itemDone(key);
    };

    createTasks(items) {
        return  <li className={items.taskDone ? 'item-done' : ''} key={items.key}>
                    <span className="action-button" onClick={()=> this.manageTasks(items.key)} ><FontAwesomeIcon icon={items.taskDone ? "check" : "check-square"}/></span>
                    {items.text}
                    <span className="action-button" onClick={() => this.deleteTasks(items.key)}><FontAwesomeIcon icon="trash"/></span>
                </li>;
    };


    render() {
        let todoItems = this.props.items;
        let listItems = todoItems.map(this.createTasks);

        return(
            <div className="TodoList">
                <ul>
                    <FlipMove duration={250} easing="ease-out" enterAnimation="accordionVertical">
                        {listItems}
                    </FlipMove>
                </ul>
            </div>
        )
    }
}


export default TodoList;