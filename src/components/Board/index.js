import './styles.scss';
import { useSelector } from 'react-redux';

import Box from 'src/components/Box';

export default function Board() {
  const boxes = useSelector((state) => state.boxes);
  const onFocus = useSelector((state) => state.onFocus);

  const jsxBoxes = boxes.map((box) => (
    <Box
      key={box.key}
      boxKey={box.key}
      cells={box.cells}
      onFocus={onFocus}
    />
  ));

  return (
    <div className="board">
      {jsxBoxes}
    </div>
  );
}
