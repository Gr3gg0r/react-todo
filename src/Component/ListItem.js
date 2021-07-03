import React from "react";

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      edit: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEditing = this.handleEditing.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleChange(e) {
    this.props.checkComplete(e.target.checked, this.props.id);
  }

  handleClick() {
    this.props.removeItem(this.props.id);
  }

  handleEditing(e) {
    this.setState({
      edit: true,
      value: this.props.item.title,
    });
  }

  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleBlur(e) {
    this.setState({
      edit: false,
    });
  }

  handleKey(e) {
    if (e.key === "Enter") {
      this.props.updateTodo(this.state.value);
      this.setState({
        edit: false,
      });
    }
    if (e.key === "Escape") {
      this.setState({
        edit: false,
      });
    }
  }

  render() {
    return (
      <li
        className={
          (this.props.item.completed ? "completed" : "",
          this.state.edit ? "editing" : "")
        }
      >
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.item.completed}
            onChange={this.handleChange}
          />
          <label onClick={() => this.handleEditing()}>
            {this.props.item.title}
          </label>
          <button
            className="destroy"
            onClick={() => this.handleClick()}
          ></button>
        </div>
        {this.state.edit ? (
          <input
            className="edit"
            value={this.state.value}
            onChange={this.handleInput}
            onBlur={this.handleBlur}
            onKeyDown={this.handleKey}
          />
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default ListItem;
