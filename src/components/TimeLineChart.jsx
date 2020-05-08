import React from 'react';
import Chart from 'chart.js';
import styled from 'styled-components';

const ChartBox = styled.td`
    background-color: rbga(255, 255, 255, .50);
    backdrop-filter: blur(5px);
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,.1);
    font-family: "Montserrat",sans-serif;
    text-transform: uppercase;
    color: white;
    &:hover {
        background-color: white;
        opacity: .3;
        box-shadow: inset 0 0 0 1000px rgba(255,255,255,.3);
    }
    padding: 5px;
`

class TimeLineChart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            roundNum: this.props.round.roundNum,
            greenEcon: this.props.round.greenEcon,
            redEcon: this.props.round.redEcon,
            result: this.props.round.roundVictory + ' ' + this.props.round.resultCondition,
        }
    }

    componentDidMount(){
        this.createChart(this.state.roundNum, this.state.greenEcon, this.state.redEcon);
    }

    createChart(roundNum, greenEcon, redEcon){
        let node = this.node;
        let options = {
            legend: {display: false},
            scales: {
                xAxes: [{
                    display: false, //this will remove all the x-axis grid lines
                    ticks: {
                        display: false //this will remove only the label
                    }
                }],
                yAxes: [{
                    display: false, //this will remove all the y-axis grid lines
                    ticks: {
                        display: true, //this will remove only the label
                        min: 0,
                        max: 25000,
                    }
                }]
            },
            title: {
                display: true,
                text: roundNum < 25 ? roundNum : "OT",
                fontFamily: "Montserrat, sans-serif",
                fontColor: "white",
            }
        }

        let data = {
            labels: ['green', 'red'],
            datasets: [{
                data: [greenEcon, redEcon],
                fillColor: "rgba(220,220,220,0)",
                backgroundColor: ['rgba(84, 146, 131, .8)', 'rgba(179, 83, 84, 0.8)'],
                borderWidth: 1,
                categoryPercentage: .8,
                barPercentage: .8,
                // barThickness: 20,
            }]
        };



        var myChart = new Chart(node, {
          type: "bar",
          data: data,
          options: options,
        })
    }

// 
    render(){
        return (
            <ChartBox>
                <canvas
                    onClick={()=>this.props.selectRound(this.props.round.roundNum)}
                    style={{ width: 50, height: 100}}
                    ref={node => (this.node = node)}
                />
            </ChartBox>
        );
    }     
} 



export default TimeLineChart;
