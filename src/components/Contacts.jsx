

export default function Contacts() {
    return (
        <footer>
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
        </footer>
    )
}