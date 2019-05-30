import React from 'react';

import './FooterForm.scss';
import { Button } from "../Button/Button.jsx";
import { VARIANT_SMALL } from "../Button/Button";

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",

            errors: {
                name: false,
                email: false,
                message: false,
            }
        }
    }

    messages = {
        name_incorrect: "Wpisz imię",
        email_incorrect: "Wpisz email",
        message_incorrect: "Napisz wiadomość",
    };

    handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                this.setState({
                    name: e.target.value,
                });
                break;
            case 'email':
                this.setState({
                    email: e.target.value,
                });
                break;
            case 'message':
                this.setState({
                    message: e.target.value,
                });
                break;
            default:
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                });
        }
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const validation = this.formValidation();
        console.log(validation);

        if (validation.correct) {
            this.setState({
                name: "",
                email: "",
                message: "",

                errors: {
                    name: false,
                    email: false,
                    message: false,
                }
            });
            console.log("formularz wysłany")
        } else {
            this.setState({
                errors: {
                    name: !validation.name,
                    email: !validation.email,
                    message: !validation.message,
                }
            })
        }
    };


    formValidation = () => {
        debugger;
        let name = false;
        let email= false;
        let message = false;
        let correct = false;

        if (this.state.name !== '') {
            name = true;
        }

        if(this.state.email !== '' && this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if(this.state.message !== '') {
            message = true;
        }

        if(name && email && message) {
            correct = true;
        }

        return ({
            name,
            email,
            message,
            correct,
        })
    };


    render() {
        return <form onSubmit={e => e.preventDefault()}>
            <label>FORMULARZ KONTAKTOWY</label><br/>
            <input type='text' name='name' placeholder='Imię' value={this.state.name}
                   onChange={this.handleChange}/>
            {this.state.errors.name && <span>{this.messages.name_incorrect}</span>}
            <input type='email' name='email' placeholder='Email' value={this.state.email}
                   onChange={this.handleChange}/><br/>
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
            <input type='textarea' name='message' placeholder='Wiadomość' value={this.state.message}
                   onChange={this.handleChange}/><br/>{this.state.errors.message &&
        <span>{this.messages.message_incorrect}</span>}
            <Button variant={VARIANT_SMALL} text={'Wyślij'} onClick={this.handleOnSubmit}/>
        </form>
    }
}
