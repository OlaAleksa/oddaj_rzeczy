import React from 'react';
import './App.scss';
import { Header } from '../components/Header/Header.jsx'
import { Sections } from '../components/Sections/Sections.jsx'
import { Footer } from '../components/Footer/Footer.jsx'

export class App extends React.Component {
    render() {
        return (<div className="App">
            <Header />
            <Sections />
            <Footer />
            </div>
        )
    }
}


