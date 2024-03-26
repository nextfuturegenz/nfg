import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import { auth } from "../firestore";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../atoms";

export const PhoneVerify = ({ style }) => {
    const user = useRecoilValue(authAtom)
    const setAuth = useSetRecoilState(authAtom);
    const schema = yup.object().shape({
        displayName: yup.string().required(),
        phoneNumber: yup.number().required(),
    }).required();

    const verifyPhoneNumber = async ({ displayName, phoneNumber, photoUrl }) => {
        // add logic for upload image then update image url
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                phoneNumber
            })
            const updatedUser = await auth.currentUser.reload();
            console.log(updatedUser, "this is updated user");
            setAuth({ ...user, updatedUser })
        } catch (error) {
            console.log("Error")
        }
    }

    const onError = (errors) => {
        console.error(errors);
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div style={style}>
            <div className="card">
                <div className="card-header">
                    Basic Information
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(verifyPhoneNumber, onError)}>
                        <div className="form-group">
                            <input type="text" name='Display Name' value={user.displayName} className="form-control" {...register('displayName')} placeholder="Your Display Name" />
                            {errors.displayName && <p>{errors.displayName.message}</p>}
                        </div>
                        <div className="form-group">
                            <input type="number" name='phone' value={user.phoneNumber || ''} className="form-control" {...register('phoneNumber')} placeholder="Your Phone Number" />
                            {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                        </div>
                        {/* <div className="form-group">
                            <input type="file" name='image' className="form-control" {...register('photoUrl')} placeholder="Your image" />
                        </div> */}
                        <button style={{ marginLeft: '10px' }} type="submit" className="btn btn-primary">Update Info</button>
                    </form>
                </div>
            </div>
        </div>
    )
}