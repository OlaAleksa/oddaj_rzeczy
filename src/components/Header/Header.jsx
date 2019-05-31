import React from 'react';

import './Header.scss';
import { Button, VARIANT_BIG } from '../Button/Button.jsx'
import { Decoration } from '../Decoration/Decoration.jsx'
import { UserService } from '../../services/user.service';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.userService = UserService.instance;

        this.state = {
            userLoggedIn: false,
        };
    }

    componentDidMount() {
        //  Sprawdź czy użytkownik jest zalogowany
        this.userService.getUser().then((user) => {
            console.log(user);

            this.setState({
                userLoggedIn: Boolean(user),
            });
        });
    }

    // Nie mamy strony logowania, więc udajemy logowanie ;)
    logIn = () => {
        this.userService.logIn('myusername@gmail.com', 'password123').then(() => {
            window.location.reload();
        });
    };

    logOff = () => {
        return this.userService.logOff().then(() => {
            window.location.reload();
        });
    };

    render() {
        return <div id="header" className="Header">
            <div className="Header__nav">
                <nav>
                    <ul className="Header__nav-login">
                        <li>
                            {
                                this.state.userLoggedIn ?
                                    <a href="#" onClick={this.logOff}>Wyloguj</a> :
                                    <a href="#" onClick={this.logIn}>Zaloguj</a>
                            }
                        </li>
                        <li><a href="#">Załóż konto</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="Header__nav-menu">
                        <li><a href="#">Start</a></li>
                        <li><a href="#steps">O co chodzi?</a></li>
                        <li><a href="#about">O nas</a></li>
                        <li><a href="#list">Fundacje i organizacje</a></li>
                        <li><a href="#footer">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
            <div className="Header__box">
                <Decoration text={['Zacznij pomagać!', 'Oddaj niechciane rzeczy w zaufane ręce']}/>
                <div className="Header__box-btns">
                    <Button variant={VARIANT_BIG} text={'ODDAJ RZECZY'}/>
                    <Button variant={VARIANT_BIG} text={'ZORGANIZUJ ZBIÓRKĘ'}/>
                </div>
            </div>

        </div>
    }
}

