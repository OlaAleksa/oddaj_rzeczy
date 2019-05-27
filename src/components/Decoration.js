import React from 'react';
import './Decoration.scss';
import decoration from "./img/decoration.png";

export class Decoration extends React.Component{
    render() {
        let texts = [];
        if (!Array.isArray(this.props.text)) {
            texts.push(this.props.text);
        } else {
            texts = [...this.props.text];
        }

        return <div className="Decoration">
            {
                texts.map((text) => <p className='Decoration__paragraph'>{text}</p>)
            }
            <img className='Decoration__img' src={decoration} alt="decoration"/>
        </div>
    }
}
