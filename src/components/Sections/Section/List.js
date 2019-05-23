import React from "react";
import Decoration from "../../Decoration.js";
import "./List.scss"
import Foundations from "./ListFoundations.js"

class List extends React.Component {
    render() {
        return <div id="list" className="list">
            <div className="list__text-container">
                <Decoration text={'Komu pomagamy?'}/>
                <div className="list__text-container-btns">
                    <div className="list__text-container-btns--btn">Fundacjom</div>
                    <div className="list__text-container-btns--btn">Organizacjom pozarządowym</div>
                    <div className="list__text-container-btns--btn">Lokalnym zbiórkom</div>
                </div>
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="list__foundations-container">
                <Foundations
                    headerText={'Dbam o zdrowie'}
                    subHeaderText={'Pomoc osobom znajdującym się w trudnej sytuacji życiowej.'}
                    text={'ubrania, jedzenie, sprzędt AGD, meble, zabawki'}/>
                <Foundations
                    headerText={'Dla dzieci'}
                    subHeaderText={'Pomoc dzieciom z ubogich rodzin.'}
                    text={'ubrania, meble, zabawki'}/>
                <Foundations
                    headerText={'Bez domu'}
                    subHeaderText={'Pomoc dla osób nie posiadających miejsca zamieszkania'}
                    text={'ubrania, jedzenie, ciepłe koce'}/>
            </div>
            <div className="list__pagination-container">
                <p>1 2 3</p>
            </div>
        </div>
    }
}

export default List