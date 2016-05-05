import React, {Component, PropTypes} from 'react';
import Styles from './content.scss';
import FriendList from '../components/friendList';
import FollowList from '../components/followList';

export default class Content extends Component {
  render() {
    const {id} = this.props;
    return (
        <div className={Styles['box']}>
          <div className={Styles['ex']}>
            {id == 1 &&
              <FollowList />
            }
            {id == 2 &&
              <FriendList />
            }
          </div>
        </div>
    );
  }
}
