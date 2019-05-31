import React from "react";
import { Decoration } from "../../Decoration/Decoration";
import './About.scss'

export class About extends React.Component {
    render() {
        return <div id="about" className="About">
            <div className="About__text">
                <Decoration text={'O nas'}/>
                <p>Etiam sit amet orci et diam posuere euismod. Sed erat neque, porttitor dignissim luctus vitae,
                    fermentum id lorem.Aliquam erat volutpat. Etiam eleifend sed magna a dignissim.</p>
            </div>
            <div className="About__img">
            </div>
        </div>
    }
}


