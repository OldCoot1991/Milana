"use client"

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Telegram from "./Telegram.svg"
import Instagram from "./Instagram.svg"
import Vk from "./vk.svg"
export default function ContentLinkSoc() {
    return(
   <Div>
    <Link href={""}><ImageIcons src={Telegram} alt={"Telegram"} /></Link>
    <Link href={""}><ImageIcons src={Instagram} alt={""} /></Link>   
    <Link href={""}><ImageIcons src={Vk} alt={""} /></Link>
   </Div>
 );
}



const Div = styled.div`
display: flex;
flex-wrap: wrap;
gap: 40px;
margin-top: 30px;
margin-bottom: 30px;
@media (max-width: 900px) {
 gap: 30px ;
}
`
const ImageIcons = styled(Image)`
@media (max-width: 900px) {
    width: 50px;
    height: 50px;
}
`