import React from "react";
import TodoListItem from "../todo-list-item";

import "./todo-list.css";

const TodoList = ({
  todos,
  searchValue,
  searchType,
  onDeleted,
  onToggleField,
}) => {
  const searchByType = todos.filter(function (el) {
    return (
      (searchType == "Active" && !el.done) ||
      (searchType == "Passive" && el.done) ||
      searchType == "All"
    );
  });

  const searchByValue = searchByType.filter(function (el) {
    return el.label.toLowerCase().search(searchValue.toLowerCase()) !== -1;
  });

  const elements = searchByValue.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleField(id, "done")}
          onToggleImportant={() => onToggleField(id, "important")}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
