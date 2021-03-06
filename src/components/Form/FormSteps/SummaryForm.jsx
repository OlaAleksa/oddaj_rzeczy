import React from 'react';
import { Button, VARIANT_SMALL } from "../../Button/Button";
import './SummaryForm.scss';
import hand from './img/hand.png'
import bag from './img/bag.png'

export class SummaryForm extends React.Component {
    render() {
        return <div className="Form__steps-step">
            <h3>Podsumowanie Twojej darowizny</h3>
            <p>Oddajesz:</p>
            <div className="Form__steps-step--icon">
                <img src={bag}/>
                <p>4 worki ubrań w dobrym stanie dla dzieci</p>
            </div>
            <div className="Form__steps-step--icon">
                <img src={hand}/>
                <p>Dla fundacji "Mam marzenie" w Warszawie</p>
            </div>
            <div className="Form__steps-step--box">
                <form className="smallBox">
                    <p>Adres odbioru</p>
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
                    <p>Termin odbioru</p>
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
                <Button variant={VARIANT_SMALL} text={'Wstecz'}/>
                <Button variant={VARIANT_SMALL} text={'Potwierdzam'}/>
            </div>
        </div>
    }
}