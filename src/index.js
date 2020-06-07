import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Detail from './detail.js';
import Listpage from './listpage.js';


const App = () => {
  return (
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={Listpage} />
        <Route path="/:login" component={Detail} />
      </Router>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
