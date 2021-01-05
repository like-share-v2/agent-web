import { axios } from '@/utils/request'

export function getStatisticalData () {
    return axios({
        url: 'agent/statistical_data',
        method: 'get'
    })
}

export function getWeekData () {
    return axios({
        url: 'agent/week_data',
        method: 'get'
    })
}

export function getData () {
    return axios({
        url: 'index/data',
        method: 'get'
    })
}

export function getPieData () {
    return axios({
        url: 'index/pie_data',
        method: 'get'
    })
}

export function getDetail (params) {
    return axios({
        url: 'agent/detail',
        method: 'get',
        params
    })
}

export function get (params) {
    return axios({
        url: 'agent',
        method: 'get',
        params
    })
}
