import React, { useState } from "react";

const RSVP_input = ({handleOpenRSVP_input, seq}) => {
    const [selectedSideOption, setSelectedSideOption] = useState('');       //신랑측/신부측 구분
    const [selectedAttendOption, setSelectedAttendOption] = useState('');   //참석 여부 구분
    const [selectedMealOption, setSelectedMealOption] = useState('');       //식사 여부 구분
    
    const [rsvpFormData, setRsvpFormData] = useState({
        name : '',
        contact : '',
        member_cnt : '',
        memo : '',
        side_option : 0,
        attend_option : 0, 
        meal_option : 0,
    });

    //TODO 
    //개인정보 수집 동의 동의 받고 등록하기

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        console.log(name + "// " + value);
        
        //라디오박스 option 변경 기능
        //신랑측/신부측
        if(name==="side_option") setSelectedSideOption(value);
        //참석 여부
        if(name==="attend_option") setSelectedAttendOption(value);
        //식사 여부
        if(name==="meal_option") setSelectedMealOption(value);

        if(name === 'member_cnt'){
            // 숫자만 입력되도록 제한
            const regex = /^[0-9]*$/;
            if (regex.test(value)) {
                if(value <= 100){
                    setRsvpFormData({ ...rsvpFormData, [name]: value });
                }else{
                    setRsvpFormData({ ...rsvpFormData, [name]: 1 }); // 값을 리셋
                    console.log(rsvpFormData.member_cnt);
                    alert("100명 이하 인원만 입력해주세요");
                }
            }else{
                setRsvpFormData({ ...rsvpFormData, [name]: 1 }); // 값을 리셋
                alert("숫자만 입력해주세요");
            }
        }else{
            setRsvpFormData({
                ...rsvpFormData,
                [name]: value
            });
        }
    }
    
    const handleRSVPsubmit = async (e) => {
        e.preventDefault();
        // 유효성 검사 예시
        if (!rsvpFormData.name.trim()) {
            alert('성함을 입력해주세요.');
            return;
        }

        if (!rsvpFormData.contact.trim()) {
            alert('연락처를 입력해주세요.');
            return;
        }
        
        if (!rsvpFormData.member_cnt) {
            alert('동행인원을 입력해주세요.');
            return;
        }
        
        if (!rsvpFormData.side_option) {
            alert('신랑측/신부측 여부를 선택해주세요.');
            return;
        }
        if (!rsvpFormData.attend_option) {
            alert('참석여부를 선택해주세요.');
            return;
        }
        if (!rsvpFormData.meal_option) {
            alert('식사여부를 선택해주세요.');
            return;
        }
        // 연락처 형식 검사 (예시: 한국 전화번호 형식)
        const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
        if (!phoneRegex.test(rsvpFormData.contact)) {
            alert('올바른 연락처 형식이 아닙니다.');
            return;
        }
        try {
            const res = await fetch('/api/rsvp/registRSVP', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    ...rsvpFormData,
                    wedding_seq : seq,
                }),
            });
            if (res.ok) {
                alert('참석 여부가 등록되었습니다.');
                // 추가적인 처리 (예: 페이지 리디렉션)
                handleOpenRSVP_input();
            } else {
                alert('오류가 발생했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="fixed top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-50 z-50 overflow-scroll">
        <div className="bg-white w-full py-6 px-6 ">
            <div className="">
                <form onSubmit={handleRSVPsubmit}>
                    <div className="grid justify-center py-3 font-bold text-lg">
                        <span className="">참석 여부 전달하기</span>
                        <button onClick={handleOpenRSVP_input} type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" >
                            <svg className="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="">
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                    <li className="px-3 grid">
                                        <input type="radio" name="side_option" id="side1" value="1" className="hidden peer"
                                                checked={selectedSideOption === '1'}
                                                onChange={handleInputChange}  />
                                        <label htmlFor="side1" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedSideOption === '1' ? 'text-blue-700' : 'bg-white'}`} 
                                                                            style={selectedSideOption === '1' ? { backgroundColor: '#e4f0ff' } : { backgroundColor: 'white' }}
                                                                            >
                                            신랑측
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="side_option" id="side2" value="2" className="hidden peer"
                                                checked={selectedSideOption === '2'}
                                                onChange={handleInputChange} />
                                        <label htmlFor="side2" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedSideOption === '2' ? 'text-purple-700' : 'bg-white'}`} 
                                                                        style={selectedSideOption === '2' ? { backgroundColor: '#f6edff' } : { backgroundColor: 'white' }}
                                                                        >
                                                신부측
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">참석 여부를 선택해 주세요</span><span className="point text-red-500">*</span>
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                    <li className="px-3 grid">
                                        <input type="radio" name="attend_option" id="attend1" value="1" className="hidden peer"
                                                checked={selectedAttendOption === '1'}
                                                onChange={handleInputChange}   />
                                        <label htmlFor="attend1" className={`text-center w-full px-5 py-3 font-bold bg-slate-700 bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedAttendOption === '1' ? 'text-white' : 'bg-white'}`} 
                                                                            style={selectedAttendOption === '1' ? { backgroundColor: '#64748b' } : { backgroundColor: 'white' }}
                                                                            >
                                            참석 가능
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="attend_option" id="attend2" value="2" className="hidden peer"
                                                checked={selectedAttendOption === '2'}
                                                onChange={handleInputChange} />
                                        <label htmlFor="attend2" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedAttendOption === '2' ? 'text-white' : 'bg-white'}`} 
                                                                        style={selectedAttendOption === '2' ? { backgroundColor: '#64748b' } : { backgroundColor: 'white' }}
                                                                        >
                                            참석 불가
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="name" className="item-ttl block mb-1">
                                <span className="font-bold">성함</span><span className="point text-red-500">*</span>
                            </label>
                            <input type="text" id="name" name="name" onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3" maxLength="10" placeholder="성함을 입력해주세요."/>
                        </div>
                        <div className="row-wrap row-wrap-3">
                            <label htmlFor="contact" className="item-ttl block mb-1">
                                <span className="font-bold">대표 연락처</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="text" id="contact" name="contact" onChange={handleInputChange} className="w-full border border-gray-300 rounded-md py-2 px-3"  maxLength="13" placeholder="대표연락처를 입력해주세요(-제외)."/>
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-4">
                            <label htmlFor="member_cnt" className="item-ttl block mb-1">
                                <span className="font-bold">동행인원</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="number" onChange={handleInputChange} value={rsvpFormData.member_cnt}
                                     id="member_cnt" name="member_cnt" placeholder="본인 포함 총 인원(최대 100명)" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">식사 여부</span> <span className="point text-red-500">*</span>
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                <li className="px-3 grid">
                                        <input type="radio" name="meal_option" id="meal1" value="1" className="hidden peer"
                                                checked={selectedMealOption === '1'}
                                                onChange={handleInputChange}  />
                                        <label htmlFor="meal1" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedMealOption === '1' ? 'text-white' : 'bg-white'}`} 
                                                                            style={selectedMealOption === '1' ? { backgroundColor: '#64748b' } : { backgroundColor: 'white' }}
                                                                            >
                                            식사 가능
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="meal_option" id="meal2" value="2" className="hidden peer"
                                                checked={selectedMealOption === '2'}
                                                onChange={handleInputChange} />
                                        <label htmlFor="meal2" className={`text-center w-full py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedMealOption === '2' ? 'text-white' : 'bg-white'}`} 
                                                                        style={selectedMealOption === '2' ? { backgroundColor: '#64748b' } : { backgroundColor: 'white' }}
                                                                        >
                                            식사 불가(답례품 수령)
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-6">
                            <span className="font-bold">추가 전달 사항</span>
                            <textarea id="memo" onChange={handleInputChange} name="memo" maxLength={100} className="mt-2 w-full border border-gray-300 rounded-md py-2 px-3 h-28 resize-none" placeholder="추가적으로 주최자에게 전달하고 싶은 내용을 작성해 주세요." />
                        </div>
                        <div className="row-wrap personal-info">
                            <label className="item-ttl block mb-1">
                                <span className="font-bold">개인정보 수집 및 이용 동의</span><span className="point text-red-500">*</span>
                            </label>
                            <p className="mt-2 info-txt mb-2 p-5 border border-gray-300 rounded-md">
                                참석여부 전달을 위한 개인정보 수집 및 이용에 동의해
                                주세요.
                                <br />
                                {/* <!-- 개인정보 수집 및 이용 동의 내용 --> */}
                            </p>
                            <div className="check-wrap">
                                <input type="checkbox" id="personalAgreement" name="personalAgreement" value="1" className="mr-2" />
                                <label htmlFor="personalAgreement" className="basic-checkbox">
                                    수집 및 이용에 동의합니다.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="buttons mt-4 flex justify-center">
                        <button type="submit" className="bg-slate-700 text-white py-3 w-full border border-slate-600 rounded-md">
                            참석 여부 전달하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default RSVP_input;
