import React, { Component } from 'react';
import Advanced from '../containers/Advanced';
import Index from '../containers/index';
import { Provider } from 'react-redux';
import store from '../store/index';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';

// Create an enhanced history that syncs navigation events with the store 
const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
	render() {		
	
		return (
			<Provider key={ module.hot ? Date.now() : store} store={store}>						
				<Router history={history}>
					<Route exact path="/" component={Index} />				
					<Route path="/advanced" component={Advanced} />
				</Router>		
			</Provider>
		)
	}
}