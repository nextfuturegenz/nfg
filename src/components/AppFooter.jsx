import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AppFooter = () => {
    const navigate = useNavigate();
    const location = useLocation();


    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
                {/* <div className="row mb-5 d-flex">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">CoFusion Labs</h2>
                            <p>We specializes in providing innovative solutions for the restaurant and retail industry. We offers a
                                range of products and services, including self-service kiosks, mobile ordering and payment,
                                digital menu boards, and loyalty programs. Our solutions are customizable to meet the
                                specific needs of each customer</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                                <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Usefull Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Work</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Practice Areas</a></li>
                                <li><a href="#">Appointment</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain
                                        View, San Francisco, California, USA</span></li>
                                    <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929
                                        210</span></a></li>
                                    <li><a href="#"><span className="icon icon-envelope"></span><span
                                        className="text">info@yourdomain.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> <a
                                href="https://www.nextfuturegenz.com/" target="_blank">Next Future Genz</a> All rights
                            reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}