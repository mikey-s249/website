import { Link } from "react-router-dom"

export default function ProjectCard(props) {

    return (
        <div class="col-6">
            <Link to={props.to} style={{ textDecoration: 'none' }}>
            <div class="card m-5">
                <img src={props.img} class="card-img-top"/>
                <div class="card-body text-center py-4">
                    <h4 class="card-title">{props.title}</h4>
                    <p class="lead card-subtitle">{props.description}</p>
                    {/* <a href="rasteriser.html" class="stretched-link"></a> */}
                </div>
            </div>
        </Link>
        </div>
    )
}