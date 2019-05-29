import React from 'react';
import './Button.scss';
import ClassNames from 'classnames';

export class Button extends React.Component{

    render() {
        return <button
            className={ClassNames('Button', { 'Button--small': this.props.small, 'Button--big': this.props.big})}>{this.props.text}</button>
    }
}


