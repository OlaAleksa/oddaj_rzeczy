import React from 'react';
import './Button.scss';

class Button extends React.Component{

    render() {
        return <button className={this.props.small? 'small':'big'}>{this.props.text}</button>
    }
}

export default Button