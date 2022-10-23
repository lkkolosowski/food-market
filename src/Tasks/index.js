import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item 
        ${task.done ? "tasks__item--done" : ""} 
        ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
      >
        <button className="tasks__button">{task.done ? "✓" : ""}</button>
        <span className="tasks__content">{task.content}</span>
        <button onClick={() => removeTask(task.id)} className="tasks__button tasks__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
