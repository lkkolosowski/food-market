import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  selectHideDone,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Button, Content, StyledLink } from "./styled";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
          className={`tasks__item 
          ${task.done ? "tasks__item--done" : ""} 
          ${task.done && hideDone ? "tasks__item--hidden" : ""}`}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
