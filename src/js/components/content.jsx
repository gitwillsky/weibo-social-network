import React, {Component, PropTypes} from 'react';
import Styles from './content.scss';

export default class Content extends Component {
  render() {
    return (
        <div className={Styles['box']}>
          <div className={Styles['ex']}>
            我的微博
          </div>
        </div>
    );
  }
}
