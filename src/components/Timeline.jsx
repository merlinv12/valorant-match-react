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
    width: 1630px;
`

const TimeLineRounds = styled.table`
    grid-area: timeline;
    display:flex;
    justify-content: flex-start;
    border-bottom: solid 1px white;
`
const TimeLineStats = styled.table`
    grid-area: tlstats;
    display: flex;
`

const HalftimeIcon = styled.td`
    display: block;
    content: url("/img/half.svg");
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    width: 30px;
    filter: invert(100%)
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
                            if (round.roundNum < 13){
                                return <TimeLineChart key={index} round={round} selectRound={this.selectRound}/>
                            }
                        })}
                        <HalftimeIcon></HalftimeIcon>
                        {this.state.rounds.map((round, index)=> {
                            if (round.roundNum > 12){
                                return <TimeLineChart key={index} round={round} selectRound={this.selectRound}/>
                            }
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




const TimeLineStatsPlayerRow = styled.tr`

`

export default Timeline;
