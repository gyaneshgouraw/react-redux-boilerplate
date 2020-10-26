import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import reducers from "./reducers";

import { createStore } from "redux";

const store = createStore(reducers);


const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
