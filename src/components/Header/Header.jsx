import React from 'react';

import './Header.scss';
import { Button, VARIANT_BIG } from '../Button/Button.jsx';
import { Decoration } from '../Decoration/Decoration.jsx';
import { UserService } from '../../services/user.service';
import settings from './img/settings.png';

export class Header extends React.Component {
    constructor(props) {
        super(props);

        this.userService = UserService.instance;

        this.state = {
            userLoggedIn: false,
            dropDownMenuVisible: false,
            active: false,
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

    showMenu = () => {
        this.setState({
            dropDownMenuVisible: true,
        });
    };

    hideMenu = () => {
        if (this.state.dropDownMenuVisible) {
            this.setState({
                dropDownMenuVisible: false,
            });
        }
    };

    handleClick = () => {
        this.setState({
            active: true,
        })
    };

    render() {
        return <div id="header" className={'Header' + (this.state.active && this.state.userLoggedIn ? ' Logged' : '' )}>
            <div className="Header__nav">
                {
                    this.state.userLoggedIn ?
                        <nav>
                            <ul className="Header__nav-login" onClick={this.hideMenu}>
                                <li>Witaj Aleksandra</li>
                                <img src={settings} alt={"settings"} onClick={this.showMenu}/>
                            </ul>

                            <ul className={'drop-down-menu' + (this.state.dropDownMenuVisible ? '--active' : '')}>
                                <li>Profil</li>
                                <li>Ustawienia</li>
                                <li>Moje zbiórki</li>
                                <li onClick={this.logOff}>Wyloguj</li>
                            </ul>
                        </nav>
                        :
                        <nav>
                            <ul className="Header__nav-login">
                                <li><a href="#" onClick={this.logIn}>Zaloguj</a></li>
                                <li><a href="#">Załóż konto</a></li>
                            </ul>
                        </nav>
                }
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
            <div className={"Header__box"  + (this.state.active && this.state.userLoggedIn ? ' margin' : '' )}>
                <Decoration text={(this.state.active && this.state.userLoggedIn ? ['Oddaj rzeczy których już nie chcesz POTRZEBUJĄCYM'] : ['Zacznij pomagać!', 'Oddaj niechciane rzeczy w zaufane ręce'])}/>
                {this.state.active && this.state.userLoggedIn ?
                    <div className="Header__box-btns">
                        <div className="Header__box-btns--square">
                            <p>1</p>
                            <p>Wybierz rzeczy</p>
                        </div>
                        <div className="Header__box-btns--square">
                            <p>2</p>
                            <p>Spakuj je w worki</p>
                        </div>
                        <div className="Header__box-btns--square">
                            <p>3</p>
                            <p>Wybierz fundację</p>
                        </div>
                        <div className="Header__box-btns--square">
                            <p>4</p>
                            <p>Zamów kuriera</p>
                        </div>
                    </div>
                    :
                    <div className="Header__box-btns">
                        <Button variant={VARIANT_BIG} text={'ODDAJ RZECZY'} onClick={this.handleClick}/>
                        <Button variant={VARIANT_BIG} text={'ZORGANIZUJ ZBIÓRKĘ'}/>

                    </div>
                }
            </div>

        </div>
    }
}

