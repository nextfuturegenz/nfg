import { Link } from "react-router-dom";
import bg_2 from '../assets/bg_2.jpg';

export const HeroWrap = ({ pageParentSlag, pageParentLink, pageSlag, pageTitle, bgImage = bg_2 }) => {

    return (
        <section className="hero-wrap hero-wrap-2 d-flex" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-sm-12   text-bread d-flex align-items-center">
                        <div className="text">
                            <h1 className="mb-3 mt-5 bread">{pageTitle}</h1>
                            <p className="breadcrumbs">
                                <span className="mr-2"><Link to={"/"}>Home</Link></span>
                                {
                                    pageParentSlag ?
                                        <span className="mr-2"><Link to={pageParentLink}>{pageParentSlag}</Link></span>
                                        : <></>
                                }
                                <span>{pageSlag}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}