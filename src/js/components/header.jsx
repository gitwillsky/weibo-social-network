import React, {Component, PropTypes} from 'react';
import FontAwesome from 'react-fontawesome';
import Styles from './header.scss';

export default class Header extends Component {
    showSetting() {
        alert('setting button click');
    }
    render() {
        return (
            <header>
                <div className={Styles['logo']}>
                  <FontAwesome name='firefox' />
                  &nbsp;微博社会网络浏览器</div>
                <nav></nav>
                <div className={Styles['rightNav']}>
                    <FontAwesome name="cog" onClick={this.showSetting.bind(this)} style={{
                        cursor: 'pointer'
                    }}/>
                </div>
            </header>
        );
    }
}

Header.propTypes = {}
