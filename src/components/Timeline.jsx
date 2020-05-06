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
    "chart chart";
`

const TimeLineTable = styled.table`
    grid-area: timeline;
    display:flex;
    justify-content: start;

`


class Timeline extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rounds: this.props.data.rounds
        }
    }

    render(){
        return (
            <TimeLineChartContainer>
                <TimeLineTable>
                    <tbody>
                    <tr>
                        {this.state.rounds.map((round, index)=> {
                            return <TimeLineChart key={index} round={round} />
                        })}
                    </tr>
                    </tbody>
                </TimeLineTable>
            </TimeLineChartContainer>
        )
    }
}

export default Timeline;
