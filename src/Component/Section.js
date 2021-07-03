function Section(props) {
  function handleChange(event) {
    props.checkAll(event.target.checked);
  }

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">{props.children}</ul>
    </section>
  );
}

export default Section;
