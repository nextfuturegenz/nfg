import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg'

export const Footer = () => {

    return (
        <div>
            <section className="pb-2 pb-lg-5">

                <div className="container">
                    <div className="row border-top border-top-secondary pt-7">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1"><img className="mb-4" src={logo} width="184" alt="" /></div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
                            <p className="fs-2 mb-lg-4">Quick Links</p>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/about">About us</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/blogs">Blog</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/contact">Contact</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/faq">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
                            <p className="fs-2 mb-lg-4">Legal stuff</p>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/">Disclaimer</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/">Financing</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/">Privacy Policy</Link></li>
                                <li className="mb-1"><Link className="link-900 text-secondary text-decoration-none" to="/">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
                            <p className="fs-2 mb-lg-4">
                                Empowering the next generation of innovators. Explore our STEM programs.</p>
                            {/* <form className="mb-3">
                                <input className="form-control" type="email" placeholder="Enter your phone Number" aria-label="phone" />
                            </form> */}
                            <Link target="_blank" to="https://calendly.com/nextfuturegenz/15-minute-meeting-clone" className="btn btn-warning fw-medium py-1">Schedule with expert</Link>
                        </div>
                    </div>
                </div>

            </section>
            <section className="text-center py-0">

                <div className="container">
                    <div className="container border-top py-3">
                        <div className="row justify-content-between">
                            <div className="col-12 col-md-auto mb-1 mb-md-0">
                                <p className="mb-0">&copy; 2024 Next Future Genz </p>
                            </div>
                            <div className="col-12 col-md-auto">
                                <p className="mb-0">
                                    Made in India with<span className="fas fa-heart mx-1 text-danger"> </span>by <a className="text-decoration-none ms-1" href="https://nfginnovations.com/" target="_blank">NFG</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}