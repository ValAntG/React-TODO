import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  render() {
    const { changeTypeSearch, typeSearch } = this.props;

    let classNames = "btn btn-outline-secondary";

    if (typeSearch) {
      classNames += " btn-info";
    }

    return (
      <div className="btn-group">
        <button
          type="button"
          className={classNames}
          onClick={() => changeTypeSearch("All")}
        >
          All
        </button>
        <button
          type="button"
          className={classNames}
          onClick={() => changeTypeSearch("Active")}
        >
          Active
        </button>
        <button
          type="button"
          className={classNames}
          onClick={() => changeTypeSearch("Passive")}
        >
          Passive
        </button>
      </div>
    );
  }
}
