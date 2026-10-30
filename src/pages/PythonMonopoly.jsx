import ProjectNav from "../components/ProjectNav"
import Document from "../assets/Docs/Programming Document.pdf"

export default function PythonMonopoly() {
    return (
        <>
            <ProjectNav/>
             <div class="container-lg">
                <div class="row justify-content-center">
                    <div class="col-5 m-5 text-center">
                        <h1>Python Monopoly</h1>
                    </div>
                </div>
            </div>

            <section id="Projects" class="mt-5">
                
                
                <div class="container-lg">
                    <h3>Introduction</h3>
                    <p>This project was created for my A-Level Computer Science NEA.</p>
                    <a href={Document}>Documentation</a>
                </div>
            </section>
        </>
    )
}