import React from 'react';
import ReactDOM from 'react-dom';

// importing CSS files
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './style/style.css';

//importing components
import App from './components/App';

// importing Redux
import { Provider } from 'react-redux';

import store from './store'

ReactDOM.render(
	<Provider store={store}>
 		 <App />
 </Provider>,
  	document.getElementById('root')
);
