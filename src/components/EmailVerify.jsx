import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firestore";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { authAtom } from "../atoms";

export const EmailVerify = ({ style }) => {
    const setAuth = useSetRecoilState(authAtom);
    const { email, emailVerified } = useRecoilValue(authAtom);

    const getActionCodeSettings = (email) => {
        return {
            url: 'https://www.example.com/?email=' + email,
            handleCodeInApp: false,
            // When multiple custom dynamic link domains are defined, specify which
            // one to use.
            dynamicLinkDomain: "example.page.link"
        }
    };
    
    const sendVerificationEmail = async () => {
        sendEmailVerification(auth.currentUser).then(resp => {
            console.log("email sent success",resp)
            alert("Verification Email Sent Successfully")
            setTimeout(() => {
                return auth.currentUser.reload()
            },10000)
        }).then(() => {
            const updatedUser = auth.currentUser
            console.log(updatedUser, "this is updated user");
            if (updatedUser.emailVerified) {
                console.log("hurray email verfiried now we have to ")
            }
            setAuth({ ...user, updatedUser })
        })
        .catch(error => {
            console.log("email sent failed", error)
        })
        
    }

    

    return (
        <div style={style}>
            <div className="card">
                <div className="card-header">
                    Email Verfication 
                </div>
                <div className="card-body" > 
                {/* style={{ display :'flex', flexDirection : 'column', justifyContent: 'center' }} > */}
                    <h5 className="card-title">{email} {emailVerified ? '✓' : '✘'}</h5>
                    <p className="card-text">User email address is {emailVerified ? 'Verfied' : 'Not Verfied'} .</p>
                    <button disabled={emailVerified} onClick={sendVerificationEmail} className="btn btn-primary">{!emailVerified ? 'Send Verification Email' : 'Already Verified'}</button>
                </div>
            </div>
        </div>
    )
}
