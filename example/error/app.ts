import axios, { AxiosError } from '../../src/index'

axios({
    method: 'get',
    url: '/error/gett'
}).then(res => {
    console.log(res)
}).catch((e:AxiosError) => {
    console.log('[message]',e.message)
    console.log('[isAxiosError]',e.isAxiosError)
    console.log('[config]',e.config)
})

axios({
    method: 'get',
    url:'/error/get'
}).then(res=>{
    console.log(res)
}).catch((e:AxiosError) => {
    console.log('[message]',e.message)
    console.log('[isAxiosError]',e.isAxiosError)
    console.log('[config]',e.config)
})

setTimeout(()=>{
    axios({
        method: 'get',
        url:'/error/get'
    }).then(res=>{
        console.log('set time',res)
    }).catch((e:AxiosError) => {
        console.log('[message]',e.message)
        console.log('[isAxiosError]',e.isAxiosError)
        console.log('[config]',e.config)
    })
}, 4000)

axios({
    method: 'get',
    url:'/error/timeout',
    timeout: 1000
}).then(res=>{
    console.log('timemout',res)
}).catch((e:AxiosError) => {
    console.log('[message]',e.message)
    console.log('[isAxiosError]',e.isAxiosError)
    console.log('[config]',e.config)
    console.log('[code]',e.code)
})