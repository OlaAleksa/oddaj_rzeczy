import React from 'react';

import './Form.scss';
// import CheckboxesGroup from "./FormSteps/CheckboxForm";
// import {ThanksForm} from "./FormSteps/ThanksForm";
// import SimpleSelect from "./FormSteps/SelectForm.jsx"
// import InstitutionSelect from "./FormSteps/InstitutionSelectForm.jsx"
// import {InstitutionListForm} from "./FormSteps/InstitutionListForm.jsx"
import {SummaryForm} from "./FormSteps/SummaryForm.jsx";
// import { AddressForm } from "./FormSteps/AddressForm";




export class Form extends React.Component {
    render() {
        return <div className="Form">
            <div className="Form__message">
                <h4>Ważne!</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, massa sed molestie convallis, mi nibh dapibus dui, non sagittis lorem lectus a nibh. Sed sed molestie purus.</p>
            </div>
            <div className="Form__steps">
                    {/*<CheckboxesGroup/>*/}
                    {/*<ThanksForm/>*/}
                    {/*<SimpleSelect text={'Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ'}/>*/}
                    {/*<InstitutionSelect/>*/}
                    {/*<InstitutionListForm/>*/}
                    <SummaryForm/>
                    {/*<AddressForm/>*/}
            </div>
        </div>
    }
}
