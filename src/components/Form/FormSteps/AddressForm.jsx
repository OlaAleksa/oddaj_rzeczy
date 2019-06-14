import React from 'react'
import { Button, VARIANT_SMALL } from "../../Button/Button";
import './AddressForm.scss'

export class AddressForm extends React.Component {
    render() {
        return <div className="Form__steps-step">
            <p>Krok 4/4</p>
            <h3>Podaj adres oraz termin odbioru rzeczy przez kuriera:</h3>
            <div className="Form__steps-step--box">
                <form className="smallBox">
                    <div className="position-box">
                        <p>Ulica</p>
                        <input type="text" name="ulica"/><br/>
                    </div>
                    <div className="position-box">
                        <p>Miasto</p>
                        <input type="text" name="miasto"/><br/>
                    </div>
                    <div className="position-box">
                        <p>Kod pocztowy</p>
                        <input type="text" name="kod"/><br/>
                    </div>
                    <div className="position-box">
                        <p>Numer Telefonu</p>
                        <input type="text" name="tel"/>
                    </div>
                </form>
                <form className="smallBox">
                    <div className="position-box">
                        <p>Data</p>
                        <input type="text" name="data"/><br/>
                    </div>
                    <div className="position-box">
                        <p>Godzina</p>
                        <input type="text" name="godzina"/><br/>
                    </div>
                    <div className="position-box">
                        <p>Uwagi dla kuriera</p>
                        <input className='message' type="text" name="uwagi"/>
                    </div>
                </form>
            </div>
            <div className="Form__steps-step--btns">
                <Button variant={VARIANT_SMALL} text={'Cofnij'}/>
                <Button variant={VARIANT_SMALL} text={'Dalej'}/>
            </div>
        </div>

    }
}