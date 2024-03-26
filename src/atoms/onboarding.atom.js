import { atom } from 'recoil';

export const onboardingAtom = atom({
    key: 'onBoarding',
    // get initial state from local storage to enable user to stay logged in
    default: {
        emailVerificationDone : false,
        displayNameUpdated : false,
        masterPasswordUpdated : false,
        identityVerified: false,
        onboardingCompleted: false,
        planSelected: false,
        
    }
});