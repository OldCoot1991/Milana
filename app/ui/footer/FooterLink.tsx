import styled from "styled-components"

interface Props {
    href: string,
    title: string,
    key: number,
}


export const FooterLink = ({...props}: Props) => {
    return (
        <Link href={props.href} className="Roboto-Regular" key={props.key}>
            {props.title}
        </Link>
    )
}

const Link = styled.a`
    font-size: calc(32px + (32 - 32) * ((100vw - 768px) / (1920 - 768)));
    line-height: 120%;
    letter-spacing: 0.44px;
    color: #FFFFFF;
    @media (max-width: 768px) {
        font-size: calc(18px + (32 - 18) * ((100vw - 360px) / (768 - 360)));
    }
`