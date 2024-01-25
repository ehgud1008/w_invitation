import React, { createContext, useState } from 'react'

//Context 생성
export const ContactContext = createContext();

//Provider
export const ContactProvider = ( {children} ) => {
    const [contactData, setContactData] = useState(null);

    return (
        <ContactContext.Provider value= {{ contactData, setContactData }}>
            {children}
        </ContactContext.Provider>
    )
}