import React from "react";
import './YellowBarBox.scss'

class Box extends React.Component {
    render() {
        return <div className="yellow-bar__box">
            <div className="yellow-bar__box-number">{this.props.number}</div>
            <h3 className="yellow-bar__box-title">{this.props.title}</h3>
            <p className="yellow-bar__box-description">'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vestibulum nulla leo, non venenatis justo lobortis non. '</p>
        </div>
    }
}

export default Box