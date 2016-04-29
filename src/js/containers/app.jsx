import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions/user';
import Login from '../components/login';
import Header from '../components/header';
import LeftNav from '../components/leftNav';
import Notifications from 'react-notify-toast';
import Content from './content';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getUser());
    }

    render() {
        const {user,content} = this.props;
        return (
          <div>
            <Notifications />
            {user.id > 0 &&
              <div>
                <Header/>
                <LeftNav user={user}/>
                <Content id={content.id}/>
              </div>
            }
            {user.id == 0 && !user.isFetching &&
              <Login location="http://w.fullstackdev.cn/api/login"/>
            }
          </div>
      );
    }
}

App.propTypes = {
    user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    const {user, content} = state;
    return {user, content}
}

export default connect(mapStateToProps)(App);
