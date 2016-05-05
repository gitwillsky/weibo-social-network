import React, {Component} from 'react';
import Styles from './friend.scss';
import FontAwesome from 'react-fontawesome';

export default class Friend extends Component {
  render() {
    const {user} = this.props;
    return (
      <div className={Styles['box']}>
          <img src={user.avatar_large} />
          <h3 className={Styles['name']}>
            <a href={"http://weibo.com/u/" + user.id} target="_blank">{user.name}</a>
          </h3>
          <p className={Styles['location']}>
            <FontAwesome name="map-marker" /> {user.location}
          </p>
          <p className={Styles['intro']} title={user.description}>{user.description.substring(0,16) + '...'}</p>
          <div className={Styles['bottom']}>
            <div>
              <p>粉丝</p>
              <p>{user.followers_count}</p>
            </div>
            <div></div>
            <div>
              <p>关注</p>
              <p>{user.friends_count}</p>
            </div>
          </div>
          <div className={Styles['status']} title={user.online_status == 0 ? '离线':'在线'}
            style={{backgroundColor: user.online_status == 1 ? '#5bc152': ''}}></div>
      </div>
    );
  }
}
