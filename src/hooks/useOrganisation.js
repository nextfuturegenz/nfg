import { useSetRecoilState, useRecoilValue } from 'recoil';
import { organisationAtom } from '../atoms';
import { useNavigate } from 'react-router-dom';
import { db } from '../firestore'
import { collection, doc, setDoc } from "firebase/firestore";

export const useOrganisation = () => {

    const organisation = useRecoilValue(organisationAtom);
    const setOrganisation = useSetRecoilState(organisationAtom);

    const addOrganisation = async (organisationData) => {
        // Add a new document with a generated id
        const newOrgRef = doc(collection(db, "organisation"));

        // later...
        const organisationDoc = await setDoc(newOrgRef, organisationData);
        console.log(organisationDoc);
        setOrganisation(organisationData)
    }

    const updateOrganisation = () => {
        
    }

    const getOrganisation = () => {

    }

    const getAllOrganisations = () => {

    }

    const removeOrganisation = () => {

    }

    return {
        organisation,
        addOrganisation,
        updateOrganisation,
        getOrganisation,
        getAllOrganisations,
        removeOrganisation
    }
}

// we have to create hooks for each module - like authentication, authorization , inventory, sales , order , etc 
// hooks we will have to do error management in hooks 
// hook will provide function and act as wrapper for functions and updated value from recoil