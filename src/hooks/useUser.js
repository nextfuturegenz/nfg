import { doc, updateDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firestore";

export const useUser = () => {

    const updateUser = async ({ updateUserObj, userId = auth.currentUser.uid, getDetails = false }) => {
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, updateUserObj);

        if (getDetails) {
            const user = await getUserDetails(userId);
            return user;
        } else {
            return true;
        }
    }

    const getUser = async (userId = auth.currentUser.uid) => {
        const docRef = doc(db, 'users', userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    }

    return {
        updateUser,
        getUser,
    }
}