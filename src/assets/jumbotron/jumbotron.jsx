import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import playita from './playita.jpeg'

const Styles = styled.div`
.jumbotron {
    background: url(${playita}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 240px;
    position: relative;
    z-index:-2;
}

.overlay {
    background-color: #0400;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
}
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            <h1>Welcome</h1>
            <p>learn to code from youtube</p>

            </Container>
        </Jumbo>
    </Styles>
);
