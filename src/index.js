// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
const target = document.getElementById('root');
render(rootReactElement, target);
