import "../../index.css"

type FooterLinkProps = {
    link : string,
    name : string
}

export default function FooterLink(props : FooterLinkProps)
{
    return(
        <>
            <li><a href={props.link}>{props.name}</a></li>
        </>
    )
}