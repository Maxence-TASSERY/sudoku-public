// ACTION TYPES
export const CHANGE_SELECTION = 'CHANGE_SELECTION';
export const CHANGE_CELL_VALUE = 'CHANGE_CELL_VALUE';
export const GENERATE_GRID = 'GENERATE_GRID';
export const ADD_FOCUS = 'ADD_FOCUS';
export const REMOVE_FOCUS = 'REMOVE_FOCUS';
export const SHOW_HINT = 'SHOW_HINT';
export const SHOW_SOLUTION = 'SHOW_SOLUTION';
export const CHECK_GRID = 'CHECK_GRID';

// ACTION CREATORS
export const changeSelection = (value) => ({
  type: CHANGE_SELECTION,
  value,
});

export const changeCellValue = (boxKey, cellKey) => ({
  type: CHANGE_CELL_VALUE,
  boxKey,
  cellKey,
});

export const generateGrid = () => ({
  type: GENERATE_GRID,
});

export const addFocus = (boxKey, cellRow, cellCol) => ({
  type: ADD_FOCUS,
  boxKey,
  cellRow,
  cellCol,
});

export const removeFocus = () => ({
  type: REMOVE_FOCUS,
});

export const showHint = () => ({
  type: SHOW_HINT,
});

export const showSolution = () => ({
  type: SHOW_SOLUTION,
});

export const checkGrid = () => ({
  type: CHECK_GRID,
});
