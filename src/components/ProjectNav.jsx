import { Link } from "react-router-dom";



export default function ProjectNav(props) {
    console.log(props.gitLink)
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <span className="fw-bold text-light">
                        Michael
                    </span>
                </Link>


                {props.gitLink ? <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href={props.gitLink} className="nav-link">GitHub Link</a>
                        </li>
                    </ul>
                </div> : null}


            </div>
        </nav>
    )
}