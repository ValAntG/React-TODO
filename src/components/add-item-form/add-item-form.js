import React, { Component } from 'react';

import './add-item-form.css';

export default class AddItemForm extends Component {
  render() {
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItem('Hello World')}
        >
          Add Item
        </button>
      </div>
    );
  }
}
