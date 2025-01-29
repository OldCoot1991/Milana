import styles from "../styles/button_link_services.module.css"

interface ButtonLinkServicesProps {
    href: string
    /** Button contents */
    children: string;
}

/** ButtonLink UI component for user interaction */
export function ButtonLinkServices(props: ButtonLinkServicesProps) {
    return <a href={props.href} target="_blank" className={styles.button_link}>{props.children}</a>
}