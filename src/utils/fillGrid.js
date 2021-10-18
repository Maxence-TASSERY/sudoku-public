/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import isValidNumber from 'src/utils/isValidNumber';
import shuffle from 'src/utils/shuffle';
import checkGrid from 'src/utils/checkGrid';

let grid = [];

function fillGridUtil() {
  const numberList = [...Array(9).keys()].map((x) => x + 1);
  for (let iRow = 0; iRow < 9; iRow++) {
    for (let iCol = 0; iCol < 9; iCol++) {
      if (grid[iRow][iCol] === 0) {
        shuffle(numberList);
        for (const number of numberList) {
          if (isValidNumber(grid, iRow, iCol, number)) {
            grid[iRow][iCol] = number;
            if (checkGrid(grid)) return true;
            if (fillGridUtil(grid)) return true;
          }
        }
        grid[iRow][iCol] = 0;
        return false;
      }
    }
  }
  return grid;
}

export default function fillGrid() {
  grid = [...Array(9).keys()].map(() => [...Array(9).keys()].map(() => 0));
  fillGridUtil();
  return grid;
}
