import React from "react";
import './Step.scss'

export class Step extends React.Component {
    render() {
        return <div className="steps__box-small">
            <img src={this.props.src} alt={this.props.alt}/>
            <p className="first">{this.props.biggerText}</p>
            <hr/>
            <p className="second">{this.props.text}</p>
        </div>
    }
}
