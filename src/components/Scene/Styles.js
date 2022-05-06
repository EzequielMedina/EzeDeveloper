import styled from "styled-components";
import { makeStyles } from '@material-ui/core';
import js from "../../img/js.png";

export const FloatPoint = styled.div`
position: absolute;
top: 50%;
left: 50%;
&:hover:{
    .float-point-text{
        opacity: 1;
        transition: 0.3s all ease;
    };
};
`

export const FloatPointLabel = styled.div`
width: 40px;
height: 40px;
top: 19%;
position: absolute;
left: 49%;
background-color: rgba(0,0,0,0.6);
border-radius: 50%;
color: white;
font-size: 1.2rem;
font-weight: bold;
text-align: center;
line-height: 40px;
cursor: pointer;

&:hover{
    transform: scale(1.1, 1.1)
    background-color: rgba(0,0,0,0.9);
    transition: 0.3s all ease;
};


`

export const FloatPointText = styled.div`

width: 120px;
height: 0px;
position:absolute;
top: 15px;
left: -70px;
background-color:rgba(0,0,0,0.9);
font-size: 1.4rem;
font-weight: bold;
text-align: center;
color: black;
transition: 0.3s all ease;
opacity: 0;    
pointer-events:none;                   
`
