import React, { useEffect, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk';

const Location = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

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
  }, []);

  return (
    <div className='grid place-items-center mx-8'>
      <p className='mb-5'>Location</p>
      <p className='mb-5'>오시는 길을 안내합니다</p>
      <div id="map" className='w-full h-80 z-0'>
      </div>
      <div className='px-5 pt-5 pb-3 w-full flex items-center justify-between'>
        <span className='flex items-center font-bold'>
          <img src='/images/location.png' className='w-4 h-4 mr-2' alt="location" />
          <div id="address">서울시 마포구 양화로 87 (서교동378-7)</div>
        </span>
        <button className='' onClick={handleAddressCopy}>
          <img src='/images/copy.png' className='w-4 h-4' alt='copy' />
        </button>
      </div>
      <div className='pb-5 grid place-items-center'>
        {/* <span className='text-sm'>식장 안내</span> */}
        <span className=''>웨딩 시그니처 4층 아너스홀</span>
        <span className='flex items-center'>
          <button onClick={handleCallHall}><img src="/images/tel.png" className='w-4 h-4 mr-3'/></button> 02-00-0000
        </span>
      </div>
      <div className='w-2/3 grid place-items-center mb-5'>
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
              
      <div className='w-full grid border-t-2'>
        <div className='text-left pb-3'>
          <p className='mt-5 text-left font-bold '>
            내비게이션
          </p>
          <p className='text-sm pt-3'>
            원하시는 앱을 선택하시면 길안내가 시작됩니다.
          </p>
          <span className='flex pt-3 text-sm'>
            <button className='border-2 border-gray-600 px-3 py-2 rounded-md mr-5 lg:w-1/4 md:w-1/4 sm:w-1/4'>카카오내비</button>
            <button className='border-2 border-gray-600 px-3 py-2 rounded-md mr-5 sm:w-1/4'>티맵</button>
          </span>
        </div>
        <div className='text-left pb-3'>
          <p className='mt-5 text-left font-bold '>
            지하철 이용 시
          </p>
          <ul className='px-5 list-inside text-sm pt-3'>
            <li className='list-disc'>
              삼성역 2번 출구
            </li>
          </ul>
        </div>
        <div className='text-left pb-3'>
          <p className='mt-5 text-left font-bold '>
            버스 이용 시
          </p>
          <ul className='px-5 list-inside text-sm pt-3'>
            <li className='list-disc'>
              삼성역 2번 출구
            </li>
          </ul>
        </div>
        <div className='text-left pb-3'>
          <p className='mt-5 text-left font-bold '>
            승용차 및 도보 이용 시
          </p>
          <ul className='px-5 list-inside text-sm pt-3'>
            <li className='list-disc'>
              삼성역 2번 출구
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Location