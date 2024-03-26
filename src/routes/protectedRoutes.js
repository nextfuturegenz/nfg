import {
    useNavigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '../atoms';

export const ProtectedRoute = ({ children }) => {
    const auth = useRecoilValue(authAtom);
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth) {
            navigate("/login");
        }
    }, [auth]);

    return children;
};