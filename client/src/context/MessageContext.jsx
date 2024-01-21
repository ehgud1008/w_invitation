import React, { createContext, useState } from 'react'

//Context 생성
export const MessageContext = createContext();

//Provider
export const MessageProvider = ( {children} ) => {
    const [messageData, setMessageData] = useState(null);

    return (
        <MessageContext.Provider value= {{ messageData, setMessageData }}>
            {children}
        </MessageContext.Provider>
    )
}