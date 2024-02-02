import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComputer } from '@fortawesome/free-solid-svg-icons';

type CardsProps = {
    iconClassName : string,
    icon : IconDefinition,
    title : string,
    description : string
}

export default function ProjectCards(props : CardsProps)
{
    return(
        <>
            <div className="card-proj">
                <i className={props.iconClassName}> <FontAwesomeIcon icon={props.icon}/> </i>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </>
    )
}