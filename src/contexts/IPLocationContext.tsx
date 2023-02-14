import { createContext, ReactNode, useContext, useState } from "react"

interface IPLocationContextProviderProps{
    children: ReactNode
}

interface IPLocationContextData{
    updateIPLocation: (newIPLocation: IPLocationProps) => void,
    IPLocation: IPLocationProps | null
}

interface IPLocationProps{
    IPAddress: string,
    location: {
        region: string,
        city: string,
        postalCode: string
    },
    timezone: string,
    isp: string,
    latitude: number,
    longitude: number
}

export const IPLocationContext = createContext({} as IPLocationContextData);

export function IPLocationContextProvider({children}: IPLocationContextProviderProps){
    const [ IPLocation, setIPLocation ] = useState<IPLocationProps | null>(null)

    function updateIPLocation(newIPLocation: IPLocationProps){
        setIPLocation({
            IPAddress: newIPLocation.IPAddress,
            location: newIPLocation.location,
            timezone: newIPLocation.timezone,
            isp: newIPLocation.isp,
            latitude: newIPLocation.latitude,
            longitude: newIPLocation.longitude
        })
    }
    
    return(
        <IPLocationContext.Provider value={{
            updateIPLocation,
            IPLocation
        }}>
            {children}
        </IPLocationContext.Provider>
    )
}

export function useIPLocation(){
    return useContext(IPLocationContext)
}