import React from "react";
import './ListInstitutions.scss'

export class Institutions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            institutionsType: (this.props.data && this.props.data.id) || '',
            currentPage: 1,
            institutionsTypePerPage: 3,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    render() {
        const {institutionsType, currentPage, institutionsTypePerPage} = this.state;

        const indexOfLastInstitutionType = currentPage * institutionsTypePerPage;
        const indexOfFirstInstitutionType = indexOfLastInstitutionType - institutionsTypePerPage;
        const currentInstitutionsType = institutionsType.slice(indexOfFirstInstitutionType, indexOfLastInstitutionType);

        const renderInstitutionsType = currentInstitutionsType.map((institutionType, index) =>{
            return <div key={index} className="List__institutions-container-institutions">
                <div className="box-right">
                    <h3>{this.props.data.name}"</h3>
                    <p>Cel i misja: {this.props.data.goal}</p>
                    <hr/>
                </div>
                <div className="box-left">
                    <p>{this.props.data.description}</p>
                    <hr/>
                </div>
            </div>
        });

        const pageNumbers = [];
        for (let i =1; i<= Math.ceil(institutionsType.length / institutionsTypePerPage); i++) {
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
        return <div className="List__institutions-container">
                {renderInstitutionsType}
            <ul className="List__pagination-container">
                {renderPageNumbers}
            </ul>
        </div>

    }
}

