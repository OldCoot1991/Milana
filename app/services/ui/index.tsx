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
width: auto;
gap: 50px;
margin: 0 auto;
max-width: 1600px;
justify-content: center;
padding: 0 20px;
@media (max-width: 600px) {
    gap: 20px;
}
`

const  CardServices = styled.div`
max-width: 420px;
width: 100%;
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
border-radius: 40px;
box-shadow: 0px 0px 18px 0px rgba(211, 211, 211, 1);
@media (max-width: 600px) {
    max-width: 320px;
    padding: 20px;
}
`

const RigthContainerCards = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
@media (max-width: 780px) {
    gap: 0px;
}
`

const TitleCardServices = styled.h3`
max-width: 268px;
font-size: 24px;
line-height: 120%;
text-align: center;
color: #033234;
margin: 0 auto;
@media (max-width: 600px) {
    font-size: 20px;
}
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
@media (max-width: 600px) {
    font-size: 20px;
}
`

export {SubTitleServices, RigthContainerCards, TitleCardServices, CardServices, ContainerCards, SumTextCardServices, ContainerSumAndButtons, ButtonLinkCardServices};