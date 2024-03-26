import { atom } from 'recoil';

export const organisationAtom = atom({
    key: 'organisation',
    // get initial state from local storage to enable user to stay logged in
    default: {
        busniessName: '',
        legalName: '',
        type : '',
        address : '',
        phoneNumber : '',
        ownerId : '',
        size :'',
        industry : '',
        services : '',
        multiBrands : false,
        website : '',
        social: {
            instagram: '',
            twitter : '',
        }
    }
});