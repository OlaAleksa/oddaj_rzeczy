import React from 'react';
import { About } from "./About/About.jsx";
import { YellowBar } from "./YellowBar/YellowBar.jsx";
import { Steps } from "./Steps/Steps.jsx"
import { List } from "./ListInstitutions/List.jsx"

export class Sections extends React.Component {
    render() {
        return <div>
            <YellowBar/>
            <Steps/>
            <About/>
            <List/>
        </div>
    }
}

