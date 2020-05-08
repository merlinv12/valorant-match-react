import React from 'react';
import styled from 'styled-components';

const TLRoundTable = styled.table`
    border-collapse:separate; 
    border-spacing: 0 .2em;
    width: 700px;
    padding-top: 20px;
    padding-bottom: 20px;
`
const TLTableTitle = styled.caption`
    text-transform: uppercase;
    font-family: "Montserrat",sans-serif;
    color: white;
    font-size: 1.5em;
    text-align: left;
`
const TLTableTitleResult = styled.span`
    color: ${(props) => props.win === 'green' ? "rgba(84, 146, 131)" : "rgba(179, 83, 84)"};
`

const TLTableHead = styled.thead`
    text-transform: uppercase;
    font-family: "Montserrat",sans-serif;
    color: gray;
`
const TLPlayerRow = styled.tr`
    text-transform: capitalize;
    font-family: "Montserrat",sans-serif;
    color: white;
    border-collapse: collapse;
    background-color: ${(props) => props.index < 5 ? "rgba(84, 146, 131, .8)" : "rgba(179, 83, 84, .8)"}
`

const TimeLineStatsTable = ({round}) => {
    return (
        <TLRoundTable>
            <TLTableTitle><span>Round {round.roundNum}</span> | <TLTableTitleResult win={round.roundVictory}>{round.resultCondition} {round.roundVictory === 'green' ? "Win" : "Loss"}</TLTableTitleResult></TLTableTitle>
            <TLTableHead><td>Player</td><td>Score</td><td>K</td><td>A</td><td>Econ</td><td>equip</td></TLTableHead>
            <tbody>
                {round.players.map((player, index)=> {
                    return (<TLPlayerRow index={index}>
                                <td>
                                    <div>{player.playerName}</div>
                                    <div>{player.agent}</div>
                                </td>
                                <td>{player.score}</td>
                                <td>{player.kills}</td>
                                <td>{player.assists}</td>
                                <td>
                                    <div>{player.econLoadout}</div>
                                    <div>{player.econBank}</div>
                                </td>                                <td>
                                    <div>{player.equip.gun}</div>
                                    <div>{player.equip.shield}</div>
                                </td>
                            </TLPlayerRow>)})}
            </tbody>
        </TLRoundTable>
    )
}


export default TimeLineStatsTable;