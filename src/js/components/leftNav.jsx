import React, {Component, PropTypes} from 'react';
import Styles from './leftNav.scss';
import FontAwesome from 'react-fontawesome';

export default class LeftNav extends Component {
    render() {
        return (
            <div className={Styles['box']}>
                <div className={Styles['avatar']}>
                    <img src={this.props.imgSrc}/>
                    <h3>{this.props.name}</h3>
                    <p>微博：<a href={this.props.weiboUrl} target="_blank">{this.props.weibo}</a>
                    </p>
                </div>
                <div className={Styles['menuBox']}>
                    <ul>
                        <li><FontAwesome name="weibo"/>
                            <span className={Styles['menuTitle']}>我的微博</span>
                        </li>
                        <li><FontAwesome name="users"/>
                            <span className={Styles['menuTitle']}>我的粉丝</span>
                            <span className={Styles['number']}>300</span>
                        </li>
                        <li><FontAwesome name="heart-o"/>
                            <span className={Styles['menuTitle']}>我的关注</span>
                            <span className={Styles['number']}>100</span>
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
