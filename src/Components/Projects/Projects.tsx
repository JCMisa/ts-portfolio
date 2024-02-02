import ProjectCards from "./ProjectCards"

import "../../index.css";
import { faComputer, faCalculator, faPalette, faTerminal, faMusic, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export default function Projects()
{
    return(
        <>
            <div className="container-proj">
                <div className="service-wrapper-proj">
                    <div className="service-proj">
                        <h1>My Projects <span></span></h1>
                        <div className="cards-proj">
                            <ProjectCards iconClassName="fa-brands fa-chromecast" icon={faComputer} title="Web Development" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

                            <ProjectCards iconClassName="fa-solid fa-layer-group" icon={faCalculator} title="Accounting" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

                            <ProjectCards iconClassName="fa-solid fa-user-group" icon={faPalette} title="Arts" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

                            <ProjectCards iconClassName="fa-solid fa-desktop" icon={faTerminal} title="Programming" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

                            <ProjectCards iconClassName="fa-solid fa-desktop" icon={faMusic} title="Music" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>

                            <ProjectCards iconClassName="fa-solid fa-desktop" icon={faCameraRetro} title="Photography" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}