import React, { Component } from "react";

import "./add-item-form.css";

export default class AddItemForm extends Component {
  render() {
    return (
      <form className="item-add-form d-flex">
        <input type="text" className="form-control" />
        <button
          className="btn btn-outline-secondary"
          onClick={() => this.props.addItem("Hello World")}
        >
          Add Item
        </button>
      </form>
    );
  }
}
