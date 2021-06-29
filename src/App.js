import "./App.css";

const items = [
  {
    title: "shahfiq",
  },
  {
    title: "Syima",
  },
  {
    title: "Aliah",
  },
  {
    title: "Ajam",
  },
];

function removeItem(index) {
  items.splice(index,1);
}

const listItem = items.map((item, index) => {
  return (
    <li key={index}>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{item.title}</label>
        <button class="destroy" onClick={()  =>  removeItem(index)}></button>
      </div>
    </li>
  );
});

function App() {
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          autofocus
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          {listItem}
          {/** The list append here */}
        </ul>
        <footer class="footer">
          <span class="todo-count">2 Items Left</span>
          <ul class="filters">
            <li>
              <a href="#/" class="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button class="clear-completed">Clear completed</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
