import { HeroWrap } from '../../../components';
import aboutImg from '../../../assets/about.jpg';
import bg3Img from '../../../assets/bg_3.jpg';
import person1 from '../../../assets/person_1.jpg';
import person2 from '../../../assets/person_2.jpg';
import person3 from '../../../assets/person_3.jpg';
import person4 from '../../../assets/person_4.jpg';
import staff1 from '../../../assets/staff-1.jpg';
import staff2 from '../../../assets/staff-2.jpg';
import staff3 from '../../../assets/staff-3.jpg';
import staff4 from '../../../assets/staff-4.jpg';
import partner1 from '../../../assets/partner-1.png';
import partner2 from '../../../assets/partner-2.png';
import partner3 from '../../../assets/partner-3.png';
import partner4 from '../../../assets/partner-4.png';
import partner5 from '../../../assets/partner-5.png';


export const About = () => {
    return (
        <div>
            <HeroWrap pageSlag={'About'} pageTitle={'About Us'} />

            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center order-md-last" style={{backgroundImage: `url(${aboutImg})`}}>
                        </div>
                        <div className="col-md-7 wrap-about pt-md-5  ">
                            <div className="heading-section mb-5 pt-5 pl-md-5">
                                <div className="pr-md-5 mr-md-5 text-md-right">
                                    <span className="subheading">Providing</span>
                                    <h2 className="mb-4">What We Can Do for You</h2>
                                </div>
                            </div>
                            <div className="pr-md-3 pr-lg-5 pl-md-5 mr-md-5 mb-5">
                                <div className="services-wrap d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-innovation"></span>
                                    </div>
                                    <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-right">
                                        <h3 className="heading">Market Research</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                                <div className="services-wrap d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-innovation"></span>
                                    </div>
                                    <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-right">
                                        <h3 className="heading">Financial Services</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                                <div className="services-wrap d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-innovation"></span>
                                    </div>
                                    <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-right">
                                        <h3 className="heading">Online Marketing</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                                <div className="services-wrap d-flex">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="flaticon-innovation"></span>
                                    </div>
                                    <div className="media-body pl-md-0 pl-4 pr-4 order-md-first text-md-right">
                                        <h3 className="heading">24/7 Support</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-self-stretch  ">
                            <div className="media block-6 services text-center">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-ideas"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Business Strategy</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-self-stretch  ">
                            <div className="media block-6 services text-center">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-analysis"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Data Analysis</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-self-stretch  ">
                            <div className="media block-6 services text-center">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-web-design"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Graphic Design</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-self-stretch  ">
                            <div className="media block-6 services text-center">
                                <div className="icon d-flex justify-content-center align-items-center mb-4">
                                    <span className="flaticon-idea"></span>
                                </div>
                                <div className="media-body">
                                    <h3 className="heading">Creative</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ftco-section ftco-counter" id="section-counter" style={{backgroundImage: `url(${bg3Img})`}} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row d-md-flex align-items-center">
                        <div className="col-lg-4">
                            <div className="heading-section pl-md-5 heading-section-white">
                                <div className=" ">
                                    <span className="subheading">Some</span>
                                    <h2 className="mb-4">Interesting Facts</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row d-md-flex align-items-center">
                                <div className="col-md d-flex justify-content-center counter-wrap  ">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="2000">0</strong>
                                            <span>Done Works</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap  ">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="300">0</strong>
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap  ">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">0</strong>
                                            <span>Coffee</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md d-flex justify-content-center counter-wrap  ">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="1000">0</strong>
                                            <span>Work Hours</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials segment */}
            {/* <section className="ftco-section testimony-section ftco-no-pt">
                <div className="container-fluid px-4">
                    <div className="row  ">
                        <div className="col-md-12 testimony-top">
                            <div className="carousel-testimony owl-carousel">
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5 text-center">
                                        <div className="user-img mb-5" style={{backgroundImage: `url(${person1})`}}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Marketing Manager</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5 text-center">
                                        <div className="user-img mb-5" style={{backgroundImage: `url(${person2})`}}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Interface Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5 text-center">
                                        <div className="user-img mb-5" style={{backgroundImage: `url(${person3})`}}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">UI Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5 text-center">
                                        <div className="user-img mb-5" style={{backgroundImage: `url(${person3})`}}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimony-wrap p-4 pb-5 text-center">
                                        <div className="user-img mb-5" style={{backgroundImage: `url(${person1})`}}>
                                            <span className="quote d-flex align-items-center justify-content-center">
                                                <i className="icon-quote-left"></i>
                                            </span>
                                        </div>
                                        <div className="text">
                                            <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <p className="name">Garreth Smith</p>
                                            <span className="position">System Analyst</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-12 heading-section   text-center">
                            <span className="subheading">Testimony</span>
                            <h2 className="mb-4">My satisfied customer says</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Our team segment */}
            {/* <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section   text-center">
                            <span className="subheading">Team</span>
                            <h2 className="mb-4">Our Staff</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${person1})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">CEO, Founder</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${person2})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Developer</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${person3})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Graphic Designer</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${person4})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Web Designer</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${staff1})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Developer</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${staff2})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Data Analyst</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${staff3})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Data Analyst</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="staff text-center">
                                <div className="img" style={{backgroundImage: `url(${staff4})`}}></div>
                                <div className="text pt-4">
                                    <h3>David Smith</h3>
                                    <span className="position mb-2">Researcher</span>
                                    <p>I am an ambitious workaholic, but apart from that, pretty simple person.</p>
                                    <ul className="ftco-social">
                                        <li className=" "><a href="#"><span className="icon-twitter"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-facebook"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-google-plus"></span></a></li>
                                        <li className=" "><a href="#"><span className="icon-instagram"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="ftco-section ftco-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm  ">
                            <a href="#" className="partner"><img src={partner1} className="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                        <div className="col-sm  ">
                            <a href="#" className="partner"><img src={partner2} className="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                        <div className="col-sm  ">
                            <a href="#" className="partner"><img src={partner3} className="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                        <div className="col-sm  ">
                            <a href="#" className="partner"><img src={partner4} className="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                        <div className="col-sm  ">
                            <a href="#" className="partner"><img src={partner5} className="img-fluid" alt="Colorlib Template" /></a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}