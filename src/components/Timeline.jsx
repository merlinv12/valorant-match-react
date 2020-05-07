import React from 'react';
import TimeLineChart from './TimeLineChart.jsx';
import styled from 'styled-components';

const TimeLineChartContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr, 1fr;
    grid-row-gap: 10px;
    grid-template-areas:
    "timeline timeline"
    "tlstats events";
`

const TimeLineRounds = styled.table`
    grid-area: timeline;
    display:flex;
    justify-content: flex-start;

`
const TimeLineStats = styled.table`
    grid-area: tlstats;
    display: flex;
`

class Timeline extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rounds: this.props.data.rounds,
            selectedRound: null,
        }
        this.selectRound = this.selectRound.bind(this);
    }

    selectRound(roundNum){
        this.setState({
            selectedRound: roundNum
        })
    }

    render(){
        return (
            <TimeLineChartContainer>
                <TimeLineRounds>
                    <tbody>
                    <tr>
                        {this.state.rounds.map((round, index)=> {
                            return <TimeLineChart key={index} round={round} selectRound={this.selectRound}/>
                        })}
                    </tr>
                    </tbody>
                </TimeLineRounds>
                <TimeLineStats>
                    <thead>{this.state.selectedRound}</thead>
                </TimeLineStats>
            </TimeLineChartContainer>
        )
    }
}

export default Timeline;
