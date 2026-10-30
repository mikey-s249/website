import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import RasteriserImg from "../assets/Images/Rasteriser/Cube Orthographic.png"
import GlitchNoteImg from "../assets/Images/GlitchNote/logo.png"
import SorterImg from "../assets/Images/Sorter/Bubble.png"
import PlaceholderImg from "../assets/Images/placeholder.png"
import MonopolyImg from "../assets/Images/Monopoly/Monopoly.png"


export default function Home(){

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-primary">
                <div className="container">
                    <a href="#intro" className="navbar-brand">
                        <span className="fw-bold text-light">
                            Michael
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#Projects" className="nav-link">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contacts" className="nav-link">Contacts</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>



            <section id="intro">

                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-5 m-5 text-center">
                            <h1>Michael Stamford</h1>
                            <p className="lead">Hi, I am Michael. I am a computer science graduate from the University of Manchester. This is my website that I use to showcase the development of and document the various projects I have worked on over the years</p>
                        </div>
                    </div>
                </div>
                
            </section>

            <section id="Projects" className="bg mt-5">
                <div class="container-lg">
                    <div class="text-center">
                        <h2>Projects</h2>
                        {/* <!-- <p class="lead text-muted">Here are some of the projects I have made</p> --> */}
                    </div>

                    <div class="row my-5 align-items-center justify-content-between">
                        <ProjectCard img={RasteriserImg} to="/rasteriser" title="Software Rasteriser" description="An implementation of rendering and rasterisation techniques in C++" />

                        <ProjectCard img={GlitchNoteImg} to="/glitchnote" title="GlitchNote" description="Startup I founded to produce mobile games" />

                        <ProjectCard img={SorterImg} to="/sorter" title="Sorting Visualiser" description="A simple Python application that shows visualisations for different sorting algorithms" />

                        <ProjectCard img={PlaceholderImg} to="/home-server" title="Home Server" description="A Nextcloud server self hosted on my own hardware" />

                        <ProjectCard img={MonopolyImg} to="/python-monopoly" title="Python Monopoly" description="My NEA for A-Level Computer Science" />
                    </div>
                </div>

                {/* <Link to="/rasteriser" >Rasteriser</Link> */}
                
            </section>

            <section className="bg-secondary" id="Contacts">

                <div className="container-lg">
                    <div className="row justify-content-center">
                        <div className="col-12 m-5 text-center">
                            <h1>Contacts</h1>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">
                                <i className="bi bi-envelope"></i> Email: <a style={{textDecoration: "none"}} href="mailto:mxstamford@icloud.com">mxstamford@icloud.com</a>
                            </p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">
                                <i className="bi bi-telephone"></i> Phone: 07724 221297
                            </p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">
                                <i className="bi bi-linkedin"></i> LinkedIn: <a style={{textDecoration: "none"}} href="https://linkedin.com/in/michael-stamford">linkedin.com/in/michael-stamford</a>
                            </p>
                        </div>
                        <div className="col-3">
                            <p className="fw-bold">
                                <i className="bi bi-github"></i> GitHub: <a style={{textDecoration: "none"}} href="https://github.com/mikey-s249">github.com/mikey-s249</a>
                            </p>
                        </div>

                    </div>
                </div>

                
                
            </section>
        </>
    )
}