import React from 'react'
import { Button, VARIANT_SMALL } from "../../Button/Button";
import './SummaryForm.scss'

export class SummaryForm extends React.Component {
    render() {
        return  <div className="Form__steps-step">
            <p>Krok 3/4</p>
            <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h3>
            <div className="Form__steps-step--box">
                <form className="smallBox">
                    Ulica <input type="text" name="ulica"/><br/>
                    Miasto <input type="text" name="miasto"/><br/>
                    Kod pocztowy <input type="text" name="kod"/><br/>
                    Numer Telefonu <input type="text" name="tel"/><br/>
/                </form>
                <form className="smallBox">
                    Data <input type="text" name="data"/><br/>
                    Godzina <input type="text" name="godzina"/><br/>
                    Uwagi dla kuriera <input type="text" name="uwagi"/><br/>
                </form>
            </div>
            <div className="Form__steps-step--btns">
                <Button variant={VARIANT_SMALL} text={'Cofnij'}/>
                <Button variant={VARIANT_SMALL} text={'Dalej'}/>
            </div>
        </div>

    }
}