import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/'
})

export const ipify = axios.create({
    baseURL: 'https://api.ipify.org'
})