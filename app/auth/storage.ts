import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authTokenEngPal';

const storeToken = async (authToken: string) => {
    try {
        const previous = await SecureStore.getItemAsync(key)
        previous && (await SecureStore.deleteItemAsync(key))
        await SecureStore.setItemAsync(key, authToken)
    } catch (error) {
        console.error("Error storing the auth token", error)
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key)
    } catch (error) {
        console.error("Error getting the auth token",error)
    }
}

const getUser = async () => {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.error("Error getting the auth token", error)
    }
}

export default { getToken, getUser, removeToken, storeToken}