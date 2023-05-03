import { createSlice } from "@reduxjs/toolkit";
import {
  getHideDoneFromLocalStorage,
  getTasksFromLocalStorage,
} from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: getHideDoneFromLocalStorage(),
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    showDone: (state) => {
      state.hideDone = false;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasks: (state) => {
      state.loading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.loading = false;
    },
    fetchExampleTasksError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  showDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  setTasks,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectLoading = (state) => selectTasksState(state).loading;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksNotEmpty = (state) =>
  selectTasks(state).length > 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.map((task) => ({
    ...task,
    hiddenByQuery: !task.content
      .toUpperCase()
      .includes(query.trim().toUpperCase())
      ? true
      : false,
  }));
};

export default tasksSlice.reducer;
