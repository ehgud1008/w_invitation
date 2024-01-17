import React, { createContext, useState } from 'react'

//Context 생성
export const LocationContext = createContext();

//Provider
export const LocationProvider = ( {children} ) => {
    const [locationData, setLocationData] = useState(null);

    return (
        <LocationContext.Provider value= {{ locationData, setLocationData }}>
            {children}
        </LocationContext.Provider>
    )
}