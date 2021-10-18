/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import shuffle from 'src/utils/shuffle';

export default function getRandomEmptyCell(boxes) {
  const randomIndexBoxes = [...Array(9).keys()].map((x) => x);
  shuffle(randomIndexBoxes);
  const randomIndexCells = [...Array(9).keys()].map((x) => x);
  shuffle(randomIndexCells);

  for (const randomIndexBox of randomIndexBoxes) {
    for (const randomIndexCell of randomIndexCells) {
      if (boxes[randomIndexBox].cells[randomIndexCell].content === 0) {
        return { box: randomIndexBox, cell: randomIndexCell };
      }
    }
  }
}
