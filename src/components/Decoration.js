import React from 'react';
import './Decoration.scss';
import decoration from "./img/decoration.png";

class Decoration extends React.Component{

    render() {
        return <div className="decoration">
            <p>{this.props.text}</p>
            <p>{this.props.subText}</p>
            <img src={decoration} alt="decoration"/>
        </div>
    }
}

export default Decoration