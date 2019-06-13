import React from 'react'
import { Button, VARIANT_SMALL } from "../../Button/Button";
import './InstitutionListForm.scss'

export class InstitutionListForm extends React.Component {
    render() {
        return  <div className="Form__steps-step">
            <p>Krok 3/4</p>
            <h3>Wybierz organizację, której chcesz pomóc:</h3>
            <div className="Form__steps-step--list"></div>
            <div className="Form__steps-step--btns">
                <Button variant={VARIANT_SMALL} text={'Cofnij'}/>
                <Button variant={VARIANT_SMALL} text={'Dalej'}/>
            </div>
        </div>

    }
}