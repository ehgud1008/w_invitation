import React, { useContext, useEffect, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk';
import { LocationContext } from '../context/LocationContext';

const Location = ({seq}) => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const {locationData, setLocationData} = useContext(LocationContext);

  console.log(seq);
  //약도 모달 열기 func
  const handleModelOpen = () => {
    setIsMapModalOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤바를 숨깁니다.
  }
  
  //주소 복사하기 func
  const handleAddressCopy = () => {
    const textToCopy = document.getElementById('address').innerHTML;
    // alert("주소를 복사했습니다.")
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          alert('텍스트가 복사되었습니다 : ' + textToCopy);
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

  //약도 다운로드 func
  const handleDownloadMap = () => {
    const link = document.createElement('a');
    link.href = document.getElementById('img01').src;
    link.download = 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  //약도 모달창 닫기 func
  const handleModalClose = () => {
    setIsMapModalOpen(false);
    document.body.style.overflow = 'auto'; // 스크롤바를 다시 표시합니다.
  }
  
  //식장에 전화하기
  const handleCallHall = () => {
    const tel = '010-1234-5678'; // 전화번호를 여기에 입력하세요
    window.location.href = `tel:${tel}`;
  }

  useEffect( ()=> {
    if(seq > 0){
      console.log("ASDFASDF" + seq);
      const fetchLocationData = async () => {
        try {
          const res = await fetch(`/api/location/${seq}`);
          const data = res.json();
          console.log(data);

          if(data == null){
            //리다이렉트 시키던지 alert 시키던지
            console.log("ASDFASDF");
            return;
          }

          setLocationData(data);

        } catch (error) {
          console.log(error);
        }
      }
      fetchLocationData();

      // Kakao Maps SDK 초기화
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도 중심 좌표
          level: 3, // 줌 레벨
        };
        
        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);
      });

    }
  }, [seq]);

  return (
    <div className="md:px-40 bg-white">
      <div className="grid place-items-center text-xl font-bold pt-5 my-5">오 시 는 길</div>
      <div id="map" className='w-full h-64 z-0'>
      </div>
      <div className="map-area bg-white p-6 rounded-lg">
        <div className='flex'>
          {/* <div className="mb-4">
              <div className="text-lg font-semibold mb-2">웨딩 시그니처 4층 아너스홀</div>
              <div className="text-sm mb-2">
                  <p>서울시 마포구 양화로 87 (서교동378-7)</p>
                  <p>Tel. 02-00-0000</p>
              </div>
          </div> */}
        </div>
          {/* <div id="map_canvas" className="map">
              <div className="w-full h-full">
                  <a href="https://map.kakao.com/?urlX=510720.0&amp;urlY=1124069.0&amp;itemId=26497843&amp;q=%EC%84%9C%EC%9A%B8%EC%88%B2A%ED%83%80%EC%9B%8C&amp;srcid=26497843&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank">
                      <img className="map rounded-lg" src="//t1.daumcdn.net/roughmap/imgmap/e4a136bdc0a737dd8c6a0812eebdb5fa1bfe55660e458c000633c51c83b13def" width="100%" height="100%" />
                  </a>
              </div>
          </div> */}
          <div className='px-3 pb-3 w-full flex items-center justify-between'>
            <span className='flex items-center font-bold'>
              <img src='/images/location.png' className='w-4 h-4 mr-2' alt="location" />
              <div id="address">서울시 마포구 양화로 87 (서교동378-7)asdfasdfasdfㅁㄴㅇㄻㄴㅇㄹ</div>
            </span>
            <button className='w-7' onClick={handleAddressCopy}>
              <img src='/images/copy.png' className='w-4 h-4' alt='copy' />
            </button>
          </div>

          <div className='px-3 pb-3 w-full flex items-center justify-between'>
            <span className='flex items-center'>
              <span className='pl-6'>웨딩 시그니처 4층 아너스홀</span>
            </span>
            <span className='flex items-center'>
              <button onClick={handleCallHall}><img src="/images/tel.png" className='w-4 h-4'/></button> 
            </span>
          </div>

          <div className="link mt-4 w-full mb-6">
              <ul className="flex gap-4 justify-around">
                  {/* <li className='grid justify-items-center'>
                    <img src="/images/tmap.png" className='w-10 h-10 border-2 border-slate-500 mb-2 rounded-full'/>
                    <span>티맵</span>
                  </li> */}
                  <li className='grid justify-items-center'>
                    <img src="/images/kakaonavi.png" className='w-14 h-14 mb-2 rounded-full'/>
                    <span className='font-bold text-sm'>카카오내비</span>
                  </li>
                  <li className='grid justify-items-center'>
                    <img src="/images/navermap.png" className='w-14 h-14 mb-2 rounded-full'/>
                    <span className='font-bold text-sm'>네이버지도</span>
                  </li>
                  <li className='grid justify-items-center'>
                    <img src="/images/kakaomap.png" className='w-14 h-14 mb-2 rounded-full'/>
                    <span className='font-bold text-sm'>카카오맵</span>
                  </li>
              </ul>
          </div>
          <div className='grid place-items-center mb-3'>
            <button onClick={handleModelOpen} className='py-2 md:px-10 sm:px-5 xs:px-3 border-2 rounded-md border-gray-500 flex items-center'>
              <img src="/images/map.png" className='w-4 h-4 mr-3' alt="map" />약도 이미지 보기
            </button>
          </div>
          {isMapModalOpen && (
            <div className='myModal backdrop-blur-sm fixed top-0 left-0 w-full h-full flex items-center justify-center' id="mapModal">
              <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
              <div className="modal-content z-50">
                <button onClick={handleDownloadMap} className="absolute top-0 left-0 mt-4 ml-4 py-2 px-4">
                  <img src="/images/download.png" className='w-6 h-6' alt="download" />
                </button>
                <button onClick={handleModalClose} className="absolute top-0 right-0 mt-4 mr-4 py-2 px-4">
                  <img src="/images/close.png" className='w-6 h-6' alt="close" />
                </button>
                <img src="/images/hall_map.jpg" className='w-full' alt="hall_map" id="img01" />
              </div>
            </div>
          )}
      </div>
      <div className="w-full h-1 bg-gray-100"/>
      <div className="grid-cols-1 md:grid-cols-2 mt-2 mb-4">
          <div className="info px-8 rounded-lg">
            <div className='text-left pb-3'>
              <p className='mt-5 text-left font-bold '>
                지하철 이용 시
              </p>
              <ul className='list-inside text-sm pt-3'>
                <li className='list-disc'>
                  2호선, 6호선 합정역 : 2번 출구 도보 4분<br/>
                </li>
                <li className='list-disc'>
                  홍대입구, 공항철도, 경의선 : 1번출구 도보 11분
                </li>
              </ul>
            </div>
            <div className="w-full h-1 bg-gray-100"/>
            <div className='text-left pb-3'>
              <p className='mt-5 text-left font-bold '>
                버스 이용 시
              </p>
              <ul className='list-inside text-sm pt-3'>
                <li className='list-disc'>
                  서교동/우리은행서교동지점/합정역 하차
                </li>
                <li className='list-disc'>
                  파랑(간선) : 271A, 921, 271A, 602, 603, 604, 761
                </li>
                <li className='list-disc'>
                  초록(지선) : 마포16, 마포08, 마포09, 마포15, 5712, 5714, 6712, 6716, 7612
                </li>
                <li className='list-disc'>
                  삼화고속 : (인천-&gt;서울) 합정 전철역
                </li>
              </ul>
            </div>
            <div className="w-full h-1 bg-gray-100"/>
            <div className='text-left pb-3'>
              <p className='mt-5 text-left font-bold '>
                승용차 및 도보 이용 시
              </p>
              <ul className='list-inside text-sm pt-3'>
                <li className='list-disc'>
                  제1주차장 : 본건물
                </li>
                <li className='list-disc'>
                  제2주차장 : H스퀘어
                </li>
                <li className='list-disc'>
                  제3주차장 : 서교빌딩 주차장
                </li>
              </ul>
            </div>
            <div className="w-full h-1 bg-gray-100"/>
            <div className='text-left pb-3'>
              <p className='mt-5 text-left font-bold '>
                전세버스안내
              </p>
              <ul className='list-inside text-sm pt-3'>
                <li className='list-disc'>
                  예식당일 오전 11시 / 동대입구 전철역 1번출구 앞 출발
                </li>
              </ul>
            </div>
            <div className="w-full h-1 bg-gray-100 mb-10"/>
          </div>
          <div className="info bg-gray-100 p-1 rounded-lg" />
      </div>
    </div>

  )
}

export default Location