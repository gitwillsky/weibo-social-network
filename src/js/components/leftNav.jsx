import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Styles from './leftNav.scss';
import FontAwesome from 'react-fontawesome';
import {selectContent} from '../actions/content';

class LeftNav extends Component {
    render() {
        const {user,dispatch} = this.props;
        return (
            <div className={Styles['box']}>
                <div className={Styles['avatar']}>
                    <img src={user.avatar_large}/>
                    <h3>{user.name}</h3>
                    <p>{user.location}</p>
                </div>
                <div className={Styles['menuBox']}>
                    <ul>
                        <li onClick={() => dispatch(selectContent(1))}><FontAwesome name="users"/>
                            <span className={Styles['menuTitle']}>我的粉丝</span>
                            <span className={Styles['number']}>{user.followers_count}</span>
                        </li>
                        <li onClick={() => dispatch(selectContent(2))}><FontAwesome name="heart-o"/>
                            <span className={Styles['menuTitle']}>我的关注</span>
                            <span className={Styles['number']}>{user.friends_count}</span>
                        </li>
                    </ul>
                </div>
                <div className={Styles['footer']}>
                  <div className={Styles['help']}>
                    <FontAwesome name="question-circle" />
                    <span>帮助&反馈</span>
                  </div>
                </div>
            </div>
        );
    }
}

export default connect()(LeftNav);
