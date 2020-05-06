import React from 'react';
import styled from 'styled-components';
import ChartDisplay from './ChartDisplay.jsx';
import fakeData from '../data.js';

const MatchBackground = styled.div`
    background-image: url("/img/valorantbackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 1400px;
    height: 720px;
`
const MatchGrid = styled.div`
    backdrop-filter: blur(10px) contrast(.8);
    display: grid;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 1fr, 1fr, 4fr, 1fr, 1fr;
    grid-row-gap: 40px;
    grid-template-areas:
    ". . Scorebox Scorebox  . ."
    ".  data data data data .";
    width: 1400px;
    height: 720px;
`

const ScoreBox = styled.div`
    grid-area: Scorebox;
    display: grid;
    font-family: "Montserrat",sans-serif;
    text-transform: uppercase;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

const RedScore = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 3em;
    margin-bottom: -100px;
`

const GreenScore = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 3em;
    margin-bottom: -100px;
    
`

const MatchOutcome = styled.div`
    grid-column: 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: -100px;

`

const TabButton = styled.button`
    &:hover {
        background-color: rgba(255, 255, 255, .2);
    }
    ${props => {
        if (props.selected){
            return `
            border-bottom: solid .2em  #f8d05d;
            &:after {
                border-right: solid 1em transparent;
                border-left: solid 1em  transparent;
                border-bottom: solid .7em  #f8d05d;
                transform: translateX(-50%);
                position: absolute;
                z-index: 1;
                content: "";
                top: 100%;
                left: 50%;
                height: 0;
                width: 0;
                margin-top: -.6em;
              }
            `
        }
    }}
    background-color: rgba(0, 0, 0, 0);
    outline:none;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: "Montserrat",sans-serif;
    text-transform: uppercase;
    color: white;
    font-size: 1em;
    letter-spacing: 0.2em;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: ${props => props.selected ? "solid .2em #f8d05d" : "solid .1em"};
    position: relative;
`

const DataContainer = styled.div`
    grid-area: data;
    justify-self: center;
    align-self: center;
    min-width:1080px;
    min-height: 400px;
    // box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
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
                        <TabButton id='summary' onClick={(e) => this.displayTab(e)} selected={this.state.displayTab === 'summary'}>Summary</TabButton>
                        <TabButton id='scoreboard' onClick={(e) => this.displayTab(e)} selected={this.state.displayTab === 'scoreboard'}>Scoreboard</TabButton>
                        <TabButton id='timeline' onClick={(e) => this.displayTab(e)} selected={this.state.displayTab === 'timeline'}>Timeline</TabButton>
                        <TabButton id='performance' onClick={(e) => this.displayTab(e)} selected={this.state.displayTab === 'performance'}>Performance</TabButton>
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
