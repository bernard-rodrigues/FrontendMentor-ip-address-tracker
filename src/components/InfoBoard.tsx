import { useIPLocation } from "../contexts/IPLocationContext"

export function InfoBoard(){
    const { IPLocation } = useIPLocation()
    
    function getFormatted(){
        return [
            {
                name: "IP ADDRESS",
                info: IPLocation?.IPAddress ? IPLocation?.IPAddress : '------'
            },
            {
                name: "LOCATION",
                info: IPLocation?.location ? IPLocation?.location.region + ', ' + IPLocation?.location.city + ' ' + IPLocation?.location.postalCode : '------'
            },
            {
                name: "TIMEZONE",
                info: IPLocation?.timezone ? 'UTC ' + IPLocation?.timezone : '------'
            },
            {
                name: "ISP",
                info: IPLocation?.isp ? IPLocation?.isp : '------'
            },
        ]
    }

    return(
        <div className={`
            bg-white flex flex-col text-center justify-between w-[330px] mt-[24px] pt-[25px] pb-[19px] gap-[20px] rounded-2xl z-10
            lg:text-left lg:flex-row lg:min-w-[1110px] lg:min-h-auto lg:py-[33px] lg:mt-[48px] lg:gap-0`}>
            {getFormatted().map(info => (
                <div key={info.name} className="flex flex-col w-full gap-[4px] lg:px-[33px] lg:gap-1">
                    <span className="text-darkGray text-[10px] lg:text-[14px] font-myBold">{info.name}</span>
                    <span className="text-veryDarkGray text-[19px] lg:text-[25px] font-mySemiBold">{info.info}</span>
                </div>
            ))}
        </div>
    )
}