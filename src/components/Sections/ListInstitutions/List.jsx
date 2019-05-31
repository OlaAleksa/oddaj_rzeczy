import React from "react";

import { Decoration } from "../../Decoration/Decoration.jsx";
import { Institutions } from "./ListInstitutions.jsx"
import firebase from '../../../firebase.js';
import "./List.scss"

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            institutionType: 'foundations',
            institutions: [],
        }
    }


    changeInstitutionType = (e) => {

        document.getElementById(this.state.institutionType).classList.remove('active');
        e.target.classList.add('active');

        const institutionsType = e.target.id;

        this.setState({
            institutionType: institutionsType,
        });

    };


    render() {
        return <div id="list" className="List">
            <div className="List__text-container">
                <Decoration text={'Komu pomagamy?'}/>
                <div className="List__text-container-btns">
                    <div id='foundations' onClick={this.changeInstitutionType}
                         className="List__text-container-btns--btn active">Fundacjom
                    </div>
                    <div id='organizations' onClick={this.changeInstitutionType}
                         className="List__text-container-btns--btn">Organizacjom pozarządowym
                    </div>
                    <div id='collections' onClick={this.changeInstitutionType}
                         className="List__text-container-btns--btn">Lokalnym zbiórkom
                    </div>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <Institutions/>
        </div>
    }

    componentDidMount() {
        const institutionsRef = firebase.database().ref('institutions');
        institutionsRef.on('value', (snapshot) => {
            let institutions = snapshot.val();
            let newState = [];
            for (let institution in institutions) {
                newState.push({
                    type: institution,
                    id: institutions[institution].id,
                    name: institutions[institution].id.name,
                    goal: institutions[institution].id.date,
                    description: institutions[institution].id.description,
                });
            }
            this.setState({
                institutions: newState
            });
        });
    }
}

