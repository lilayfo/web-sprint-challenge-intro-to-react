// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StarStyle = styled.div
`
display:flex;
justify-content:center;
`

const StarStyleBox = styled.div
`
margin:10% 15% 0;
background-color:blue;
border: solid black 5px;
border-radius:10%
`

const Character = props => {
    const {info} = props
    return (
        <StarStyle>

            <h1>{ info.name }</h1>

        </StarStyle>
    )
}

export default Character;