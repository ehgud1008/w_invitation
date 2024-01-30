import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { MarriageContext } from '../context/MarriageContext';
 
const Home = ({setWeddingDate, setSeq}) => {
  const params = useParams();
  const url = params.url;
  const { marriageData, setMarriageData } = useContext(MarriageContext);
  const weekNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  //날짜 뽑아오기('Y', 'M', 'D', "H", "MM", "S", "W")
  const stringFormatDate = (dateString, format) => {
    if (!dateString || !format) return '';

    // 'YYYY-MM-DD hh:mm:ss' 형식의 문자열을 Date 객체로 변환
    const date = new Date(dateString);
  
    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      return '';
    }
  
    switch (format) {
      case 'Y':
        return date.getFullYear().toString(); // 연도 반환
      case 'M':
        return (date.getMonth() + 1).toString().padStart(2, '0'); // 월 반환 (1을 더하고 두 자리로 표시)
      case 'D':
        return date.getDate().toString().padStart(2, '0'); // 일 반환 (두 자리로 표시)
      case 'H':
        return date.getHours().toString(); // 시
      case 'MM':
        return date.getMinutes().toString() === "0" ? "" : date.getMinutes().toString() + "분"; // 분
      case 'S':
        return date.getSeconds().toString(); // 초
      case 'W':
        return weekNames[date.getDay()]; // 요일
      case 'A':
        return date.getHours() > 12 ? '오후' : '오전'; // 오전/오후
      default:
        return '';
    }
  };
  
  useEffect( () => {
    const fetchWeddingInfo = async () => {
      try {
        const res = await fetch(`/api/wedding/${url}`);
        const data = await res.json();
        if(data == null){
          //리다이렉트 시키던지 alert 시키던지
          console.log("ASDFASDF");
          return;
        }
        setMarriageData(data);
        
        setWeddingDate(data.wedding_date);
        setSeq(data.seq);

      } catch (error) {
        console.log(error);
      }
    } 
    
    fetchWeddingInfo();
  }, [url, setMarriageData]);

  //seq, 신랑이름, 신랑영어이름, 신랑서열(1,2,3,4...), 신부이름, 신부영어이름, 신부서열,
  // 결혼날짜, 메인사진, 갤러리 사진(최대 10장), 영상링크하나,
  //식장 주소, 식장 약도, 식장번호, [지하철(호선, 출구, 도보)], [버스(정류장)]
  return (
    <main className='mx-auto bg-fafafa sm:w-full md:w-2/4'>
      {marriageData && 
        (
          <div className="flex flex-col items-center justify-center min-h-screen pt-20">
              <div className="flex font-bold mb-4 items-center">
                <span className='col'>
                  <p className='text-lg tracking-widest'>{marriageData.groom_ko}</p>
                </span>
                <span className='grid place-items-center mx-5 tracking-widest indent-3.5'>
                  <p className='text-xl border-solid border-b-2 border-slate-500'>{stringFormatDate(marriageData.wedding_date, "M")}</p>
                  <p className='text-xl'>{stringFormatDate(marriageData.wedding_date, "D")}</p>
                </span>
                <span className='col'>
                  <p className='text-lg ml-5 tracking-widest'>{marriageData.bride_ko}</p>
                </span>
              </div>
              {/* <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="rounded-full h-40 w-40 object-cover mb-4 animate-pulse" /> */}
              <div className='mx-8 mt-5'>
                <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="full h-100 w-50 object-cover mb-8 aspect-[2/3]"/>
              </div>
              <p className="text-md text-gray-700 mb-8 text-center">
                {stringFormatDate(marriageData.wedding_date, "Y")}년&nbsp;
                {stringFormatDate(marriageData.wedding_date, "M")}월&nbsp;
                {stringFormatDate(marriageData.wedding_date, "D")}일&nbsp;
                {stringFormatDate(marriageData.wedding_date, "W")}&nbsp;
                {stringFormatDate(marriageData.wedding_date, "A")}&nbsp;
                {stringFormatDate(marriageData.wedding_date, "H")}시&nbsp;
                {stringFormatDate(marriageData.wedding_date, "MM")}<br/>

              </p>
              <div className='mx-20 mt-5 grid place-items-center mb-16'>
                <img src='/images/wedding.png' className='w-40 h-40'/>
                <p className='text-center leading-9'>
                  믿음으로 함께하고 사랑으로 하나되는 저희 약속의 자리에소중한 분들을 모시고자 합니다.<br/>
                  멘트 추후 설정 가능
                </p>
              </div>
              <div className='md:w-2/5 sm:w-4/5 xs:w-4/5 grid place-items-center border-solid border-y-2 p-5 mb-10'>
                <p className='leading-10'>
                  <span className='text-md'>{marriageData.groom_father} · {marriageData.groom_mother}</span> <span className='text-sm'>의 {marriageData.groom_no}</span><span className='text-md ml-5'>{marriageData.groom_ko}</span>
                </p>
                <p className='leading-10'>
                  <span className='text-md'>{marriageData.bride_father} · {marriageData.bride_mother}</span> <span className='text-sm'>의 {marriageData.bride_no}</span><span className='text-md ml-5'>{marriageData.bride_ko}</span>
                </p>
              </div>
              <div className='grid place-items-center mb-16 '>
                  <button className='flex items-center py-5 lg:px-56 md:px-32 sm:px-20 xs:px-16 rounded-lg text-rose-red font-semibold bg-rose-100 opacity-70'>
                    <img src='/images/interview2.png' className='w-5 h-5 mr-1.5' alt='interview' />신랑 & 신부의 인터뷰
                  </button>
              </div>
          </div>
        )
      }
    </main>
  )
}

export default Home