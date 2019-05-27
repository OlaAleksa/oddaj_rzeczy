import React from 'react';
import './Button.scss';
import classnames from 'classnames';

class Button extends React.Component{

    render() {
        return <button className={classnames('Button', { 'Button--small': this.props.small })}>{this.props.text}</button>
    }
}

export default Button
