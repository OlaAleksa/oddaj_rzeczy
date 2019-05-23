import React from 'react';
import './Header.scss';
import Button from '../Button.js'
import Decoration from '../Decoration.js'

class Header extends React.Component {

    render() {
        return <div id="header" className="header">
            <div className="header__nav">
                <nav>
                    <ul className="header__nav-login">
                        <li><a href="#">Zaloguj</a></li>
                        <li><a href="#">Załóż konto</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="header__nav-menu">
                        <li><a href="#">Start</a></li>
                        <li><a href="#steps">O co chodzi?</a></li>
                        <li><a href="#about">O nas</a></li>
                        <li><a href="#list">Fundacje i organizacje</a></li>
                        <li><a href="#footer">Kontakt</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header__box">
                <Decoration text={'Zacznij pomogać!'} subText={'Oddaj niechciane rzeczy w zaufane ręcę'}/>
                <div className="header__box-btns">
                    <Button text={'ODDAJ RZECZY'} />
                    <Button text={'ZORGANIZUJ ZBIÓRKĘ'} />
                </div>
            </div>

        </div>
    }
}


export default Header