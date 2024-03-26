import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import { useForm } from "react-hook-form";
import { useRecoilValue } from 'recoil';
import { authAtom } from '../../../atoms';
import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import validationImg from '../../../assets/img/validation/validation.png'

const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
}).required();

export const Login = () => {
    const navigate = useNavigate();
    const auth = useRecoilValue(authAtom);
    const { login } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // redirect to home if already logged in
        if (auth) navigate('/app/dashboard');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const checkOnboardingStatusAndReturnNavUrl = (details) => {
        const { identityVerified, onboardingCompleted, planSelected } = details

        if (!identityVerified) {
            return '/onboarding/verify-identity'
        } else if (!planSelected) {
            return '/onboarding/select-plan'
        } else if (!onboardingCompleted) {
            return '/onboarding/organisation'
        } else {
            return '/app/dashboard'
        }
    }

    const onSubmit = async ({ email, password }) => {
        try {
            setIsLoading(true);
            const user = await login(email, password)
            const { details } = user
            const navurl = checkOnboardingStatusAndReturnNavUrl(details);
            navigate(navurl)
        } catch (error) {
            setIsLoading(false);
            alert(error);
        }
    }

    const onError = (errors) => {
        console.error(errors);
    };

    return (
        <div>
            <section className="pt-7">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-md-start text-center py-6">
                            <h1 className="mb-2 fs-9 fw-bold">Some Interesting Facts</h1>
                            <p className="mb-2 lead text-secondary">STEM skills are increasingly valuable across all industries, not just traditional STEM fields.<br className="d-none d-xl-block" />
                             Knowing how to code or analyze data can be a benefit in business, marketing, and even the arts.</p>
                            <form onSubmit={handleSubmit(onSubmit, onError)}>
                                <div className="form-group my-2">
                                    <input disabled={isLoading} type="text" name='email' className="form-control" {...register('email')} placeholder="Your Email" />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                                <div className="form-group my-2">
                                    <input disabled={isLoading} type="password" name='password' className="form-control" {...register('password')} placeholder="Password" />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>
                                <div className="my-2">
                                <div className="text-center text-md-start"><button className="btn btn-warning me-3 btn-lg" type="submit" role="button">Login</button><Link className="btn btn-link text-warning fw-medium" to="/register" role="button"><span className="fas fa-arrow-right me-2"></span>Create new Account ? </Link></div>
                                    {/* <button disabled={isLoading} type="submit" value="Login" className={`btn btn-primary ${!isLoading ? 'py-3 px-5' : ''}`} >
                                        {isLoading ? <Dna
                                            visible={isLoading}
                                            height="40"
                                            width="110"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                        /> : 'Login'}
                                    </button>
                                    <Link style={{ paddingLeft: "20px", color: 'white' }} to={'/register'}>Create new Account ?</Link> */}
                                </div>

                            </form>
                            
                        </div>
                        <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={validationImg} alt="" /></div>
                    </div>
                </div>
            </section>

            {/* <section className="ftco-section contact-section ftco-counter" id="section-counter"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row block-9">
                        <div className="col-md-3 pr-md-5">

                        </div>
                        <div className="col-md-6 pr-md-5 px-3">
                            <div className="heading-section heading-section-white">
                                <div className=" ">
                                    <span className="subheading">Some</span>
                                    <h2 className="mb-4">Interesting Facts</h2>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit, onError)}>
                                <div className="form-group">
                                    <input disabled={isLoading} type="text" name='email' className="form-control" {...register('email')} placeholder="Your Email" />
                                    {errors.email && <p>{errors.email.message}</p>}
                                </div>
                                <div className="form-group">
                                    <input disabled={isLoading} type="password" name='password' className="form-control" {...register('password')} placeholder="Password" />
                                    {errors.password && <p>{errors.password.message}</p>}
                                </div>
                                <div className="form-group">
                                    <button disabled={isLoading} type="submit" value="Login" className={`btn btn-primary ${!isLoading ? 'py-3 px-5' : ''}`} >
                                        {isLoading ? <Dna
                                            visible={isLoading}
                                            height="40"
                                            width="110"
                                            ariaLabel="dna-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="dna-wrapper"
                                        /> : 'Login'}
                                    </button>
                                    <Link style={{ paddingLeft: "20px", color: 'white' }} to={'/register'}>Create new Account ?</Link>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}