import React from 'react';
import About from "./Section/About.js";
import YellowBar from "./Section/YellowBar.js";
import Steps from "./Section/Steps.js"
import List from "./Section/List.js"

class Sections extends React.Component {
    render() {
        return <div>
            <YellowBar/>
            <Steps/>
            <About/>
            <List/>
        </div>
    }
}

export default Sections