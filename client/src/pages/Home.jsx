import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useParams } from 'react-router-dom';
import { MarriageContext } from '../context/MarriageContext';
import { LocationContext } from '../context/LocationContext';
import ContactList from '../components/ContactList';
import {stringFormatDate} from '../utils/CommonUtils';

const Home = ({setWeddingDate, setSeq}) => {
  const params = useParams();
  const url = params.url;
  const { marriageData, setMarriageData } = useContext(MarriageContext);
  const {locationData} = useContext(LocationContext);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContactList = () => {
    console.log("DDDD");
    setIsContactOpen(!isContactOpen);
    if(!isContactOpen) document.body.style.overflow = 'hidden'; // 스크롤바를 숨깁니다.
    else document.body.style.overflow = 'auto'; // 스크롤바를 다시 표시합니다.
  }

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
    <main className='mx-auto bg-white overflow-x-hidden sm:w-full md:w-2/5 xl:w-1/4'>
      {marriageData && 
        (
          <div className="flex flex-col min-h-screen pt-28">
              <div className="flex flex-col  border-l-2 border-black ml-8 py-2">
                <div className='pl-5 text-2xl'>
                  {stringFormatDate(marriageData.wedding_date, "Y")} / {stringFormatDate(marriageData.wedding_date, "M")} / {stringFormatDate(marriageData.wedding_date, "D")}
                </div>
                <div className='pl-5 text-xl uppercase'>
                  {stringFormatDate(marriageData.wedding_date, "W-en")}
                </div>
              </div>
              {/* <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="rounded-full h-40 w-40 object-cover mb-4 animate-pulse" /> */}
              <div className='px-8 pt-5'>
                <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="w-full object-cover aspect-[9/10]"/>
              </div>
              <div className='pr-8 grid justify-end text-xl mt-5 mb-3'>
                {marriageData.groom_ko} / {marriageData.bride_ko}
              </div>
              <div className='pr-8 grid justify-items-end text-md'>
                <span>{stringFormatDate(marriageData.wedding_date, "W")} {stringFormatDate(marriageData.wedding_date, "A")} {stringFormatDate(marriageData.wedding_date, "H")} 시 {stringFormatDate(marriageData.wedding_date, "MM")}</span>
                <span>{locationData && locationData.hall_name}</span>
              </div>
              {/* <p className="text-md text-gray-700 mb-8 text-center">
                {stringFormatDate(marriageData.wedding_date, "Y")}년&nbsp;
                {stringFormatDate(marriageData.wedding_date, "M")}월&nbsp;
                {stringFormatDate(marriageData.wedding_date, "D")}일&nbsp;
                {stringFormatDate(marriageData.wedding_date, "W")}&nbsp;
                {stringFormatDate(marriageData.wedding_date, "A")}&nbsp;
                {stringFormatDate(marriageData.wedding_date, "H")}시&nbsp;
                {stringFormatDate(marriageData.wedding_date, "MM")}<br/>
              </p> */}
              <div className='mx-20 mt-28 grid place-items-center mb-16'>
                <img src='/images/wedding.png' className='w-40 h-40'/>
                <p className='text-center leading-7'>
                  믿음으로 함께하고 사랑으로 하나되는 저희 약속의 자리에소중한 분들을 모시고자 합니다.<br/>
                  멘트 추후 설정 가능
                </p>
              </div>
              <div className='grid place-items-center p-5 mb-10'>
                <p className='leading-6'>
                  <span className='text-md'>{marriageData.groom_father} · {marriageData.groom_mother}</span> <span className='text-sm'>의 {marriageData.groom_no}</span><span className='text-md ml-5'>{marriageData.groom_ko}</span>
                </p>
                <p className='leading-6'>
                  <span className='text-md'>{marriageData.bride_father} · {marriageData.bride_mother}</span> <span className='text-sm'>의 {marriageData.bride_no}</span><span className='text-md ml-5'>{marriageData.bride_ko}</span>
                </p>
                <button className='flex items-center mt-4 px-10 py-2 rounded-lg font-semibold bg-white opacity-70 border border-slate-300'>
                  <img src="/images/tel.png" className='w-5 h-5'/><span className='pl-2'>연락하기</span>
                </button>
              </div>
              
              {isContactOpen && <ContactList handleOpenContactList={handleOpenContactList}/>}
              
              {/* <div className='grid place-items-center mb-16 '>
                  <button className='flex items-center py-5 lg:px-56 md:px-32 sm:px-20 xs:px-16 rounded-lg text-rose-red font-semibold bg-rose-100 opacity-70'>
                    <img src='/images/interview2.png' className='w-5 h-5 mr-1.5' alt='interview' />신랑 & 신부의 인터뷰
                  </button>
              </div> */}
          </div>
        )
      }
    </main>
  )
}

export default Home