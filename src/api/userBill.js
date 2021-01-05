import { axios } from '@/utils/request'

export function getUserBillList (params) {
    return axios({
        url: 'agent/bill',
        method: 'get',
        params
    })
}
