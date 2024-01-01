import React, { useState } from 'react'
import RSVP_input from '../components/RSVP_input';

const RSVP = () => {
    const [isOpenInput, setIsOpenInput] = useState(false);

    const handleOpenRSVP_input = () => {
        setIsOpenInput(!isOpenInput);
        if(!isOpenInput) document.body.style.overflow = 'hidden'; // 스크롤바를 숨깁니다.
        else document.body.style.overflow = 'auto'; // 스크롤바를 다시 표시합니다.
    }
      
  return (
    <div className="bg-white px-8 ">
        <div className="mt-8 py-8 grid place-items-center">
            <p className='grid place-content-center text-md font-bold'>참석 여부 전달</p>
            <p className='my-5 text-md py-5 text-center'>축하의 마음으로 참석해주시는 한 분 한 분<br />
                귀한 마음으로 모실 수 있도록 <br />
                부담없이 알려주시면 정성을 다해 준비하겠습니다.<br />
                (추후 멘트 수정 가능)
            </p>
            <button onClick={handleOpenRSVP_input} className='mt-5 mb-4 px-10 py-3 bg-black text-white rounded-full'>참석 의사 전달하기</button>
        </div>
        <div className="w-full h-1 bg-gray-100"/>
        
        {isOpenInput && <RSVP_input handleOpenRSVP_input={handleOpenRSVP_input}  />}

    </div>
  )
}

export default RSVP