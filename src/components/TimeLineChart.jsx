import React from 'react';
import Chart from 'chart.js';

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
                        max: 12000,
                    }
                }]
            },
            title: {
                display: true,
                text: roundNum
            }
        }

        let data = {
            labels: ['green', 'red'],
            datasets: [{
                data: [greenEcon, redEcon],
                fillColor: "rgba(220,220,220,0)",
                backgroundColor: ['rgba(0, 128, 0, 0.6)', 'rgba(128, 0, 0, 0.6)'],
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
            <td>
                <canvas
                    style={{ width: 80, height: 150}}
                    ref={node => (this.node = node)}
                />
                <span>{this.state.result}</span>
            </td>
        );
    }     
} 



export default TimeLineChart;
