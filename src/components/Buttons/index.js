import { useDispatch, useSelector } from 'react-redux';
import {
  generateGrid,
  showHint,
  showSolution,
  checkGrid,
} from 'src/actions';

import './styles.scss';

export default function Buttons() {
  const dispatch = useDispatch();
  const started = useSelector((state) => state.started);
  const filledCells = useSelector((state) => state.filledCells);
  return (
    <div className="buttons">
      <button
        className="button"
        type="button"
        onClick={() => {
          dispatch(generateGrid());
        }}
      >
        New
      </button>
      <button
        className="button"
        type="button"
        disabled={!started || filledCells === 81}
        onClick={() => {
          dispatch(showHint());
        }}
      >
        Hint
      </button>
      <button
        className="button"
        type="button"
        disabled={!started}
        onClick={() => {
          dispatch(checkGrid());
        }}
      >
        Check
      </button>
      <button
        className="button"
        type="button"
        disabled={!started}
        onClick={() => {
          dispatch(showSolution());
        }}
      >
        Solution
      </button>
    </div>
  );
}
