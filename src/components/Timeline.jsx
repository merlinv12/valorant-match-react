import React, {useState} from 'react';
import TimeLineChart from './TimeLineChart.jsx';
import TimeLineStatsTable from './TimeLineStatsTable.jsx';
import styled from 'styled-components';

const TimeLineChartContainer = styled.div`
    display: grid;
    grid-template-rows: minmax(1fr, 130px) 2fr;
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
const TimeLineStatsTableContainer = styled.div`
    grid-area: tlstats;
    display: flex;
    padding-left: 40px;
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


const Timeline = ({data}) => {
    const [selectedRound, setSelectedRound] = useState(1);
    return (
        <TimeLineChartContainer>
            <TimeLineRounds>
                <tbody>
                <tr>
                    {data.rounds.map((round, index)=> {
                        if (round.roundNum < 13){
                            return <TimeLineChart key={index} round={round} selectRound={setSelectedRound} />
                        }
                    })}
                    <HalftimeIcon></HalftimeIcon>
                    {data.rounds.map((round, index)=> {
                        if (round.roundNum > 12){
                            return <TimeLineChart key={index} round={round} selectRound={setSelectedRound} />
                        }
                    })}
                </tr>
                </tbody>
            </TimeLineRounds>
            <TimeLineStatsTableContainer>
                <TimeLineStatsTable round={data.rounds[selectedRound-1]}/>
            </TimeLineStatsTableContainer>
        </TimeLineChartContainer>
    )
}

export default Timeline;
