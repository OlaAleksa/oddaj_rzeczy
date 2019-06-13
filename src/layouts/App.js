import React from 'react';

import './App.scss';
import { Header } from '../components/Header/Header.jsx'
import { Sections } from '../components/Sections/Sections.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { Form } from "../components/Form/Form";

export class App extends React.Component {
    render() {
        return <div className="App">
                <Header/>
                <Form/>
                <Sections/>
                <Footer/>
            </div>
     }
}

