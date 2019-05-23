import React from "react";
import './ListFoundations.scss'

class Foundations extends React.Component {
    render() {
        return <div className="list__foundations-container-foundations">
            <div className="box-right">
                <h3>Fundacja "{this.props.headerText}"</h3>
                <p>Cel i misja: {this.props.subHeaderText}</p>
                <hr/>
            </div>
            <div className="box-left">
                <p>{this.props.text}</p>
                <hr/>
            </div>
        </div>
    }
}

export default Foundations