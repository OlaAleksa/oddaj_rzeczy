import React from 'react';

import {Decoration} from '../../Decoration/Decoration.jsx'
import './ThanksForm.scss'

export class ThanksForm extends React.Component {
    render() {
        return <div className='ThanksText'>
            <Decoration text={['Dziękujemy za przesłanie formularza.', 'Na maila prześlemy wszelkie informacje o odbiorze.']}/>
        </div>
    }
}