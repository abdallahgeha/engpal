import Constants from 'expo-constants';

const settings = {
    dev: {
        apiUrl: 'https://192.168.1.1:9000',
    },
    staging: {
        apiUrl: 'https://192.168.1.1:9000',
    },
    prod: {
        apiUrl: 'https://192.168.1.1:9000',
    },
}

const isInDebugMode = () => {
    return eval('__DEV__');
  }

const getCurrentSettings = () => {
    if (isInDebugMode()) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();
