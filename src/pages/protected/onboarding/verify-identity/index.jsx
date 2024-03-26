import { useRecoilValue, useSetRecoilState } from "recoil";
import { onboardingAtom } from "../../../../atoms";
import { EmailVerify, Card } from "../../../../components";
import { auth, db } from "../../../../firestore";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Global } from "../../../../components/icons";
import { doc, updateDoc } from "firebase/firestore";

export const VerifyIdentityONBD = () => {
    const onboarding = useRecoilValue(onboardingAtom);
    const setOnboarding = useSetRecoilState(onboardingAtom);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        displayName: yup.string().required(),
        phoneNumber: yup.number().required(),
    }).required();

    const onError = (errors) => {
        console.error(errors);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const proceedToSelectPlan = async ({ displayName, phoneNumber }) => {
        // we have to update user document in firestore also
        // then setObording step 1 completed 
        // then move to next step 
        try {
            const userRef = doc(db, 'users', auth.currentUser.uid);
            const res = await updateDoc(userRef, {
                identityVerified: true,
                displayName,
                phoneNumber
            });
            console.log(res, "response from updated user ");
            setOnboarding({
                identityVerified: true
            })
            navigate('/onboarding/select-plan')

        } catch (error) {
            console.log("error ", error)
        }
    }

    return (
        <div style={{ width: '100vh' }}>
            <h1>Identity Verification </h1>
            <EmailVerify style={{ marginTop: '10px', marginBottom: '10px' }} />
            <Card defaultValue={false}>
                <form onSubmit={handleSubmit(proceedToSelectPlan, onError)}>
                    <div className="form-group">
                        <input type="text" name='Display Name' className="form-control" {...register('displayName')} placeholder="Your Display Name" />
                        {errors.displayName && <p>{errors.displayName.message}</p>}
                    </div>
                    <div className="form-group">
                        <input type="number" name='phone' className="form-control" {...register('phoneNumber')} placeholder="Your Phone Number" />
                        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                    </div>
                    <div className="form-group" style={{ textAlign: 'center', border: 'thin solid black' }}>
                        <label htmlFor="inputTag">
                            <br />Select Image <br />
                            <Global size={40} ></Global>
                            <input style={{ display: "none" }} id="inputTag" type="file" />
                        </label>
                    </div>
                    <button style={{ marginLeft: '10px' }} type="submit" className="btn btn-primary">Update Info</button>
                </form>
            </Card>
            {/* <button disabled={isDisabled} style={{ marginTop: '20px' }} onClick={proceedToSelectPlan} className="btn btn-primary">Proceed Ahead</button> */}
        </div>
    )
}