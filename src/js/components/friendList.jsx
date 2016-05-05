import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../actions/friends';
import Loading from './loading';
import Styles from './friendList.scss';
import Friend from './friend';

class FriendList extends Component {
  componentDidMount() {
      const {dispatch} =  this.props;
      dispatch(getFriends());
  }

  nextPage() {
    const nextCursor = this.porps.friends.next_cursor;
    if (nextCursor > 0) {
      dispatch(getFriends(nextCursor));
    }
  }

  prevPage() {
    const prevCursor = this.porps.friends.previous_cursor;
    if (prevCursor > 0) {
      dispatch(getFriends(prevCursor));
    }
  }

  render() {
    const {friends} = this.props;
    return(
      <div className={Styles['box']}>
        <h3 className={Styles['boxTitle']}>我的关注</h3>
        <p className={Styles['notice']}>由于新浪微博限制，这里只显示部分授权此应用的用户。</p>
        {friends.isFetching &&
          <Loading />
        }
        {!friends.isFetching && friends.users.length > 0 &&
          <div>
            <div className={Styles['friends']}>
              {friends.users.map((user, i) =>
                  <Friend user={user} key={i} />
              )}
            </div>
            {friends.users.length > 30 &&
              <div className={Styles['pageNav']}>
                <a onClick={this.prevPage.bind(this)} className={friends.previous_cursor == 0 ? Styles['disable'] : ''}>上一页</a>
                <a onClick={this.nextPage.bind(this)} className={friends.next_cursor == 0 ? Styles['disable'] : ''}>下一页</a>
              </div>
            }
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {friends} = state;
  return {
    friends
  };
}

export default connect(mapStateToProps)(FriendList);
