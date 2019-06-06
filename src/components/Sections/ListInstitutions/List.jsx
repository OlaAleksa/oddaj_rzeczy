import React from "react";

import { Decoration } from "../../Decoration/Decoration.jsx";
//import { Institutions } from "./ListInstitutions.jsx"

import { FirebaseService } from "../../../services/firebase.service";

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
            {/*<Institutions/>*/}
        </div>
    }

    componentDidMount() {
        const institutionsRef = FirebaseService.instance.database().ref('institutions');

        console.log(institutionsRef);

        institutionsRef.on('value', (snapshot) => {
            console.log(snapshot);
            let institutions = snapshot.val();

            console.log(institutions);
            // let newState = [];
            //
            // for (let institution in institutions) {
            //     newState.push({
            //         type: institution.type,
            //         id: institution.id,
            //         name: institution.name,
            //         goal: institutions[institution].date,
            //         description: institutions[institution].description,
            //     });
            // }
            //
            // this.setState({
            //     institutions: newState
            // });
        });
    }
}

