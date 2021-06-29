import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "shahfiq",
          completed: false,
        },
        {
          title: "Syima",
          completed: true,
        },
        {
          title: "Aliah",
          completed: false,
        },
        {
          title: "Ajam",
          completed: false,
        },
      ],
      filterItems:[],
      enterTodo: "",
      status: "all",
    };

    this.todoChange = this.todoChange.bind(this);
    this.todoSubmit = this.todoSubmit.bind(this);
    this.checkComplete = this.checkComplete.bind(this);
    this.filter = this.filter.bind(this);
    this.checkAll = this.checkAll.bind(this);
  }

  componentDidMount() {
    this.setState({
      filterItems: this.state.items
    })
  }

  removeItem(key) {
    const items = this.state.items;
    const new_items = items.filter((item, index) => index !== key);
    this.setState({
      items: new_items,
      filterItems: new_items,
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
    const clearCompleteItems = items.filter((item)=>{
        return item.completed === false;     
    })
    this.setState({
      items:clearCompleteItems,
      filterItems:clearCompleteItems,
    })
  }

  /**
   *
   *
   * @param {Event} event Javascript event
   * @param {string} status filter by status
   */
  filter(event, status) {
    const items = this.state.items;
    const filterItems = items.filter((item)=>{
      if(status==='completed') {
        return item.completed === true;
      } else if (status==='active'){
        return item.completed === false;
      } else {
        return true;
      }
    })
    event.preventDefault();
    this.setState({status:status,filterItems:filterItems});
  }

  /**
   * Submit todo form
   * @param event the dom event
   */
  todoSubmit(event) {
    event.preventDefault();
    const value = {
      title: this.state.enterTodo,
      completed: false,
    };
    this.setState({
      items: this.state.items.concat([value]),
      filterItems: this.state.items.concat([value]),
      enterTodo: "",
    });
  }

  /**
   * Handle input change of the input fields
   * @param {Event} event
   */
  todoChange(event) {
    this.setState({ enterTodo: event.target.value });
  }

  /**
   * Handle the todo check box.
   *
   * @param {Event} event
   * @param {number} key
   */
  checkComplete(event, key) {
    const items = this.state.items;
    items[key].completed = event.target.checked;
    this.setState({
      items: items,
      filterItems:items,
    });
  }
  
  /**
   * Check all task to comple
   * @param {Event} event 
   */
  checkAll(event) {
    const items = this.state.items;
    const checkItems = items.map(item=>{return {title:item.title,completed:event.target.checked}});
    this.setState({
      items:checkItems,
      filterItems:checkItems,
    })
  }

  render() {

    const listItem = this.state.filterItems.map((item, key) => {
      return (
        <li key={key} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={(e) => this.checkComplete(e, key)}
            />
            <label>{item.title}</label>
            <button
              className="destroy"
              onClick={() => this.removeItem(key)}
            ></button>
          </div>
        </li>
      );
    });

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={this.todoSubmit}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={this.state.enterTodo}
              onChange={this.todoChange}
            />
          </form>
        </header>
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" onChange={this.checkAll}/>
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ul className="todo-list">
            {listItem}
            {/** The list append here */}
          </ul>
          <footer className="footer">
            <span className="todo-count">2 Items Left</span>
            <ul className="filters">
              <li>
                <a
                  href="#/"
                  className={this.state.status === "all" ? "selected" : ""}
                  onClick={(e) => this.filter(e, "all")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  className={this.state.status === "active" ? "" : ""}
                  onClick={(e) => this.filter(e, "active")}
                >
                  Active
                </a>
              </li>
              <li>
                <a
                  href="#/"
                  className={this.state.status === "completed" ? "selected" : ""}
                  onClick={(e) => this.filter(e, "completed")}
                >
                  Completed
                </a>
              </li>
            </ul>
            <button className="clear-completed" onClick={()=>this.clearCompleted()}>Clear completed</button>
          </footer>
        </section>
      </div>
    );
  }
}

export default App;
