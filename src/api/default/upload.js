import { axios } from '@/utils/request'

export function upload (data) {
    return axios({
        url: 'agent/upload',
        method: 'post',
        data
    })
}
