import React from 'react';
import './Footer.scss';
import fb from './img/fb.png';
import instagram from './img/instagram.png';
import { Decoration } from "../Decoration.jsx";
import { Form } from './FooterForm.jsx';

export class Footer extends React.Component {

    render() {
        return <div id="footer" className="footer">
            <div className="footer__form">
                <Decoration text={'Skontaktuj się z nami'}/>
                <Form />
            </div>
            <div className="footer__nav">
                <nav>
                    <ul className="footer__nav-menu">
                        <div className="copyright">
                            <li>Copyright 2015 &copy; by Anna Dadej</li>
                        </div>
                        <div className="icons">
                            <li><a href="#"><img src={fb} alt="facebook"/></a></li>
                            <li><a href="#"><img src={instagram} alt="instagram"/></a></li>
                        </div>
                    </ul>
                </nav>
            </div>

        </div>
    }
}
