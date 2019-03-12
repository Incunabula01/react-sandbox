import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

import './todolist.scss';

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    deleteTasks(key) {
        this.props.delete(key);
    };

    createTasks(items) {
        return <li key={items.key}>{items.text} <span className="delete-button" onClick={() => this.deleteTasks(items.key)}><FontAwesomeIcon icon="trash"/></span></li>
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