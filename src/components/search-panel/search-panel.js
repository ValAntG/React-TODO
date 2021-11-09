import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <input
        type="text"
        placeholder="type to search"
        onChange={onSearch}
        className="search-input form-control"
      />
    );
  }
}
