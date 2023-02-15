import marker from "../assets/icon-location.svg"

export function Loading(){
    return(
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl flex items-center gap-3">
            <img src={marker} alt="" className="animate-bounce"/>
            <span>Loading</span>
        </div>
    )
}