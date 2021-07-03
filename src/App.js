import "./App.css";
import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Section from "./Component/Section";
import ListItem from "./Component/ListItem";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "First Task",
          completed: false,
        },
      ],
      filteredItems: true,
      filterAll: true,
      status: "all",
    };

    this.todoChange = this.todoChange.bind(this);
    this.todoSubmit = this.todoSubmit.bind(this);
    this.checkComplete = this.checkComplete.bind(this);
    this.filter = this.filter.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  removeItem(key) {
    const items = this.state.items;
    const new_items = items.filter((item, index) => index !== key);
    this.setState({
      items: new_items,
    });
  }

  markAllComplete() {
    const items = this.state.items;
    const complete = items.map((item) => {
      return { title: item.title, complete: true };
    });
    this.setState({
      items: complete,
      filterItems: complete,
    });
  }

  clearCompleted() {
    const items = this.state.items;
    const clearCompleteItems = items.filter((item) => {
      return item.completed === false;
    });
    this.setState({
      items: clearCompleteItems,
    });
  }

  /**
   * Filter the status of the todo item.
   *
   * @param {string} status filter by status
   */
  filter(status) {
    let filterItems = true;
    let allItems = false;
    if (status === "completed") {
      filterItems = true;
    } else if (status === "active") {
      filterItems = false;
    } else {
      allItems = true;
    }
    this.setState({
      status: status,
      filteredItems: filterItems,
      filterAll: allItems,
    });
  }

  /**
   * Submit todo form.
   * @param {Object} value the updated object
   */
  todoSubmit(value) {
    this.setState({
      items: this.state.items.concat([value]),
    });
  }

  /**
   * Handle input change of the input fields
   * @param {Event} event
   */
  todoChange(event) {
    this.setState({ enterTodo: event.target.value });
  }

  updateTodo(value, id) {
    const items = this.state.items;
    items[id].title = value;
    this.setState({
      items: items,
    });
  }

  /**
   * Handle the todo check box.
   *
   * @param {bool} checked
   * @param {number} key
   */
  checkComplete(checked, key) {
    const items = this.state.items;
    items[key].completed = checked;
    this.setState({
      items: items,
    });
  }

  /**
   * Check all task to comple
   * @param {bool} checked
   */
  checkAll(checked) {
    const items = this.state.items;
    const checkItems = items.map((item) => {
      return { title: item.title, completed: checked };
    });
    this.setState({
      items: checkItems,
      filterItems: checkItems,
    });
  }

  render() {
    return (
      <div className="todoapp">
        <Header todoSubmit={(value) => this.todoSubmit(value)} />
        <Section checkAll={(checked) => this.checkAll(checked)}>
          {this.state.items
            .filter(
              (item) =>
                item.completed === this.state.filteredItems ||
                this.state.filterAll
            )
            .map((item, key) => {
              return (
                <ListItem
                  key={key}
                  id={key}
                  item={item}
                  checkComplete={(checked, id) =>
                    this.checkComplete(checked, id)
                  }
                  removeItem={(id) => this.removeItem(id)}
                  updateTodo={(value) => this.updateTodo(value, key)}
                />
              );
            })}
        </Section>
        <Footer
          status={this.state.status}
          items={this.state.items}
          filter={(status) => this.filter(status)}
          clearCompleted={() => this.clearCompleted()}
        />
      </div>
    );
  }
}

export default App;
