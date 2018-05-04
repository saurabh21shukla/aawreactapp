// importing Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';

import { routeLinks, companyName, empTitle, empAddList } from '../config';

const devTool = window.devToolsExtension ? window.devToolsExtension() : f => f;
const middlewares = applyMiddleware(thunk);

export default createStore(reducers, compose(middlewares, devTool));