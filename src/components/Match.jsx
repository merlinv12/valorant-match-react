import React from 'react';
import styled from 'styled-components';
import ChartDisplay from './ChartDisplay.jsx';
import fakeData from '../data.js';

const MatchBackground = styled.div`
    background-image: url("/img/valorantbackground.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`
const MatchGrid = styled.div`
    backdrop-filter: blur(10px) contrast(.8);
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr, 1fr, 2fr, 1fr, 1fr;
    grid-row-gap: 40px;
    grid-template-areas:
    ". . Scorebox Scorebox  . ."
    ".  data data data data .";
`

const ScoreBox = styled.div`
    grid-area: Scorebox;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const RedScore = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 2em;
`

const GreenScore = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2em;
    
`

const MatchOutcome = styled.div`
    grid-column: 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: bold;
`

const TabButton = styled.button`
    background-color: Transparent;
    background-repeat:no-repeat;
    cursor:pointer;
    overflow: hidden;
    outline:none;
`

const DataContainer = styled.div`
    grid-area: data;
    justify-self: center;
    align-self: center;
    max-width: 1080px;
    font-size: 30px;
`


class Match extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayTab: 'timeline',
            data: fakeData
        };
    }

    displayTab(e){
        this.setState({ displayTab: e.target.id})
    }

    render(){
        const { greenTeamRoundWins, redTeamRoundWins } = this.state.data;
        return (
            <MatchBackground>
                <MatchGrid>
                    <ScoreBox>
                        <GreenScore>{greenTeamRoundWins}</GreenScore>
                        { greenTeamRoundWins > redTeamRoundWins ? <MatchOutcome>Victory</MatchOutcome> : <MatchOutcome>Defeat</MatchOutcome> }
                        <RedScore>{redTeamRoundWins}</RedScore>
                        <TabButton id='summary' onClick={(e) => this.displayTab(e)}>Summary</TabButton>
                        <TabButton id='scoreboard' onClick={(e) => this.displayTab(e)}>Scoreboard</TabButton>
                        <TabButton id='timeline' onClick={(e) => this.displayTab(e)}>Timeline</TabButton>
                        <TabButton id='performance' onClick={(e) => this.displayTab(e)}>Performance</TabButton>
                    </ScoreBox>
                    <DataContainer>
                        <ChartDisplay display={this.state.displayTab} data={this.state.data} />
                    </DataContainer>
                </MatchGrid> 
            </MatchBackground>
        )
    }
}

export default Match;
