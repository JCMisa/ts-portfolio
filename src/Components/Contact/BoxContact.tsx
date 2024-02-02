import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "../../index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type BoxCountData = {
    icon : IconDefinition,
    title : string, 
    content : string
}

export default function BoxContact(props : BoxCountData)
{
    return(
        <>
            <div className="box-contact">
                <div className="icon-contact"> <FontAwesomeIcon icon={props.icon}/> </div>
                <div className="text-contact">
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </>
    )
}