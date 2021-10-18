import { useSelector, useDispatch } from 'react-redux';
import { changeSelection } from 'src/actions';

import './styles.scss';

export default function Selection() {
  const currentSelection = useSelector((state) => state.currentSelection);
  const buttonsContent = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();

  const jsxButtons = buttonsContent.map((buttonContent) => (
    <button
      key={buttonContent}
      className={buttonContent === currentSelection ? 'button button--selected' : 'button'}
      type="button"
      onClick={(event) => {
        dispatch(changeSelection(parseInt(event.target.textContent, 10)));
      }}
    >
      {buttonContent}
    </button>
  ));
  return (
    <div className="selection">
      {jsxButtons}
    </div>
  );
}
