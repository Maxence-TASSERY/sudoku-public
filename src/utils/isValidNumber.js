export default function isValidNumber(grid, row, col, number) {
  // Check that this value has not already be used on this row
  if (!grid[row].find((e) => e === number)) {
    const currentCol = [
      grid[0][col], grid[1][col], grid[2][col], grid[3][col], grid[4][col],
      grid[5][col], grid[6][col], grid[7][col], grid[8][col],
    ];

    // Check that this value has not already be used on this column
    if (!currentCol.find((e) => e === number)) {
      const boxRow = Math.floor(row / 3);
      const boxCol = Math.floor(col / 3);
      const currentBox = [
        grid[(boxRow * 3)][(boxCol * 3)],
        grid[(boxRow * 3)][(boxCol * 3) + 1],
        grid[(boxRow * 3)][(boxCol * 3) + 2],
        grid[(boxRow * 3) + 1][(boxCol * 3)],
        grid[(boxRow * 3) + 1][(boxCol * 3) + 1],
        grid[(boxRow * 3) + 1][(boxCol * 3) + 2],
        grid[(boxRow * 3) + 2][(boxCol * 3)],
        grid[(boxRow * 3) + 2][(boxCol * 3) + 1],
        grid[(boxRow * 3) + 2][(boxCol * 3) + 2],
      ];

      // Check that this value has not already be used on this 3x3 square
      if (!currentBox.find((e) => e === number)) {
        return true;
      }
    }
  }
  return false;
}
