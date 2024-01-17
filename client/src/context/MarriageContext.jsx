import React, { createContext, useState } from 'react'

//Context 생성
export const MarriageContext = createContext();

//Provider
export const MarriageProvider = ( {children} ) => {
    const [marriageData, setMarriageData] = useState(null);

    return (
        <MarriageContext.Provider value= {{ marriageData, setMarriageData }}>
            {children}
        </MarriageContext.Provider>
    )
}