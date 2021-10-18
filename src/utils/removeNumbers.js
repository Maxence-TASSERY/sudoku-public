/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import shuffle from 'src/utils/shuffle';
import isValidNumber from 'src/utils/isValidNumber';
import checkGrid from 'src/utils/checkGrid';

let counterSolution = 0;
let attempts = 5;

function countSolutions(grid) {
  const numberList = [...Array(9).keys()].map((x) => x + 1);

  for (let iRow = 0; iRow < 9; iRow++) {
    for (let iCol = 0; iCol < 9; iCol++) {
      if (grid[iRow][iCol] === 0) {
        for (const number of numberList) {
          if (isValidNumber(grid, iRow, iCol, number)) {
            grid[iRow][iCol] = number;
            if (checkGrid(grid)) {
              grid[iRow][iCol] = 0;
              counterSolution++;
              return true;
            }
            if (countSolutions(grid)) break;
          }
        }
        grid[iRow][iCol] = 0;
        return false;
      }
    }
  }
}

function removeNumbersUtils(grid) {
  let backupCellValue;
  const cells = [...Array(81).keys()].map((x) => x);
  let row;
  let col;

  while (attempts > 0) {
    shuffle(cells);
    for (const cell of cells) {
      row = Math.floor(cell / 9);
      col = cell % 9;
      if (grid[row][col] !== 0) {
        backupCellValue = grid[row][col];
        grid[row][col] = 0;
        counterSolution = 0;
        countSolutions(grid);
        if (counterSolution > 1) {
          grid[row][col] = backupCellValue;
          attempts--;
          break;
        }
      }
    }
  }

  return grid;
}

export default function removeNumbers(grid) {
  counterSolution = 0;
  attempts = 5;

  return removeNumbersUtils(grid);
}
