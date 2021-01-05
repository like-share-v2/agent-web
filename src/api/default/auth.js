import { axios } from '@/utils/request'

export function login (data) {
    return axios({
        url: 'agent/login',
        method: 'post',
        data
    })
}

export function getCode (phone, params) {
    return axios({
        url: `sms/sendCode/${phone}`,
        method: 'get',
        params
    })
}
