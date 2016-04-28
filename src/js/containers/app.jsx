import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getTokenFromServer} from '../actions/token';
import Login from '../components/login';
import Main from '../components/main';
import Notifications from 'react-notify-toast';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(getTokenFromServer());
    }

    render() {
        const {token} = this.props;
        return (
          <div>
            <Notifications />
            {token.valid &&
              <Main />
            }
            {!token.valid && !token.isFetching &&
              <Login location="http://w.fullstackdev.cn/login"/>
            }
          </div>
      );
    }
}

App.propTypes = {
    token: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    const {token} = state;
    return {token}
}

export default connect(mapStateToProps)(App);
