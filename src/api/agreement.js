import { axios } from '@/utils/request'

export function getUsageAgreement () {
    return axios({
        url: 'agreement/usage_agreement',
        method: 'get'
    })
}

export function editUsageAgreement (data) {
    return axios({
        url: 'agreement/usage_agreement',
        method: 'put',
        data
    })
}

export function getPrivacyPolicy () {
    return axios({
        url: 'agreement/privacy_policy',
        method: 'get'
    })
}

export function editPrivacyPolicy (data) {
    return axios({
        url: 'agreement/privacy_policy',
        method: 'put',
        data
    })
}

export function getCreditRule () {
    return axios({
        url: 'agreement/credit_rule',
        method: 'get'
    })
}

export function editCreditRule (data) {
    return axios({
        url: 'agreement/credit_rule',
        method: 'put',
        data
    })
}
