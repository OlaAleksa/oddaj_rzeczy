import React from "react";
import hands from "./img/hands.png";
import arrow from "./img/arrowdown.png";
import search from "./img/search.png";
import delivery from "./img/delivery.png";
import "./Steps.scss"
import Button from "../../Button";
import Decoration from "../../Decoration.js";
import Step from "./Step.js"

class Steps extends React.Component {
    render() {
        return <div id="steps" className="steps">
            <Decoration text={'Wystarczą 4 proste kroki'}/>
            <div className="steps__box">
                <Step
                    src={hands}
                    alt={'hands'}
                    biggerText={'Wybierz rzeczy'}
                    text={'ubrania, zabawki, sprzęt i inne'}/>
                <Step
                    src={arrow}
                    alt={'arrow'}
                    biggerText={'Spakuj je'}
                    text={'skorzystaj z worków na śmieci'}/>
                <Step
                    src={search}
                    alt={'search'}
                    biggerText={'Zdecyduj komu chcesz pomóc'}
                    text={'wybierz zaufane miejsce'}/>
                <Step
                    src={delivery}
                    alt={'delivery'}
                    biggerText={'Zamów kuriera'}
                    text={'kurier przyjedzie w dogodnym terminie'}/>
            </div>
            <div className="steps__btn">
                <a href="#header">
                    <Button text={'ZORGANIZUJ ZBIÓRKĘ'}/>
                </a>
            </div>
        </div>
    }
}

export default Steps