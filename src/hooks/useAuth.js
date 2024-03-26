import { useRecoilState } from 'recoil';
import { authAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from '../firestore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const getUserFromCredentials = async (credentials) => {
    // from credentials get uid 
    // go to users collections and fetch details 
    // now in user Meta we have to distinguish between organizations admin or super admin
    // isSysAdmin refers to super admin 
    // role refers to role of user in organization
    console.log(credentials, "user credentails in get User")
    const { user } = credentials;
    const { uid } = user;

    const userRef = doc(db, "users", uid);

    try {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            const details = docSnap.data();
            return { ...user, details };
        } else {
            console.log("Document does not exist")
            throw new Error("Document does not exist")
        }

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

}

const createUserFromCredentials = async (credentials) => {
    console.log(credentials, "user credentails in create user")
    const { user } = credentials;
    const { uid, email } = user;
    const userRef = doc(db, "users", uid);
    const details = {
        email: email,
        identityVerified: false,
        isSysAdmin: false,
        onboardingCompleted: false,
        organisationId: "",
        phoneNumber: 0,
        planSelected: false,
        role: "admin",
        username: ""
    };

    try {
        const docSnap = await setDoc(userRef, details);
        console.log(docSnap)
        return { ...user, details };

    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const useAuth = () => {
    
    const [authUser,setAuth] = useRecoilState(authAtom);
    const navigate = useNavigate();


    const login = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const idToken = await userCredential.user.getIdToken();
        const user = await getUserFromCredentials(userCredential);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', idToken)
        setAuth(user);
        return user;
    }

    const logout = async (to = "/login") => {
        // remove user from local storage, set auth state to null and redirect to login page
        setAuth(null);
        //const result = await signOut(auth)
        //console.log("result form firebase", result);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate(to);
    }

    const register = async (email, password) => {
        // this functionality is not required as of now
        // we can add email and temparary password
        // then let user create his own profile.
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = await createUserFromCredentials(userCredential);
        console.log(user, "user from register")
        return user;
    }

    return {
        authUser,
        login,
        logout,
        register
    }
}