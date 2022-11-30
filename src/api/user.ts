import axios from '../plugins/axios'

export const getUserList = (params: any) => {
    return axios.get('/getUserList', { params: params })
}


