import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button className="buttons__button">{hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
      <button disabled={tasks.every(({ done }) => done)} className="buttons__button">
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
