import React, { useState } from "react";

const RSVP_input = ({handleOpenRSVP_input}) => {
    const [selectedSideOption, setSelectedSideOption] = useState('');       //신랑측/신부측 구분
    const [selectedAttendOption, setSelectedAttendOption] = useState('');   //참석 여부 구분
    const [selectedMealOption, setSelectedMealOption] = useState('');       //식사 여부 구분
    
    const [companions, setCompanions] = useState('');   //동행인원 

    //라디오박스 option 변경 기능
    const handleOptionChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        //신랑측/신부측
        if(name==="side") setSelectedSideOption(value);
        //참석 여부
        if(name==="attend") setSelectedAttendOption(value);
        //식사 여부
        if(name==="meal") setSelectedMealOption(value);

    }

    const handleInputChange = (event) => {
        const value = event.target.value;
        console.log(value);
        // 숫자만 입력되도록 제한
        const regex = /^[0-9]*$/;
        if (regex.test(value)) {
            if(value <= 100){
                setCompanions(value);
            }else{
                alert("100명 이하 인원만 입력해주세요");
            }
        }else{
            alert("숫자만 입력해주세요");
        }
    }
    
    const handleRSVPsubmit = () => {

    }
  return (
    <div className="fixed top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-50 z-50 overflow-scroll">
        <div className="bg-white w-full py-6 px-6 ">
            <div className="">
                <form action="">
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
                                        <input type="radio" name="side" id="side1" value="1" className="hidden peer"
                                                checked={selectedSideOption === '1'}
                                                onChange={handleOptionChange}  required />
                                        <label htmlFor="side1" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedSideOption === '1' ? 'bg-blue-100 text-blue-700' : 'bg-white'}`} >
                                            신랑측
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="side" id="side2" value="2" className="hidden peer"
                                                checked={selectedSideOption === '2'}
                                                onChange={handleOptionChange} required />
                                        <label htmlFor="side2" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedSideOption === '2' ? 'bg-purple-100 text-purple-700' : 'bg-white'}`} >
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
                                        <input type="radio" name="attend" id="attend1" value="1" className="hidden peer"
                                                checked={selectedAttendOption === '1'}
                                                onChange={handleOptionChange}  required />
                                        <label htmlFor="attend1" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedAttendOption === '1' ? 'bg-slate-700 text-white' : 'bg-white'}`} >
                                            참석 불가
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="attend" id="attend2" value="2" className="hidden peer"
                                                checked={selectedAttendOption === '2'}
                                                onChange={handleOptionChange} required />
                                        <label htmlFor="attend2" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedAttendOption === '2' ? 'bg-slate-700 text-white' : 'bg-white'}`} >
                                            참석 가능
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="name" className="item-ttl block mb-1">
                                <span className="font-bold">성함</span><span className="point text-red-500">*</span>
                            </label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3" maxLength="10" placeholder="성함을 입력해주세요."/>
                        </div>
                        <div className="row-wrap row-wrap-3">
                            <label htmlFor="contact" className="item-ttl block mb-1">
                                <span className="font-bold">대표 연락처</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="text" id="contact" name="contact" className="w-full border border-gray-300 rounded-md py-2 px-3"  maxLength="13" placeholder="대표연락처를 입력해주세요(-제외)."/>
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-4">
                            <label htmlFor="companions" className="item-ttl block mb-1">
                                <span className="font-bold">동행인원</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="text" onChange={handleInputChange} value={companions}
                                     id="companions" name="companions" placeholder="본인 포함 총 인원(최대 100명)" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">식사 여부</span> <span className="point text-red-500">*</span>
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                <li className="px-3 grid">
                                        <input type="radio" name="meal" id="meal1" value="1" className="hidden peer"
                                                checked={selectedMealOption === '1'}
                                                onChange={handleOptionChange}  required />
                                        <label htmlFor="meal1" className={`text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                            ${selectedMealOption === '1' ? 'bg-slate-700 text-white' : 'bg-white'}`} >
                                            식사 가능
                                        </label>
                                    </li>
                                    <li className="px-3 grid">
                                        <input type="radio" name="meal" id="meal2" value="2" className="hidden peer"
                                                checked={selectedMealOption === '2'}
                                                onChange={handleOptionChange} required />
                                        <label htmlFor="meal2" className={`text-center w-full py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer 
                                                                        ${selectedMealOption === '2' ? 'bg-slate-700 text-white' : 'bg-white'}`} >
                                            식사 불가(답례품 수령)
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-6">
                            <span className="font-bold">추가 전달 사항</span>
                            <textarea id="additionalNote" name="additionalNote" maxLength={100} className="mt-2 w-full border border-gray-300 rounded-md py-2 px-3 h-28 resize-none" placeholder="추가적으로 주최자에게 전달하고 싶은 내용을 작성해 주세요." />
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
                </form>
            </div>
            <div className="buttons mt-4 flex justify-center">
                <button onSubmit={handleRSVPsubmit} type="button" className="bg-slate-700 text-white py-3 w-full border border-slate-600 rounded-md">
                    참석 여부 전달하기
                </button>
            </div>
        </div>
    </div>
  );
};

export default RSVP_input;
