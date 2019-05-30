import React from 'react';
import ClassNames from 'classnames';

import './Button.scss';

export const VARIANT_BIG = 'big';
export const VARIANT_SMALL = 'small';

export class Button extends React.Component {
    handleClick = (e) => {
        if (this.props.onClick && typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };

    render() {
        return (
            <button
                className={ClassNames('Button', {
                    'Button--small': this.props.variant === VARIANT_SMALL,
                    'Button--big': this.props.variant === VARIANT_BIG
                })}
                onClick={this.handleClick}>
                {this.props.text}
            </button>
        );
    }
}


