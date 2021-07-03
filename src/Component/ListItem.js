import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.props.checkComplete(e.target.checked, this.props.id);
  }

  handleClick() {
    this.props.removeItem(this.props.id);
  }

  render() {
    return (
      <li
        data-id={this.props.id}
        className={this.props.item.completed ? "completed" : ""}
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={this.handleChange}
          />
          <label>{this.props.item.title}</label>
          <button
            className="destroy"
            onClick={() => this.handleClick()}
          ></button>
        </div>
      </li>
    );
  }
}

export default ListItem;
