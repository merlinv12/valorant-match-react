import React from 'react';
import Timeline from './Timeline.jsx'

const ChartDisplay = ({display, data}) => {
        if (display === 'summary'){
            return <div>summary</div>
        }
        else if (display === 'scoreboard'){
            return <div>scoreboard</div>
        }
        else if (display === 'timeline'){
            return <Timeline data={data} />
        }
        else if (display === 'performance'){
            return <div>performance</div>
        }
        else {
            return null;
        }
}

export default ChartDisplay;