import { updatePassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { auth } from "../firestore";

export const PasswordReset = ({ style }) => {

    const updateMasterPassword = async ({ oldPassword, newPassword, confirmPassword }) => {

        // first we have to check oldPassword with old password
        if (newPassword === confirmPassword) {
            updatePassword(auth.currentUser, newPassword).then(resp => {
                console.log("password update success",resp)
            }).catch(error => {
                console.log("error in password update",error)
            })
        }
    }

    const schema = yup.object().shape({
        oldPassword: yup.string().required(),
        newPassword: yup.string().required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z0-9]/, 'Password can only be Alpha Numeric.'),
        confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
    }).required();

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
                    Master Password Reset
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(updateMasterPassword, onError)}>
                        <div className="form-group">
                            <input type="text" name='old password' className="form-control" {...register('oldPassword')} placeholder="Your Old Password" />
                            {errors.oldPassword && <p>{errors.oldPassword.message}</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" name='new password' className="form-control" {...register('newPassword')} placeholder="Your New Password" />
                            {errors.newPassword && <p>{errors.newPassword.message}</p>}
                        </div>
                        <div className="form-group">
                            <input type="password" name='confirm password' className="form-control" {...register('confirmPassword')} placeholder="Confirm New Password" />
                            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                        </div>
                        <button style={{ marginLeft: '10px' }} type="submit" className="btn btn-primary">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    )
}