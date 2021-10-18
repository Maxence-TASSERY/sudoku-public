/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
import {
  CHANGE_SELECTION,
  CHANGE_CELL_VALUE,
  GENERATE_GRID,
  ADD_FOCUS,
  REMOVE_FOCUS,
  SHOW_HINT,
  SHOW_SOLUTION,
  CHECK_GRID,
} from 'src/actions';

import { cloneDeep } from 'lodash';

import fillGrid from 'src/utils/fillGrid';
import removeNumbers from 'src/utils/removeNumbers';
import convertGrid from 'src/utils/convertGrid';
import getRandomEmptyCell from 'src/utils/getRandomEmptyCell';

const initialState = {
  currentSelection: 1,
  started: false,
  boxes: [
    {
      key: 1,
      cells: [
        { key: 1, row: 1, col: 1, content: 0, locked: false },
        { key: 2, row: 1, col: 2, content: 0, locked: false },
        { key: 3, row: 1, col: 3, content: 0, locked: false },
        { key: 4, row: 2, col: 1, content: 0, locked: false },
        { key: 5, row: 2, col: 2, content: 0, locked: false },
        { key: 6, row: 2, col: 3, content: 0, locked: false },
        { key: 7, row: 3, col: 1, content: 0, locked: false },
        { key: 8, row: 3, col: 2, content: 0, locked: false },
        { key: 9, row: 3, col: 3, content: 0, locked: false },
      ],
    },
    {
      key: 2,
      cells: [
        { key: 1, row: 1, col: 4, content: 0, locked: false },
        { key: 2, row: 1, col: 5, content: 0, locked: false },
        { key: 3, row: 1, col: 6, content: 0, locked: false },
        { key: 4, row: 2, col: 4, content: 0, locked: false },
        { key: 5, row: 2, col: 5, content: 0, locked: false },
        { key: 6, row: 2, col: 6, content: 0, locked: false },
        { key: 7, row: 3, col: 4, content: 0, locked: false },
        { key: 8, row: 3, col: 5, content: 0, locked: false },
        { key: 9, row: 3, col: 6, content: 0, locked: false },
      ],
    },
    {
      key: 3,
      cells: [
        { key: 1, row: 1, col: 7, content: 0, locked: false },
        { key: 2, row: 1, col: 8, content: 0, locked: false },
        { key: 3, row: 1, col: 9, content: 0, locked: false },
        { key: 4, row: 2, col: 7, content: 0, locked: false },
        { key: 5, row: 2, col: 8, content: 0, locked: false },
        { key: 6, row: 2, col: 9, content: 0, locked: false },
        { key: 7, row: 3, col: 7, content: 0, locked: false },
        { key: 8, row: 3, col: 8, content: 0, locked: false },
        { key: 9, row: 3, col: 9, content: 0, locked: false },
      ],
    },
    {
      key: 4,
      cells: [
        { key: 1, row: 4, col: 1, content: 0, locked: false },
        { key: 2, row: 4, col: 2, content: 0, locked: false },
        { key: 3, row: 4, col: 3, content: 0, locked: false },
        { key: 4, row: 5, col: 1, content: 0, locked: false },
        { key: 5, row: 5, col: 2, content: 0, locked: false },
        { key: 6, row: 5, col: 3, content: 0, locked: false },
        { key: 7, row: 6, col: 1, content: 0, locked: false },
        { key: 8, row: 6, col: 2, content: 0, locked: false },
        { key: 9, row: 6, col: 3, content: 0, locked: false },
      ],
    },
    {
      key: 5,
      cells: [
        { key: 1, row: 4, col: 4, content: 0, locked: false },
        { key: 2, row: 4, col: 5, content: 0, locked: false },
        { key: 3, row: 4, col: 6, content: 0, locked: false },
        { key: 4, row: 5, col: 4, content: 0, locked: false },
        { key: 5, row: 5, col: 5, content: 0, locked: false },
        { key: 6, row: 5, col: 6, content: 0, locked: false },
        { key: 7, row: 6, col: 4, content: 0, locked: false },
        { key: 8, row: 6, col: 5, content: 0, locked: false },
        { key: 9, row: 6, col: 6, content: 0, locked: false },
      ],
    },
    {
      key: 6,
      cells: [
        { key: 1, row: 4, col: 7, content: 0, locked: false },
        { key: 2, row: 4, col: 8, content: 0, locked: false },
        { key: 3, row: 4, col: 9, content: 0, locked: false },
        { key: 4, row: 5, col: 7, content: 0, locked: false },
        { key: 5, row: 5, col: 8, content: 0, locked: false },
        { key: 6, row: 5, col: 9, content: 0, locked: false },
        { key: 7, row: 6, col: 7, content: 0, locked: false },
        { key: 8, row: 6, col: 8, content: 0, locked: false },
        { key: 9, row: 6, col: 9, content: 0, locked: false },
      ],
    },
    {
      key: 7,
      cells: [
        { key: 1, row: 7, col: 1, content: 0, locked: false },
        { key: 2, row: 7, col: 2, content: 0, locked: false },
        { key: 3, row: 7, col: 3, content: 0, locked: false },
        { key: 4, row: 8, col: 1, content: 0, locked: false },
        { key: 5, row: 8, col: 2, content: 0, locked: false },
        { key: 6, row: 8, col: 3, content: 0, locked: false },
        { key: 7, row: 9, col: 1, content: 0, locked: false },
        { key: 8, row: 9, col: 2, content: 0, locked: false },
        { key: 9, row: 9, col: 3, content: 0, locked: false },
      ],
    },
    {
      key: 8,
      cells: [
        { key: 1, row: 7, col: 4, content: 0, locked: false },
        { key: 2, row: 7, col: 5, content: 0, locked: false },
        { key: 3, row: 7, col: 6, content: 0, locked: false },
        { key: 4, row: 8, col: 4, content: 0, locked: false },
        { key: 5, row: 8, col: 5, content: 0, locked: false },
        { key: 6, row: 8, col: 6, content: 0, locked: false },
        { key: 7, row: 9, col: 4, content: 0, locked: false },
        { key: 8, row: 9, col: 5, content: 0, locked: false },
        { key: 9, row: 9, col: 6, content: 0, locked: false },
      ],
    },
    {
      key: 9,
      cells: [
        { key: 1, row: 7, col: 7, content: 0, locked: false },
        { key: 2, row: 7, col: 8, content: 0, locked: false },
        { key: 3, row: 7, col: 9, content: 0, locked: false },
        { key: 4, row: 8, col: 7, content: 0, locked: false },
        { key: 5, row: 8, col: 8, content: 0, locked: false },
        { key: 6, row: 8, col: 9, content: 0, locked: false },
        { key: 7, row: 9, col: 7, content: 0, locked: false },
        { key: 8, row: 9, col: 8, content: 0, locked: false },
        { key: 9, row: 9, col: 9, content: 0, locked: false },
      ],
    },
  ],
  solutionGrid: [],
  onFocus: {
    box: -1,
    row: -1,
    col: -1,
  },
  filledCells: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SELECTION: {
      // update currentSelection
      return {
        ...state,
        currentSelection: action.value,
      };
    }
    case CHANGE_CELL_VALUE: {
      // update target cell content based on state.currentSelection + update filledCells value
      const boxes = cloneDeep(state.boxes);
      let { filledCells } = state;
      if (boxes[action.boxKey - 1].cells[action.cellKey - 1].content === state.currentSelection) {
        boxes[action.boxKey - 1].cells[action.cellKey - 1].content = 0;
        filledCells--;
      }
      else {
        boxes[action.boxKey - 1].cells[action.cellKey - 1].content = state.currentSelection;
        filledCells++;
      }

      return {
        ...state,
        boxes,
        filledCells,
      };
    }
    case GENERATE_GRID: {
      // Reinitialize state.filledCells
      let filledCells = 0;
      // Get a complete grid
      let solutionGrid = fillGrid();
      // Get a partially filled grid with solutionGrid as unique solution
      let showedGrid = cloneDeep(solutionGrid);
      showedGrid = removeNumbers(showedGrid);
      // Formatting showedGrid from cell[row][col] to cell[box][posInBox]
      // Formatting solutionGrid the same way
      showedGrid = convertGrid(showedGrid);
      solutionGrid = convertGrid(solutionGrid);
      // Create new state.boxes based on showedGrid data + count cells filled
      const boxes = cloneDeep(initialState.boxes);

      showedGrid.forEach((box, indexBox) => {
        box.forEach((cell, indexCell) => {
          if (cell) {
            boxes[indexBox].cells[indexCell].content = cell;
            boxes[indexBox].cells[indexCell].locked = true;
            filledCells++;
          }
        });
      });

      return {
        ...state,
        started: true,
        solutionGrid,
        boxes,
        filledCells,
      };
    }
    case ADD_FOCUS: {
      const onFocus = {
        box: action.boxKey,
        row: action.cellRow,
        col: action.cellCol,
      };
      return {
        ...state,
        onFocus,
      };
    }
    case REMOVE_FOCUS: {
      return {
        ...state,
        onFocus: initialState.onFocus,
      };
    }
    case SHOW_HINT: {
      // get coordinates of a random empty cell of state.boxes
      const boxes = cloneDeep(state.boxes);
      const randomEmptyCell = getRandomEmptyCell(boxes);

      boxes[randomEmptyCell.box].cells[randomEmptyCell.cell].content = state
        .solutionGrid[randomEmptyCell.box][randomEmptyCell.cell];
      boxes[randomEmptyCell.box].cells[randomEmptyCell.cell].locked = true;

      return {
        ...state,
        boxes,
        filledCells: state.filledCells + 1,
      };
    }
    case SHOW_SOLUTION: {
      // Create new state.boxes based on state.solutionGrid data
      const boxes = cloneDeep(initialState.boxes);

      state.solutionGrid.forEach((box, indexBox) => {
        box.forEach((cell, indexCell) => {
          boxes[indexBox].cells[indexCell].content = cell;
          boxes[indexBox].cells[indexCell].locked = true;
        });
      });

      // Set state.filledCells to max value
      const filledCells = 81;

      return {
        ...state,
        started: false,
        boxes,
        filledCells,
      };
    }
    case CHECK_GRID: {
      // Create new state.boxes
      const boxes = cloneDeep(state.boxes);
      let { filledCells } = state;
      // Lock every correct values
      // Erase the others
      state.solutionGrid.forEach((box, indexBox) => {
        box.forEach((cell, indexCell) => {
          if (!boxes[indexBox].cells[indexCell].locked) {
            if (boxes[indexBox].cells[indexCell].content === cell) {
              boxes[indexBox].cells[indexCell].locked = true;
            }
            else if (boxes[indexBox].cells[indexCell].content !== 0) {
              boxes[indexBox].cells[indexCell].content = 0;
              filledCells--;
            }
          }
        });
      });

      // If right value is in all cells, end the game
      let started = true;
      if (filledCells === 81) {
        started = false;
      }

      return {
        ...state,
        boxes,
        filledCells,
        started,
      };
    }
    default:
      return state;
  }
};

export default reducer;
