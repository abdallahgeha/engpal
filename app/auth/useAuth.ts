import {useContext} from 'react';
import jwtDecode from 'jwt-decode';

import authStorage from './storage';
import AuthContext from './context';
import cache from '../utility/cache';

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext) as any

    const logIn = (authToken: string) => {
        const user = jwtDecode(authToken)
        setUser(user);
        authStorage.storeToken(authToken)
    }

    const logOut = () => {
        setUser(null);
        cache.clearCash()
        authStorage.removeToken();
    }

    return {user, logIn, logOut}
}

export default useAuth