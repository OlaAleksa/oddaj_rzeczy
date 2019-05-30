import React from "react";
import './YellowBar.scss';
import { Box } from './YellowBarBox.jsx'
// import { ActionsService } from "../../../services/action.service";

export class YellowBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         bags: 0,
    //         organizations: 0,
    //         collection: 0,
    //     };
    // }
    // componentDidMount() {
    //
    //
    // }
    render() {
        return <div id="yellow-bar" className="Yellow-bar">
            <Box
                number={'10'}
                title={'ODDANYCH WORKÓW'}/>
            <Box
                number={'7'}
                title={'WSPARTYCH ORGANIZACJI'}/>
            <Box
                number={'9'}
                title={'ZORGANIZOWANYCH ZBIÓREK'}/>
        </div>
    }
}


