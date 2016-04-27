import React, {Component} from 'react';
import {render} from 'react-dom';

import Login from './components/login';
import MainContainer from './components/mainContainer';

export default class App extends Component {
    render() {
        return (
          <MainContainer />
        );
    }
}

render(<App />, document.getElementById('app'));
