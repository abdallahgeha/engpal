import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from 'dayjs'

const prefix = 'cache';
const expiryInMinutes = 5;

type storeItem = {value : any , timestamp: number}

const store = async (key : string, value: any) => {
    try {
        const item = {
            value,
            timestamp : Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
    } catch (error) {
        console.error(error)
    }
}

const isExpired = (item :storeItem) => {
    const now = dayjs()
    const storedTime = dayjs(item.timestamp)
    return now.diff(storedTime, "minute") > expiryInMinutes;
}

const get = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key) as string;
        const item = JSON.parse(value)

        if (!item) return null;
        if (isExpired(item)) {
            await AsyncStorage.removeItem(prefix + key);
            return null
        }

        return item.value
    } catch (error) {
        console.error(error)
    }
}

const getAllKeys = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys()
    } catch (error) {
        console.error(error)
    }
    return []
}

const clearCash = async () => {
    const keys = await getAllKeys();
    try {
        await AsyncStorage.multiRemove(keys)
    } catch (error) {
        console.error(error)
    }
}

export default {
    store, 
    get,
    clearCash,
}