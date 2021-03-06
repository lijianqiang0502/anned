import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { clazz } from '../utils/clazz';
import styles from './index.less';

class Index extends Component {
    renderLoading = (type) => {
      if (type === 'round') {
        return (
          <>
            <i className={styles.ltRound}> </i>
            <i className={styles.rtRound}> </i>
            <i className={styles.lbRound}> </i>
            <i className={styles.rbRound}> </i>
          </>
        );
      }
      if (type === 'curve') {
        return (
          <>
            <div className={styles.curve}> </div>
          </>
        );
      }
    };

    render() {
      const {
        type = 'round', children, onLoading, description,
      } = this.props;
      return (
        <div>
          {
                    children && onLoading
                      ? (
                        <div className={styles.box}>
                          {children}
                          <div className={clazz([styles.animation, styles.mask])}>
                            <div className={styles.round}>
                              {this.renderLoading(type)}
                            </div>
                            <div className={styles.title}>{description}</div>
                          </div>
                        </div>
                      )
                      : children !== undefined
                        ? children
                        : (
                          <div className={styles.round}>
                            {this.renderLoading(type)}
                          </div>
                        )
                }
        </div>
      );
    }
}

Index.propTypes = {
  type: PropTypes.oneOf(['round', 'curve']),
  onLoading: PropTypes.bool,
  description: PropTypes.string,
  children: PropTypes.any,
};

export default Index;
