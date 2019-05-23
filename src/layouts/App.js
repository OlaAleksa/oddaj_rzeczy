import React from 'react';
import './App.scss';
import Header from '../components/Header/Header.js'
import Sections from '../components/Sections/Sections.js'
import Footer from '../components/Footer/Footer.js'

class App extends React.Component {
    render() {
        return (<div className="App">
            <Header />
            <Sections />
            <Footer />
            </div>
        )
    }
}

export default App;
