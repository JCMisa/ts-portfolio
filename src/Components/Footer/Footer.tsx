import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../index.css"
import FooterLink from "./FooterLink"
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer()
{
    return(
        <>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row-footer">

                        <div className="footer-col">
                            <h4>portfolio</h4>
                            <ul>
                                <FooterLink link="##" name="about me" />
                                <FooterLink link="##" name="our services" />
                                <FooterLink link="##" name="privacy policy" />
                                <FooterLink link="##" name="affiliate program" />
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <FooterLink link="##" name="FAQ" />
                                <FooterLink link="##" name="commission" />
                                <FooterLink link="##" name="errors" />
                                <FooterLink link="##" name="service status" />
                                <FooterLink link="##" name="payment options" />
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>online projects</h4>
                            <ul>
                                <FooterLink link="##" name="web dev" />
                                <FooterLink link="##" name="programming" />
                                <FooterLink link="##" name="accounting" />
                                <FooterLink link="##" name="arts" />
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>follow me</h4>
                            <div className="social-links-footer">
                                <a href="##"><FontAwesomeIcon icon={faFacebook}/></a>
                                <a href="##"><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="##"><FontAwesomeIcon icon={faGithub}/></a>
                                <a href="##"><FontAwesomeIcon icon={faTwitter}/></a>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}