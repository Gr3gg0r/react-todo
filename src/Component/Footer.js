import React from "react";

function Footer(props) {
  function handleClick(event, status) {
    event.preventDefault();
    props.filter(status);
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        {props.items.filter((item) => item.completed === false).length} Items
        Left
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={props.status === "all" ? "selected" : ""}
            onClick={(e) => handleClick(e, "all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={props.status === "active" ? "selected" : ""}
            onClick={(e) => handleClick(e, "active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={props.status === "completed" ? "selected" : ""}
            onClick={(e) => handleClick(e, "completed")}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => props.clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
