import React from 'react';
import './FooterForm.scss';
import { Button } from "../Button/Button.jsx";
import { VARIANT_SMALL } from "../Button/Button.jsx";

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
        name_incorrect: 'Uzupełnij pole "Imię"',
        email_incorrect: 'Nieprawidłowy adres email',
        message_incorrect: 'Uzupełnij pole "Napisz wiadomość"',
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
        let name = false;
        let email= false;
        let message = false;
        let correct = false;

        if(this.state.name !== '') {
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

        return <form>
            <label>FORMULARZ KONTAKTOWY</label><br/>
            <input type='text' name='name' placeholder= {this.state.errors.name? this.messages.name_incorrect : 'Imię'} value={this.state.name}
                   onChange={this.handleChange}/>
            <input type='email' name='email' placeholder={this.state.errors.email? this.messages.email_incorrect : 'Email'} value={this.state.email}
                   onChange={this.handleChange}/><br/>
            <input type='textarea' name='message' placeholder={this.state.errors.message? this.messages.message_incorrect : 'Wiadomość'} value={this.state.message}
                   onChange={this.handleChange}/><br/>
            <Button variant={VARIANT_SMALL} text={'Wyślij'} onClick={this.handleOnSubmit}/>
        </form>
    }
}