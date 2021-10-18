/* eslint-disable no-plusplus */
export default function checkGrid(grid) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return false;
    }
  }
  // We have a complete grid!
  return true;
}
