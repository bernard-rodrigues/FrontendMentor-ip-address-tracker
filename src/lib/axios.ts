import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://geo.ipify.org/api/v2/'
})