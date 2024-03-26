import { useRecoilValue } from 'recoil';
import { blogAtom, projectAtom } from '../../../atoms';
import { Link } from 'react-router-dom';
import HeroImg from '../../../assets/img/hero/hero-img.png'
import icon1 from '../../../assets/img/category/icon1.png'
import icon2 from '../../../assets/img/category/icon2.png'
import icon3 from '../../../assets/img/category/icon3.png'
import icon4 from '../../../assets/img/category/icon4.png'
import validationImg from '../../../assets/img/validation/validation.png'
import managerImg from '../../../assets/img/manager/manager.png'
import managerTick from '../../../assets/img/manager/tick.png'
import marketerImg from '../../../assets/img/marketer/marketer.png'
import marketing01 from '../../../assets/img/marketing/marketing01.png'
import marketing02 from '../../../assets/img/marketing/marketing02.png'
import marketing03 from '../../../assets/img/marketing/marketing03.png'
import ovalBg from '../../../assets/img/superhero/oval.png'
import shapeBg from '../../../assets/img/category/shape.png'

export const Homepage = () => {

    const projects = useRecoilValue(projectAtom);
    const blogs = useRecoilValue(blogAtom);

    return (
        <div>
            <section className="pt-7">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-md-start text-center py-6">
                            <h1 className="mb-4 fs-9 fw-bold">Empowering Next Gen Innovators</h1>
                            <p className="mb-6 lead text-secondary">Spark your STEM passion! Explore exciting fields & develop essential skills with our free resources & expert services. Turn your ideas into reality.<br className="d-none d-xl-block" />Get Started Today!</p>
                            <div className="text-center text-md-start"><Link className="btn btn-warning me-3 btn-lg" to="/register" role="button">Get started</Link><Link className="btn btn-link text-warning fw-medium" href="#!" role="button" data-bs-toggle="modal" data-bs-target="#popupVideo"><span className="fas fa-play me-2"></span>Watch the video </Link></div>
                        </div>
                        <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={HeroImg} alt="" /></div>
                    </div>
                </div>
            </section>


            <section className="pt-5 pt-md-9 mb-6" id="feature">

                <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block" style={{
                    backgroundImage: `url(${shapeBg})`,
                    opacity: 0.5
                }}>
                </div>


                <div className="container">
                    <h1 className="fs-9 fw-bold mb-4 text-center"> Explore to unveil <br className="d-none d-xl-block" />your STEM superpowers</h1>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={icon1} width="75" alt="Feature" />
                            <h4 className="mb-3">Science</h4>
                            <p className="mb-0 fw-medium text-secondary"><strong>Become a Mastermind</strong> Unravel the mysteries of the universe - from the tiniest atom to the vast expanse of space. Learn to conduct experiments, analyze data, and discover how everything works around you.</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={icon2} width="75" alt="Feature" />
                            <h4 className="mb-3">Technology</h4>
                            <p className="mb-0 fw-medium text-secondary"><strong>Build the Future</strong> Design and create amazing things! Code robots, develop apps, and explore the cutting-edge world of artificial intelligence and virtual reality. Become a tech whiz and shape the future!</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={icon3} width="75" alt="Feature" />
                            <h4 className="mb-3">Engineering</h4>
                            <p className="mb-0 fw-medium text-secondary"><strong>Invent and Design</strong> Unleash your creativity and problem-solving skills. Build incredible structures, design innovative solutions to real-world challenges, and make a lasting impact on the world.</p>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={icon4} width="75" alt="Feature" />
                            <h4 className="mb-3">Mathematics</h4>
                            <p className="mb-0 fw-medium text-secondary"><strong>Unlock the Secrets of Numbers</strong> Math is more than just equations. It's a powerful tool used in every aspect of STEM. Develop your logical thinking, problem-solving skills, and learn to analyze data like a pro. Master the language of the universe!</p>
                        </div>
                    </div>
                    <div className="text-center"><Link className="btn btn-warning" to="/register" role="button">SIGN UP NOW</Link></div>
                </div>

            </section>
            <section className="pt-5" id="validation">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="text-secondary">Effortless Validation for</h5>
                            <h2 className="mb-2 fs-7 fw-bold">Parents</h2>
                            <p className="mb-4 fw-medium text-secondary">
                            See Your Child Thrive with Clear Progress Tracking & Expert Guidance
                            </p>
                            <h4 className="fs-1 fw-bold">Track Effort & Progress</h4>
                            <p className="mb-4 fw-medium text-secondary">Monitor your child's learning journey with detailed reports and feedback.</p>
                            <h4 className="fs-1 fw-bold">Expert Guidance Made Easy</h4>
                            <p className="mb-4 fw-medium text-secondary">Get personalized recommendations and support for your child's future STEM goals.</p>
                            <h4 className="fs-1 fw-bold">Unlock Diverse Opportunities</h4>
                            <p className="mb-4 fw-medium text-secondary">Explore a range of university and further education options tailored to your child's aspirations.</p>
                        </div>
                        <div className="col-lg-6"><img className="img-fluid" src={validationImg} alt="" /></div>
                    </div>
                </div>

            </section>
            <section className="pt-5" id="manager">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6"><img className="img-fluid" src={managerImg} alt="" /></div>
                        <div className="col-lg-6">
                            <h5 className="text-secondary">Easier decision making for</h5>
                            <p className="fs-7 fw-bold mb-2">Students</p>
                            <p className="mb-4 fw-medium text-secondary">
                                Discover Your Passion & Shape Your Future with Engaging Learning
                            </p>
                            <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={managerTick} width="35" alt="tick" />
                                <p className="fw-medium mb-0 text-secondary"><strong>Master Essential Skills :</strong> Develop core STEM skills applicable to any career path or future study.</p>
                            </div>
                            <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={managerTick} width="35" alt="tick" />
                                <p className="fw-medium mb-0 text-secondary"><strong>Explore Exciting Possibilities :</strong> Uncover potential career paths in the ever-evolving world of STEM.</p>
                            </div>
                            <div className="d-flex align-items-center mb-3"><img className="me-sm-4 me-2" src={managerTick} width="35" alt="tick" />
                                <p className="fw-medium mb-0 text-secondary"><strong>Prepare for Success :</strong> Gain practical experience through specialized training sessions and assessments, ensuring readiness for your chosen career.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="pt-5" id="marketer">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="text-secondary">Optimisation for</h5>
                            <p className="mb-2 fs-8 fw-bold">Educators</p>
                            <p className="mb-4 fw-medium text-secondary">Expand Your Reach, Manage Your Classes, & Earn with Our Flexible Platform</p>
                            <h4 className="fw-bold fs-1">Manage Classes Efficiently</h4>
                            <p className="mb-4 fw-medium text-secondary">Utilize our platform to organize your classes and streamline student management.</p>
                            <h4 className="fw-bold fs-1">Reach a Wider Audience</h4>
                            <p className="mb-4 fw-medium text-secondary">Connect with more students seeking STEM education through our online platform.</p>
                            <h4 className="fw-bold fs-1">Monetize Your Expertise</h4>
                            <p className="mb-4 fw-medium text-secondary">Offer private 1-on-1 sessions directly within the platform and earn from your passion.</p>
                            <h4 className="fw-bold fs-1">Data-Driven Insights</h4>
                            <p className="mb-4 fw-medium text-secondary">Gain valuable student performance data to personalize your teaching and maximize learning outcomes.</p>
                        </div>
                        <div className="col-lg-6"><img className="img-fluid" src={marketerImg} alt="" /></div>
                    </div>
                </div>

            </section>
            <section className="py-md-11 py-8" id="superhero">

                <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top" style={{
                    backgroundImage: `url(${ovalBg})`,
                    opacity: 0.5,
                    backgroundPosition: "top !important"
                }}>
                </div>


                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <h1 className="fw-bold mb-4 fs-7">Need a super hero?</h1>
                            <p className="mb-5 text-info fw-medium">Stuck on your STEM project? We can help with... <br />Conception Workshops, Programming, Electronics, 3D Printing & Design, Mathematics & Physics, Robotics & Automation, Internet of Things (IoT), Machine Learning & AI ? <br/>Schedule a free consultation to discuss your project!</p>
                            <Link to="https://calendly.com/nextfuturegenz/15-minute-meeting-clone" target="_blank" className="btn btn-warning btn-md">Contact our expert</Link>
                        </div>
                    </div>
                </div>

            </section>

            <section className="pt-5" id="marketing">

                <div className="container">
                    <h1 className="fw-bold fs-6 mb-3">Learning Strategies</h1>
                    <p className="mb-6 text-secondary">Join 10,000+ other learners and get proven strategies on STEM</p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card"><img className="card-img-top" src={marketing01} alt="" />
                                <div className="card-body ps-0">
                                    <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">NFG</a>|<span className="ms-1">03 March 2019</span></p>
                                    <h3 className="fw-bold">Increasing Prosperity With Positive Thinking</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card"><img className="card-img-top" src={marketing02} alt="" />
                                <div className="card-body ps-0">
                                    <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">NFG</a>|<span className="ms-1">03 March 2019</span></p>
                                    <h3 className="fw-bold">Motivation Is The First Step To Success</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card"><img className="card-img-top" src={marketing03} alt="" />
                                <div className="card-body ps-0">
                                    <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">NFG</a>|<span className="ms-1">03 March 2019</span></p>
                                    <h3 className="fw-bold">Success Steps For Your Personal Or Education Life</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
