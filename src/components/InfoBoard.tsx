import { useIPLocation } from "../contexts/IPLocationContext"

export function InfoBoard(){
    const { IPLocation } = useIPLocation()
    
    return(
        <div className="lg:min-w-[1110px] lg:min-h-[162px] bg-white mt-[48px] rounded-2xl">
            
        </div>
    )
}