import { FormEvent, useState } from 'react'
import arrow from '../assets/icon-arrow.svg'
import { useIPLocation } from '../contexts/IPLocationContext'
import { api } from '../lib/axios'
import { InfoBoard } from './InfoBoard'

export function Header(){
    const [ IP, setIP ] = useState('')

    const { updateIPLocation } = useIPLocation()
    
    function handleIP(newIP: string){
        setIP(newIP)
    }

    function IPSubmition(event: FormEvent){
        event.preventDefault()
        
        const IPparts = IP.split('.')
        if(IPparts.filter(number => parseInt(number) >= 0 && parseInt(number) < 256).length === 4){
            api.get('country,city', {
                params: {
                    apiKey: import.meta.env.VITE_API_KEY,
                    ipAddress: IP
                }
            }).then(response => {
                const newIP = response.data
                updateIPLocation({
                    IPAddress: newIP.ip,
                    isp: newIP.isp,
                    timezone: newIP.location.timezone,
                    location: {
                        city: newIP.location.city,
                        postalCode: newIP.location.postalCode,
                        region: newIP.location.region
                    },
                    latitude: newIP.location.lat,
                    longitude: newIP.location.lng
                })
            })
            return
        }
        console.log('not ok')
    }

    return(
        <header 
            role="banner" 
            className="relative bg-myPattern bg-contain lg:bg-cover flex flex-col items-center h-[18.75rem] lg:h-[17.6rem] py-[1.45rem] lg:py-8"
        >
            <h1 className="text-white text-[1.6rem] lg:text-3xl font-mySemiBold">IP Address Tracker</h1>
            
            <form method="get" className="mt-[1.45rem] lg:mt-7 flex" onSubmit={IPSubmition}>
                <input 
                    type="text"
                    maxLength={15}
                    value={IP}
                    onChange={event => handleIP(event.target.value)}
                    className={`rounded-l-2xl h-[3.625rem] w-[16.8rem] lg:w-[498px] lg:h[58px] pl-6 text-[1.16rem] font-myLight`}
                />
                <button className={`
                    rounded-r-2xl bg-veryDarkGray hover:brightness-125 h-[3.625rem] w-[3.6rem] flex justify-center items-center
                    lg:w-[58px] lg:h-[58px]`} type="submit">
                    <img src={arrow} alt="Submit button" />
                </button>
            </form>
            
            <InfoBoard />
        </header>
    )
}