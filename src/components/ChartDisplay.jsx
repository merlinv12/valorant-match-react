import React from 'react';
import Timeline from './Timeline.jsx'
import styled from 'styled-components';

const DataDisplayContainer = styled.div`
    width: 1630px;
`

const ChartDisplay = ({display, data}) => {
        if (display === 'summary'){
            return <DataDisplayContainer></DataDisplayContainer>
        }
        else if (display === 'scoreboard'){
            return <DataDisplayContainer></DataDisplayContainer>
        }
        else if (display === 'timeline'){
            return <Timeline data={data} />
        }
        else if (display === 'performance'){
            return <DataDisplayContainer></DataDisplayContainer>
        }
        else {
            return null;
        }
}

export default ChartDisplay;