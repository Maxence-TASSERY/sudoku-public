/* eslint-disable no-plusplus */
export default function convertGrid(grid) {
  const convertedGrid = [];

  for (let iBox = 0; iBox < 9; iBox++) {
    const convertedGridBox = [];
    const offsetRow = Math.floor(iBox / 3) * 3;
    const offsetCol = (iBox % 3) * 3;
    for (let iOffsetRow = 0; iOffsetRow < 3; iOffsetRow++) {
      for (let iOffsetCol = 0; iOffsetCol < 3; iOffsetCol++) {
        convertedGridBox.push(grid[offsetRow + iOffsetRow][offsetCol + iOffsetCol]);
      }
    }
    convertedGrid[iBox] = convertedGridBox;
  }

  return convertedGrid;
}
