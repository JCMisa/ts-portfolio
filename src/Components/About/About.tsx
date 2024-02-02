export default function About()
{
    return(
        <>
            <section className="hero-about">
                <div className="heading-about">
                    <h1>About Me</h1>
                </div>
                <div className="container-about">
                    <div className="hero-content-about">
                        <h2>Welcome To My E-Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maxime eos nihil fugiat culpa sint veritatis. Aliquam suscipit incidunt aspernatur molestiae magnam officiis amet ipsum molestias, quas qui! Voluptates, pariatur.</p>
                        <button className="cta-button-about">Learn More</button>
                    </div>
                    <div className="hero-image-about">
                        <div className="card-about">
                            <div className="card-border-top-about">
                            </div>
                            <div className="img-about">
                            </div>
                            <span> John Carlo S. Misa </span>
                            <p className="job-about"> Student </p>
                            <button className="img-button-about"> Projects
                            </button>
                        </div>
                        {/* <img src={process.env.PUBLIC_URL + "/Images/aboutPageImage.jpg"} alt="about-pic" className="about-img" /> */}
                    </div>
                </div>
            </section>
        </>
    )
}