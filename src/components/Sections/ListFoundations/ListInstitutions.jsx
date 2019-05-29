import React from "react";
import './ListInstitutions.scss'

export class Institutions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundations: ["jakaś", "jakaś", "jakaś", "jakaś", "jakaś", "jakaś", "jakaś", "jakaś"],
            currentPage: 1,
            foundationsPerPage: 3,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const {foundations, currentPage, foundationsPerPage} = this.state;

        const indexOfLastFoundation = currentPage * foundationsPerPage;
        const indexOfFirstFoundation = indexOfLastFoundation - foundationsPerPage;
        const currentFoundations = foundations.slice(indexOfFirstFoundation, indexOfLastFoundation);

        const renderFoundations = currentFoundations.map((foundation, index) =>{
            return <div key={index} className="list__institutions-container-institutions">
                <div className="box-right">
                    <h3>Fundacja "{foundation}"</h3>
                    <p>Cel i misja: {foundation}</p>
                    <hr/>
                </div>
                <div className="box-left">
                    <p>{foundation}</p>
                    <hr/>
                </div>
            </div>
        });

        const pageNumbers = [];
        for (let i =1; i<= Math.ceil(foundations.length / foundationsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return <div className="list__institutions-container">
                {renderFoundations}
            <ul className="list__pagination-container">
                {renderPageNumbers}
            </ul>
        </div>

    }
}

