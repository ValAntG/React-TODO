import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super();

    this.state = {
      button: 'All',
    };

    this.onLabelClick = (e) => {
      this.setState({
        button: e,
      });
    };
  }

  render() {
    const { button } = this.state;
    let classNames = 'btn btn-outline-secondary';

    if (button) {
      classNames += ' btn-info';
    }

    return (
      <div className="btn-group">
        <button
          type="button"
          className={classNames}
          onClick={() => this.onLabelClick('All')}
        >
          All
        </button>
        <button
          type="button"
          className={classNames}
          onClick={() => this.onLabelClick('Active')}
        >
          Active
        </button>
        <button
          type="button"
          className={classNames}
          onClick={() => this.onLabelClick('Passive')}
        >
          Passive
        </button>
      </div>
    );
  }
}
