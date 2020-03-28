import axios, { AxiosError, AxiosTransformer } from '../../src/index'
import qs from 'qs'

// axios.defaults.headers.common['test2'] = 123
// axios.defaults.headers.common['year'] = 2020

// axios({
//     url: '/config/post',
//     method: 'post',
//     data: qs.stringify({
//         a: 1
//     }),
//     headers: {
//         test: '321'
//     }
// }).then(res=>{
//     console.log(res.data)
// })

// axios({
//     transformRequest: [(function (data) {
//         return qs.stringify(data)
//     }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
//     transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
//         if (typeof data === 'object') {
//             data.b = 2
//         }
//         return data
//     }, function (data) {
//         if (data.b && typeof data.b === 'number') {
//             data.b = 2 * data.b
//         }
//         return data
//     }],
//     url: '/config/post',
//     method: 'post',
//     data: {
//         a: 1
//     }
// }).then(res => {
//     console.log(res.data)
// })


const instance = axios.create({
    transformRequest: [(function (data) {
        return qs.stringify(data)
    }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
    transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function (data) {
        if (typeof data === 'object') {
            data.b = 2
        }
        return data
    }, function (data) {
        if (data.b && typeof data.b === 'number') {
            data.b = 2 * data.b
        }
        return data
    }]
})

instance({
    url: '/config/post',
    method: 'post',
    data: {
        a: 1,
        name: 'instance'
    }
}).then(res=>{
    console.log(res.data)
})