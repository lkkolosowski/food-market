import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone}) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`tasks__item 
        ${task.done ? "tasks__item--done" : ""} 
        ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
      >
        <button
          className="tasks__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>
        <span className="tasks__content">
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
