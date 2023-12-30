import React from "react";

const RSVP_input = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-50 z-50 overflow-scroll">
        <div className="bg-white w-full py-6 px-6 ">
            <div className="">
                <form action="">
                    <div className="grid justify-center py-3 font-bold text-lg">
                        <span className="">참석 여부 전달하기</span>
                        <button type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick="" >
                            <svg className="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-6">
                        <div className="">
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신랑측
                                        </div>
                                    </li>
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신부측
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">참석 여부를 선택해 주세요</span><span className="point text-red-500">*</span>
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신랑측
                                        </div>
                                    </li>
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신부측
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="">
                            <label for="name" className="item-ttl block mb-1">
                                <span className="font-bold">성함</span><span className="point text-red-500">*</span>
                            </label>
                            <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                        </div>
                        <div className="row-wrap row-wrap-3">
                            <label for="contact" className="item-ttl block mb-1">
                                <span className="font-bold">대표 연락처</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="text" id="contact" name="contact" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-4">
                            <label for="companions" className="item-ttl block mb-1">
                                <span className="font-bold">동행인원</span><span className="point text-red-500">*</span>
                            </label>
                            <div className="inner">
                                <input type="text" id="companions" name="companions" placeholder="본인 포함 총 인원" className="w-full border border-gray-300 rounded-md py-2 px-3" />
                            </div>
                        </div>
                        <div className="">
                            <span className="font-bold">식사 여부</span> <span className="point text-red-500">*</span>
                            <div className="mt-2">
                                <ul className="grid w-full grid-cols-2">
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신랑측
                                        </div>
                                    </li>
                                    <li className="px-3">
                                        <input type="radio" id="hosting-small" name="hosting" value="1" className="hidden peer" required />
                                        <div className="text-center w-full px-5 py-3 font-bold bg-white border border-slate-400 rounded-lg cursor-pointer hover:bg-slate-100">
                                        신부측
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row-wrap row-wrap-6">
                            <span className="font-bold">추가 전달 사항</span>
                            <textarea id="additionalNote" name="additionalNote" maxLength={100} className="w-full border border-gray-300 rounded-md py-2 px-3 h-28 resize-none" placeholder="추가적으로 주최자에게 전달하고 싶은 내용을 작성해 주세요." />
                        </div>
                        <div className="row-wrap personal-info">
                            <label className="item-ttl block mb-1">
                                <span className="font-bold">개인정보 수집 및 이용 동의</span><span className="point text-red-500">*</span>
                            </label>
                            <p className="info-txt mb-2">
                                참석여부 전달을 위한 개인정보 수집 및 이용에 동의해
                                주세요.
                                <br />
                                {/* <!-- 개인정보 수집 및 이용 동의 내용 --> */}
                            </p>
                            <div className="check-wrap">
                                <input type="checkbox" id="personalAgreement" name="personalAgreement" value="1" className="mr-2" />
                                <label for="personalAgreement" className="basic-checkbox">
                                    수집 및 이용에 동의합니다.
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="buttons mt-4 flex justify-center">
                <button type="button" className="btn btn-purple w-full max-w-xs" onClick="">
                    참석 여부 전달하기
                </button>
            </div>
        </div>
    </div>
  );
};

export default RSVP_input;
