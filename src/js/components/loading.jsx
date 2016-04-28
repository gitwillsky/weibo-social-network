import React, {Component} from 'react';
import Styles from './loading.scss';

export default class Loading extends Component {
  render() {
    return (
      <div className={Styles['spinner']}>
        <div className={Styles['bounce1']}></div>
        <div className={Styles['bounce2']}></div>
        <div className={Styles['bounce3']}></div>
      </div>
    );
  }
}
