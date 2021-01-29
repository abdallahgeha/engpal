import { create } from 'apisauce'

import cache from "../utility/cache";
import settings from '../../constants/Settings'

const apiClient = create({
    baseURL: settings.apiUrl,
    headers: {
        "Content-Type" : 'application/json'
    }
})

const get = apiClient.get;

apiClient.addAsyncRequestTransform(async (request) => {
    let authToken = await 
})