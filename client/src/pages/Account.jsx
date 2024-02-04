import React, { useContext, useRef, useState } from 'react'
import { ContactContext } from '../context/ContactContext';

const Account = ({seq}) => {

    const {contactData, setContactData} = useContext(ContactContext);

    const [isAccountOpen1, setIsAccountOpen1] = useState(false);
    const [isAccountOpen2, setIsAccountOpen2] = useState(false);
    
    const toggleAccordion1 = () => {
        setIsAccountOpen1(!isAccountOpen1);
    }
    const toggleAccordion2 = () => {
        setIsAccountOpen2(!isAccountOpen2);
    }

    //복사할 계좌번호 세팅
    const accontCopyRef = useRef([]);

    //계좌 복사하기 func
    const handleAccountCopy = (index) => {
        const textToCopy = accontCopyRef.current[index]?.textContent;
        // alert("주소를 복사했습니다.")
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
              .then(() => {
                alert('계좌번호가 복사되었습니다 : ' + textToCopy);
                // 또는 성공 시 사용자에게 알림을 보여줄 수 있습니다.
                // alert('텍스트가 복사되었습니다.');
              })
              .catch(err => {
                alert('복사에 실패했습니다 : ' + err);
                // 또는 실패 시 사용자에게 알림을 보여줄 수 있습니다.
                // alert('복사에 실패했습니다. 다시 시도해주세요.');
              });
        }
    }
  return (
    <div className='mx-auto bg-white overflow-x-hidden 2xs:w-1/1 xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3'>
        <p className='pt-10 pb-5 grid place-items-center '>마음 전하실 곳</p>
        <div className="grid place-items-center mb-3">
            <div className="px-10 w-full rounded overflow-hidden">
                <div className="border border-b bg-sky-50 py-2 cursor-pointer" onClick={toggleAccordion1}>
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
                    <div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.groom_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.groom_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[0] = el}>{contactData.groom_account}</span>
                                    <button onClick={() => handleAccountCopy(0)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.groom_f_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.groom_f_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[1] = el}>{contactData.groom_f_account}</span>
                                    <button onClick={() => handleAccountCopy(1)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.groom_m_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.groom_m_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[1] = el}>{contactData.groom_m_account}</span>
                                    <button onClick={() => handleAccountCopy(1)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        <div className="grid place-items-center mb-3">
            <div className="md:w-2/4 xs:w-4/5 border rounded overflow-hidden">
                <div className="border-b bg-pink-50 py-2 cursor-pointer" onClick={toggleAccordion2}>
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
                {isAccountOpen2 && (
                    <div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.bride_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.bride_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[0] = el}>{contactData.bride_account}</span>
                                    <button onClick={() => handleAccountCopy(0)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.bride_f_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.bride_f_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[1] = el}>{contactData.bride_f_account}</span>
                                    <button onClick={() => handleAccountCopy(1)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="p-2 text-sm">
                            <div className='flex justify-between items-center mb-1'>
                                <span>{contactData.bride_m_account_bank}</span>
                                <span className='text-xs'>예금주 : {contactData.bride_m_account_name}</span>
                            </div>
                            <div className='border-2 border-gray-300 px-3 py-2'>
                                <div className='text-md flex justify-between items-center'> 
                                    <span ref={el => accontCopyRef.current[1] = el}>{contactData.bride_m_account}</span>
                                    <button onClick={() => handleAccountCopy(1)} className='border-slate-300 rounded-md bg-gray-500 text-white py-1 px-2'>복사</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Account