import { useSetRecoilState } from "recoil";
import { onboardingAtom } from "../../../../atoms";
import { Link } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../../firestore";
import { useNavigate } from "react-router-dom";


export const SelectPlanONBD = () => {

    const setOnboarding = useSetRecoilState(onboardingAtom);
    const navigate = useNavigate();

    const proceedToOrganisation = async ({ }) => {
        // we have to update user document in firestore also
        // then setObording step 1 completed 
        // then move to next step 
        try {
            const userRef = doc(db, 'users', auth.currentUser.uid);
            const res = await updateDoc(userRef, {
                planSelected: true,
            });
            console.log(res, "response from updated user ");
            setOnboarding({
                planSelected: true
            })
            navigate('/onboarding/organisation');

        } catch (error) {
            console.log("error ", error)
        }
    }

    return (
        <div>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-5">
                        <div className="col-md-7 text-center heading-section  ">
                            <span className="subheading">Pricing Plans</span>
                            <h2 className="mb-3">Our Best Pricing</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3  ">
                            <div className="block-7">
                                <div className="text-center">
                                    <h2 className="heading">Free</h2>
                                    <span className="price"><sup>$</sup> <span className="number">0</span></span>
                                    <span className="excerpt d-block">100% free. Forever for Single user</span>
                                    <Link onClick={proceedToOrganisation} className="btn btn-primary btn-outline-primary d-block px-2 py-3 mb-4">Get Started</Link>

                                    <h3 className="heading-2 mb-4">Enjoy All The Features</h3>

                                    <ul className="pricing-text">
                                        <li><strong>150 GB</strong> Bandwidth</li>
                                        <li><strong>100 GB</strong> Storage</li>
                                        <li><strong>$1.00 / GB</strong> Overages</li>
                                        <li>All features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="block-7">
                                <div className="text-center">
                                    <h2 className="heading">Startup</h2>
                                    <span className="price"><sup>$</sup> <span className="number">9</span></span>
                                    <span className="excerpt d-block">All features are included Per User Per Month</span>
                                    <Link onClick={proceedToOrganisation} className="btn btn-primary d-block px-3 py-3 mb-4">Get
                                        Started</Link>

                                    <h3 className="heading-2 mb-4">Enjoy All The Features</h3>

                                    <ul className="pricing-text">
                                        <li><strong>450 GB</strong> Bandwidth</li>
                                        <li><strong>400 GB</strong> Storage</li>
                                        <li><strong>$2.00 / GB</strong> Overages</li>
                                        <li>All features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="block-7">
                                <div className="text-center">
                                    <h2 className="heading">Premium</h2>
                                    <span className="price"><sup>$</sup> <span className="number">49</span></span>
                                    <span className="excerpt d-block">All features are included</span>
                                    <Link onClick={proceedToOrganisation} className="btn btn-primary btn-outline-primary d-block px-3 py-3 mb-4">Get
                                        Started</Link>

                                    <h3 className="heading-2 mb-4">Enjoy All The Features</h3>

                                    <ul className="pricing-text">
                                        <li><strong>250 GB</strong> Bandwidth</li>
                                        <li><strong>200 GB</strong> Storage</li>
                                        <li><strong>$5.00 / GB</strong> Overages</li>
                                        <li>All features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3  ">
                            <div className="block-7">
                                <div className="text-center">
                                    <h2 className="heading">Pro</h2>
                                    <span className="price"><sup>$</sup> <span className="number">99</span></span>
                                    <span className="excerpt d-block">All features are included</span>
                                    <Link onClick={proceedToOrganisation} className="btn btn-primary btn-outline-primary d-block px-3 py-3 mb-4">Get
                                        Started</Link>

                                    <h3 className="heading-2 mb-4">Enjoy All The Features</h3>

                                    <ul className="pricing-text">
                                        <li><strong>450 GB</strong> Bandwidth</li>
                                        <li><strong>400 GB</strong> Storage</li>
                                        <li><strong>$20.00 / GB</strong> Overages</li>
                                        <li>All features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
