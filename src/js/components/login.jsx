import React, {Component, PropTypes} from 'react';
import Styles from './login.scss';

export default class Login extends Component {
  render() {
    return (
        <div className={Styles['box']}>
          <div className={Styles['panel']}>
            <div className={Styles['header']}>
              <h2>微博社会网络浏览器</h2>
              <h5>WeiBo Social Network Browser</h5>
            </div>
            <div className={Styles['content']}>
              <a href={this.props.location} target="_blank">
                <span className={Styles['ico']}></span> 使用微博账号登录</a>
            </div>
          </div>
        </div>
    );
  }
}

Login.propTypes = {
  location: PropTypes.string.isRequired
}
