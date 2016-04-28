import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getUserFromServer} from '../actions/basic';
import Header from './header';
import LeftNav from './leftNav';
import Content from './content';

class Main extends Component {
    componentDidMount() {
      const {dispatch, token} = this.props;
      dispatch(getUserFromServer(token.access_token,token.uid));
    }
    render() {
      const {user} = this.props;
        return (
            <div>
                <Header/>
                <LeftNav name={user.name}
                  imgSrc={user.avatar_large}
                  weibo={user.weihao}
                  weiboUrl={user.url}/>
                <Content/>
            </div>
        );
    }
}

Main.propTypes = {
    token: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    const {token, user} = state;
    return {token, user}
}

export default connect(mapStateToProps)(Main);
