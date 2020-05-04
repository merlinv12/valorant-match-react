import React from 'react';
import Chart from 'chart.js';

class TimeLineChart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            roundNum: 1,
            greenEcon: 1000,
            redEcon: 1000,
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
                        display: false, //this will remove only the label
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
            <div>
                <canvas
                    style={{ width: 200, height: 200}}
                    ref={node => (this.node = node)}
                />
            </div>
        );
    }     
} 



export default TimeLineChart;
