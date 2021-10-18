// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Board from 'src/components/Board';
import Selection from 'src/components/Selection';
import Buttons from 'src/components/Buttons';

// == Composant
export default function App() {
  return (
    <div className="app">
      <Header />
      <Buttons />
      <Board />
      <Selection />
    </div>
  );
}
