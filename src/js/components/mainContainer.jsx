import React, {Component, PropTypes} from 'react';
import Styles from './mainContainer.scss';

export default class MainContainer extends Component {
    render() {
        return (
          <div className={Styles['box']}>
            111
          </div>
        );
    }
}

MainContainer.propTypes = {}
