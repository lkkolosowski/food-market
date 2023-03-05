import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(({ id }) => id === payload);
      tasks.splice(index, 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
    }
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectTasksState = state => selectTasks(state).tasks;
export const selectAreTasksEmpty = state => selectTasksState(state).length > 0;
export const selectIsEveryTaskDone = state => selectTasksState(state).every(({done}) => done);
export default tasksSlice.reducer;
