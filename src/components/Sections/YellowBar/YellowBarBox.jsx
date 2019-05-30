import React from "react";
import './YellowBarBox.scss'

export class Box extends React.Component {
    render() {
        return <div className="Yellow-bar__box">
            <div className="Yellow-bar__box-number">{this.props.number}</div>
            <h3 className="Yellow-bar__box-title">{this.props.title}</h3>
            <p className="Yellow-bar__box-description">'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vestibulum nulla leo, non venenatis justo lobortis non. '</p>
        </div>
    }
}
