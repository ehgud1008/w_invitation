import React, { useState } from 'react'

const Account = () => {
    const [isAccountOpen1, setIsAccountOpen1] = useState(false);
    const [isAccountOpen2, setIsAccountOpen2] = useState(false);
    
    const toggleAccordion1 = () => {
        setIsAccountOpen1(!isAccountOpen1);
    }
    const toggleAccordion2 = () => {
        setIsAccountOpen2(!isAccountOpen2);
    }
  return (
    <div className="mt-10">
        <p className='mb-5 grid place-items-center '>마음 전하실 곳</p>
        <div className="grid place-items-center mb-3">
            <div className="md:w-2/4 xs:w-2/3 border rounded overflow-hidden">
                <div className="border-b bg-sky-50 py-2 cursor-pointer" onClick={toggleAccordion1}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ml-3">
                            <span className="text-sm font-semibold flex items-center">
                                <img src='/images/heart.png' className='w-5 h-5 mr-1' alt="heart"/>
                                신랑측
                            </span>
                        </div>
                        <div className="mr-3">
                            <img src='/images/down.png' className='ml-5 w-4 h-4' alt="down"/>
                        </div>
                    </div>
                </div>
                {isAccountOpen1 && (
                    <div className="p-2 text-sm">
                        <p>아코디언 내용...</p>
                    </div>
                )}
            </div>
        </div>

        <div className="grid place-items-center mb-3">
            <div className="md:w-2/4 xs:w-2/3 border rounded overflow-hidden">
                <div className="border-b bg-pink-50 py-2 cursor-pointer" onClick={toggleAccordion1}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center ml-3">
                            <span className="text-sm font-semibold flex items-center">
                                <img src='/images/heart.png' className='w-5 h-5 mr-1' alt="heart"/>
                                신부측
                            </span>
                        </div>
                        <div className="mr-3">
                            <img src='/images/down.png' className='ml-5 w-4 h-4' alt="down"/>
                        </div>
                    </div>
                </div>
                {isAccountOpen1 && (
                    <div className="p-2 text-sm">
                        <p>아코디언 내용...</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Account