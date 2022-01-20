import styled from "styled-components";
import React from 'react';

const LineComponent = styled.div`
    border-bottom:3px solid #757575;
    width:100%
`

function Line(props) {
    return (
            <LineComponent/>
    );
}

export default Line;