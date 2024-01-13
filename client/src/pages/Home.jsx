import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MarriageContext } from '../MarriageContext';
 
const Home = () => {
  const params = useParams();
  const url = params.url;
  
  // const [weddingInfo, setWeddingInfo] = useState(null);
  const [weddingDate, setWeddingDate] = useState('');
  const [weddingInfo, setWeddingInfo] = useState(null);
  const { marriageData, setMarriageData } = useContext(MarriageContext);

  useEffect( () => {
    const fetchWeddingInfo = async () => {
      try {
        const res = await fetch(`/api/wedding/${url}`);
        const data = await res.json();
        console.log(data);
        if(data == null){
          //리다이렉트 시키던지 alert 시키던지 
          console.log("ASDFASDF");
          return;
        }
        setMarriageData(data);
        console.log(marriageData);
        const wedding_date = new Date(marriageData.wedding_date);

        console.log(wedding_date);
        // setWeddingDate(wedding_date);
        // fetchWeddingInfo();
      } catch (error) {
        console.log(error);
      }
    } 
    
    fetchWeddingInfo();
  }, [params.url]);

  //seq, 신랑이름, 신랑영어이름, 신랑서열(1,2,3,4...), 신부이름, 신부영어이름, 신부서열,
  // 결혼날짜, 메인사진, 갤러리 사진(최대 10장), 영상링크하나,
  //식장 주소, 식장 약도, 식장번호, [지하철(호선, 출구, 도보)], [버스(정류장)]
  return (
    <main>
      {marriageData && (
        <div className="flex flex-col items-center justify-center min-h-screen mt-20">
            <div className="flex font-bold mb-4 items-center">
              <span className='col'>
                <p className='text-lg  tracking-widest'>{marriageData.groom_ko}</p>
                {/* <p className='text-xs'>Kim Cheolsu</p> */}
              </span>
              <span className='grid place-items-center mx-5 tracking-widest indent-3.5'>
                <p className='text-xl border-solid border-b-2 border-slate-500 '>{(marriageData.getMonth()+1) < 10? "0" + (marriageData.getMonth()+1) : (weddingDate.getMonth()+1)}</p>
                <p className='text-xl'>{marriageData.getDate() < 10 ? "0" + marriageData.getDate() : marriageData.getDate()}</p>
              </span>
              <span className='col'>
                <p className='text-lg ml-5 tracking-widest'>{marriageData.bride_ko}</p>
                {/* <p className='text-xs'>Younghee Kim</p> */}
              </span>
            </div>
            {/* <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="rounded-full h-40 w-40 object-cover mb-4 animate-pulse" /> */}
            <div className='mx-8 mt-5'>
              <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="full h-100 w-50 object-cover mb-8 aspect-[2/3]"/>
            </div>
            <p className="text-md text-gray-700 mb-8 text-center">
              2020년 1월 1일 월요일 오후 12시 00분<br/>웨딩 시그니처 4층 아너스홀
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
                <span className='text-md'>신랑부 · 신랑모</span> <span className='text-sm'>의 장남</span><span className='text-md ml-5'>철수</span>
              </p>
              <p className='leading-10'>
                <span className='text-md'>신부부 · 신부모</span> <span className='text-sm'>의 차녀</span><span className='text-md ml-5'>영희</span>
              </p>
            </div>
            <div className='grid place-items-center mb-16 '>
                <button className='flex items-center py-5 lg:px-56 md:px-32 sm:px-20 xs:px-16 rounded-lg text-rose-red font-semibold bg-rose-100 opacity-70'>
                  <img src='/images/interview2.png' className='w-5 h-5 mr-1.5' alt='interview' />신랑 & 신부의 인터뷰
                </button>
            </div>
            {/* <div className="max-w-md bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4">날짜 & 시간</h2>
            <p className="text-gray-700 mb-4">날짜: 2024년 6월 15일</p>
            <p className="text-gray-700 mb-4">시간: 오후 4시</p>
            <h2 className="text-2xl font-bold mb-4">장소</h2>
            <p className="text-gray-700 mb-4">장소: 어딘가의 멋진 곳</p>
            <p className="text-gray-700 mb-4">주소: 서울시 강남구 예뻐요길 123</p>
            <a href="/rsvp" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 block text-center">RSVP</a>
            </div> */}
        </div>
      )}
    </main>
  )
}

export default Home