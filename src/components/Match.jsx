import React from 'react';
import styled from 'styled-components';
import ChartDisplay from './ChartDisplay.jsx';
import fakeData from '../data.js';

//colors
//green HTML/HEX code:	#549283	
// RGB code:	rgb(84, 146, 131)

//yellow 
// HTML/HEX code:	#eaeeb1	
// RGB code:	rgb(234, 238, 177)

// red
// HTML/HEX code:	#b35354	
// RGB code:	rgb(179, 83, 84)



const MatchBackground = styled.div`
    background-image: url("/img/valorantbackground.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    filter: blur(10px) contrast(.8);
    width: 110vw;
    height: 120vh;
`
const MatchGrid = styled.div`
    // backdrop-filter: blur(10px) contrast(.8);
    display: grid;
    grid-template-rows: minmax(300px, 300px) 2fr;
    grid-template-columns: 1fr, 1fr, 4fr, 1fr, 1fr;
    grid-template-areas:
    ". . Scorebox Scorebox  . ."
    ".  data data data data .";
    width: 100vw;
    height: 100vh;
`

const ScoreBox = styled.div`
    grid-area: Scorebox;
    display: grid;
    font-family: "Montserrat",sans-serif;
    text-transform: uppercase;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 50px;
    width: 720px;
    height: 210px;
`

const RedScore = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 2.5em;
    margin-bottom: -100px;
    color: #b35354;
`

const GreenScore = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 2.5em;
    margin-bottom: -100px;
    color: #549283;
`

const MatchOutcome = styled.div`
    grid-column: 2 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-weight: bold;
    margin-bottom: -100px;
    color: #eaeeb1;
`

const TabButton = styled.button`
    &:hover {
        background-color: rgba(255, 255, 255, .2);
    }
    ${props => {
        if (props.selected){
            return `
            &:after {
                border-right: solid 1em transparent;
                border-left: solid 1em  transparent;
                border-bottom: solid .7em  #eaeeb1;
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
    border-bottom: ${props => props.selected ? "solid .2em #eaeeb1" : "solid .1em"};
    position: relative;
`

const DataContainer = styled.div`
    grid-area: data;
    justify-self: center;
    align-self: center;
    // min-width:1080px;
    // min-height: 400px;
    // box-shadow: inset 0 0 0 1000px rgba(0,0,0,.2);
    top: 0px
    left: 0px;
    height: 100%;
    width: 100%;
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
            <div>
                <MatchBackground></MatchBackground>
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
            </div>
        )
    }
}

export default Match;
