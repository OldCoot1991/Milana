"use client";

import styled from "styled-components";

const ButtomDownload = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 30px;
  background-size: cover;
  border: 0;
  cursor: pointer;
`;

const ContainerDocumentsContent = styled.div`
    width: 100%;
    border-bottom: 1px solid #0DB0B8;
    margin-bottom: 20px;
    padding-bottom: 20px;
    max-width: 1530px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TitleDocuments = styled.span`
font-size: 32px;
line-height: 120%;
text-align: left;
`
const ContainerDocument = styled.div`
    display: flex;
    gap: 40px;
`


const ButtonLook = styled.button`
    display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 30px;
  background-size: cover;
  border: 0;
  cursor: pointer;
  background-color: transparent;
`
export  {ButtomDownload , ContainerDocumentsContent , Container , TitleDocuments, ContainerDocument , ButtonLook};
