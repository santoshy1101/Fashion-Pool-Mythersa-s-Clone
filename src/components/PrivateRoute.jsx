import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/AuthContext';

export default function PrivateRoute({ children }) {
    const { state } = useContext(AuthContext);

    if (!state.isAuth) {
        return <Navigate to='/signinpage' />
    }

    return children;
}