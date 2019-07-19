import React, { Component } from 'react';

import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import TodoList from './TodoList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const toDoListTheme = createMuiTheme({
    palette:{
        primary: {
            main: '#00bcd4',
            contrastText: '#FFF'
        },
        secondary: {
            main: '#ff3d00',
            contrastText: '#fff'
        }
    }
});

class TodoContainer extends Component {
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

    addItem(event) {
        if(this._inputElement.value !== '' || this.event.key === 'Enter'){
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

    componentDidMount() {
        this.loadStateWithLocalStorage();

        window.addEventListener("beforeunload", this.saveStateToLocal.bind(this));
        window.addEventListener("keyUp", this.addItem.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.saveStateToLocal.bind(this));
        window.removeEventListener("keyUp");
        this.loadStateWithLocalStorage();
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
            <ThemeProvider theme={toDoListTheme}>
                <Container maxWidth="sm">

                    <FormControl>
                        <form action="submit"  onSubmit={this.addItem} className="input-section">
                            <Input placeholder="Enter a Task"  aria-describedby="Enter a Task"
                                   inputRef={(a) => this._inputElement = a} type="text"/>
                            <Button color="secondary"  type="submit" size="small">
                                <FontAwesomeIcon icon="plus"/>
                            </Button>
                        </form>
                    </FormControl>


                    <TodoList  items={this.state.items}
                               delete={this.deleteItem}
                               itemDone={this.itemDone}
                    />
                </Container>
            </ThemeProvider>
        );
    }
}

export default TodoContainer;
