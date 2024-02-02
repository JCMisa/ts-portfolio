import "../../index.css"
import BoxContact from "./BoxContact"
import FormContact from "./FormContact";

import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact()
{
    return(
        <>
            <section className="contact">
                <div className="content-contact">
                    <h2>Contact Me</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum blanditiis rerum labore ex eaque voluptatum dolor eveniet, optio autem dolores.</p>
                </div>

                <div className="container-contact">
                    <div className="contactInfo">

                        <BoxContact icon={faLocationDot} title="Address" content="Laguna, Philippines" />

                        <BoxContact icon={faPhone} title="Phone" content="09071816666" />

                        <BoxContact icon={faEnvelope} title="Email" content="johncarlomisa399@gmail.com" />

                    </div>

                    <div className="contactForm">
                        <FormContact />
                    </div>
                </div>
            </section>
        </>
    )
}