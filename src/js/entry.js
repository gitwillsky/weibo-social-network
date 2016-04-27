import React, {Component} from 'react';
import {render} from 'react-dom';

import Login from './components/login';
import Header from './components/header';
import LeftNav from './components/leftNav';
import Content from './components/content';

export default class App extends Component {
    render() {
        return (
          <div>
            <Header />
            <LeftNav name='willsky'
              imgSrc='src/images/avatar.jpg'
              weibo="@iamwillsky"
              weiboUrl="http://weibo.com/u/5716042188"/>
              <Content />
          </div>
        );
    }
}

render(<App />, document.getElementById('app'));
