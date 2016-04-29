import React, {Component, PropTypes} from 'react';
import Styles from './content.scss';
import Friends from '../components/friends';
import Follows from '../components/follows';

export default class Content extends Component {
  render() {
    const {id} = this.props;
    return (
        <div className={Styles['box']}>
          <div className={Styles['ex']}>
            {id == 1 &&
              <Friends />
            }
            {id == 2 &&
              <Follows />
            }
          </div>
        </div>
    );
  }
}
