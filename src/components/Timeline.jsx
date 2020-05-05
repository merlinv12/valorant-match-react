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
                <table>
                    <tbody>
                    <tr>
                        {this.state.rounds.map((round, index)=> {
                            return <TimeLineChart key={index} round={round} />
                        })}
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Timeline;
