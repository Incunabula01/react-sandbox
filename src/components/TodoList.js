import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './todolist.scss';

const TodoList = ({ items }) => (
    <div className="TodoList">
        <ul>{ items.map( items => (
                <li id={items.id} key={items.id}>
                    {items.item}
                    <FontAwesomeIcon icon="trash"/>
                </li>
                ))
            }
        </ul>
    </div>
)

export default TodoList;