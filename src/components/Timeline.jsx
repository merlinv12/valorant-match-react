import React from 'react';
import TimeLineChart from './TimeLineChart.jsx';

class Timeline extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rounds: this.props.data.rounds
        }
    }

    render(){
        return (
            <div>
                <TimeLineChart />
            </div>
        )
    }
}

export default Timeline;
