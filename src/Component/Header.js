import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enterTodo: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const value = {
      title: this.state.enterTodo,
      completed: false,
    };
    this.setState({ enterTodo: "" });
    this.props.todoSubmit(value);
  }

  handleOnChange(event) {
    const inputValue = event.target.value;
    if (inputValue) this.setState({ enterTodo: inputValue });
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={this.state.enterTodo}
            onChange={this.handleOnChange}
          />
        </form>
      </header>
    );
  }
}

export default Header;
