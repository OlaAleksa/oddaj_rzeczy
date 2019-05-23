import React from "react";
import './YellowBar.scss';
import Box from './YellowBarBox.js'

class YellowBar extends React.Component {
    render() {
        return <div id="yellow-bar" className="yellow-bar">
            <Box
                number={'10'}
                title={'ODDANYCH WORKÓW'}/>
            <Box
                number={'5'}
                title={'WSPARTYCH ORGANIZACJI'}/>
            <Box
                number={'7'}
                title={'ZORGANIZOWANYCH ZBIÓREK'}/>
        </div>
    }
}

export default YellowBar