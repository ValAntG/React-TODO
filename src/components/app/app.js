import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import AddItemForm from '../add-item-form';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.maxId = 1;

    this.createItem = (label) => {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++,
      };
    };

    this.state = {
      todoData: [
        this.createItem('Drink Coffee'),
        this.createItem('Make Awesome App'),
        this.createItem('have a lunch'),
      ],
    };

    this.deletedItem = (id) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const newArray = [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1),
        ];

        return {
          todoData: newArray,
        };
      });
    };

    this.addItem = (text) => {
      this.setState(({ todoData }) => {
        const newArray = [...todoData, this.createItem(text)];
        return {
          todoData: newArray,
        };
      });
    };

    this.onToggleField = (id, field) => {
      this.setState(({ todoData }) => {
        const idx = todoData.findIndex((el) => el.id === id);
        const oldItem = todoData[idx];
        const newItem = { ...oldItem, [`${field}`]: !oldItem[field] };

        const newArray = [
          ...todoData.slice(0, idx),
          newItem,
          ...todoData.slice(idx + 1),
        ];

        return {
          todoData: newArray,
        };
      });
    };
  }

  render() {
    const doneCount = this.state.todoData.filter((el) => el.done).length;
    const toDoCount = this.state.todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deletedItem}
          onToggleField={(id, field) => this.onToggleField(id, field)}
        />
        <AddItemForm addItem={(text) => this.addItem(text)} />
      </div>
    );
  }
}
