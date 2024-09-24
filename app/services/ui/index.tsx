"use client"
import styled from "styled-components";

const SubTitleServices = styled.h2`
    font-size: 32px;
    color: #D8135A;
    text-align: center;
    margin: 40px auto;
`
const ContainerCards = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`

const  CardServices = styled.div`
width: 496px;
height: 260px;
padding: 30px;
display: flex;
box-sizing: border-box;
`

const RigthContainerCards = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const TitleCardServices = styled.h3`
width: 268px;
font-size: 24px;
line-height: 120%;
text-align: center;
color: #033234;
margin: 0 auto;
`



const ContainerSumAndButtons = styled.div`
display: flex;
flex-direction: column;
gap: 19px;
align-items: center;
`
const SumTextCardServices = styled.p`
font-size: 24px;
line-height: 120%;
text-align: center;
color: #033234;
margin: 0 auto;
`

const ButtonLinkCardServices = styled.a`
cursor: pointer;
display: flex;
padding: 10px 20px;
background-color: #0DB0B8;
color: #FFFFFF;
font-size: 20px;
line-height: 120%;
border-radius: 40px;
`

export {SubTitleServices, RigthContainerCards, TitleCardServices, CardServices, ContainerCards, SumTextCardServices, ContainerSumAndButtons, ButtonLinkCardServices};