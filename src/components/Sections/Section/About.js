import React from "react";
import Decoration from "../../Decoration.js";
import './About.scss'

class About extends React.Component {
    render() {
        return <div id="about" className="about">
            <div className="about__text">
                <Decoration text={'O nas'}/>
                <p>Etiam sit amet orci et diam posuere euismod. Sed erat neque, porttitor dignissim luctus vitae,
                    fermentum id lorem.Aliquam erat volutpat. Etiam eleifend sed magna a dignissim.</p>
            </div>
            <div className="about__img">
            </div>
        </div>
    }
}

export default About