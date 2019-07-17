import React from 'react'; 
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
    background-color: #ff0000;
    cursor: pointer;
    font-size: 20px; 
    width: 320px; 
    padding: 20px; 
    border-radius: 5px; 
    border: none; 
    outline: none; 
    &:hover { 
        color: #fff; 
    } 
    &:active { 
        : relative; 
        top: 2px; 
    }
    @media (max-width: 480px) { 
        width: 160px; 
    }  
`;

ReactDOM.render(
  <Button>Button</Button>, document.body
);