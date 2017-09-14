import React, { Component } from 'react';
import Wrap from '../containers/Wrap';
import { Provider } from 'react-redux';
import store from '../store/index';

export default class App extends Component {
	render() {		
		return (
			<Provider key={ module.hot ? Date.now() : store} store={store}>			
				<Wrap />			
			</Provider>
		)
	}
}