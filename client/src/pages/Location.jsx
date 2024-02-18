import React, { useContext, useEffect, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk';
import { LocationContext } from '../context/LocationContext';

const Location = ({seq}) => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const {locationData, setLocationData} = useContext(LocationContext);
  const [latlng, setLatlng] = useState([]);

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
    const tel = locationData.hall_contact; // 전화번호를 여기에 입력하세요
    window.location.href = `tel:${tel}`;
  }
  
  //현재 기기 모바일인지 체크
  const isMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(40|60)|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent);
  }
  const openNavi = (goto) => () => {
    const address = locationData.address;
    const lat = latlng.Ma;
    const lng = latlng.La;

    console.log(latlng);
    if(goto == 'kakaoNavi'){
      if(isMobile()) {
        // location.href = "kakaonavi-wguide://navigate?ep=" + lat + ","+lng;
        location.href = 'kakaoNavi://route?ep=' + lat + ',' + lng + '&by=CAR';
      }else{
        window.open('https://map.kakao.com/link/to/' + locationData.address + ',' + lat + "," + lng, '_blank');
      }
    }else if(goto == 'naverMap'){
      if (isMobile()) {
        window.open('nmap://place?lat=' + lat + '&lng=' + lng + '&appname=wedding_invitation', '_blank');
      } else {
        window.open('https://map.naver.com/v5/search/' + locationData.address, '_blank');
      }
    }else if(goto == 'kakaoMap'){
      if (isMobile()) {
        // 모바일 기기에서 실행할 경우
        window.open('kakaomap://route?sp=37.537229,127.005515&ep=' + lat + ',' + lng + '&by=PUBLICTRANSIT', '_blank');
      } else {
        // PC에서 실행할 경우
        window.open('https://map.kakao.com/link/to/' + locationData.address + ',' + lat + ',' + lng, '_blank');
      }
    }
  }
  
  useEffect( ()=> {
    if(seq > 0){
      const fetchLocationData = async () => {
        try {
          const res = await fetch(`/api/location/${seq}`);
          const data = await res.json();
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
    }
  }, [seq]);

  useEffect ( () => {
    if(locationData != null){
      // Kakao Maps SDK 초기화
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 초기 지도 중심 좌표
            level: 3, // 줌 레벨
        };
  
        // 지도 생성
        const map = new window.kakao.maps.Map(container, options);
  
        // 주소-좌표 변환 객체를 생성합니다
        // const geocoder = new window.kakao.maps.services.Geocoder();
        const geocoder = new window.kakao.maps.services.Geocoder();
  
  
        const imageSrc = '/images/weddingMarker.png', // 마커이미지의 주소입니다    
              imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
              imageOption = {offset: new kakao.maps.Point(25, 50)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
  
        const panTo = () => {
          // 이동할 위도 경도 위치를 생성합니다 
          var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
          
          // 지도 중심을 부드럽게 이동시킵니다
          // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
          map.panTo(moveLatLon);            
        }    
        
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(locationData.address, function(result, status) {
          // 정상적으로 검색이 완료됐으면 
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            //좌표세팅
            setLatlng(coords);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
              image: markerImage // 마커이미지 설정 
            });
        
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // var infowindow = new kakao.maps.InfoWindow({
              //   content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
              // });
              
            // 마우스 드래그로 지도 이동 가능여부를 설정합니다
            map.setDraggable(true);
  
            // 결과값으로 받은 위치를 지도의 중심으로 설정합니다
            map.setCenter(coords);
          } 
        });
      });
    }
  }, [locationData]);

  return (
    <div className='mx-auto bg-white overflow-x-hidden 2xs:w-1/1 xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3'>
      <div className="grid place-items-center text-xl font-bold mt-5 py-5">
        <span className='tracking-wide text-xs text-rose-400 mb-1 uppercase'>Location</span>
        <span className='text-lg font-bold text-rose-400'>오 시 는 길</span>
      </div>
      <div id="map" className='w-full h-64 z-0'>
      </div>
      <div className="map-area bg-white p-6 rounded-lg">
          <div className='px-3 pb-3 w-full flex items-center justify-between'>
            <span className='flex items-center font-bold'>
              <img src='/images/location.png' className='w-4 h-4 mr-2' alt="location" />
              <div id="address">{locationData != null? locationData.address : ""}</div>
            </span>
            <button className='' onClick={handleAddressCopy}>
              <img src='/images/copy.png' className='w-5 h-4' alt='copy' />
            </button>
          </div>

          <div className='px-3 pb-3 w-full flex items-center justify-between'>
            <span className='flex items-center'>
              <span className='pl-6'>{locationData != null? locationData.hall_name : ""}</span>
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
                  {/* <a href="kakaonavi-wguide://navigate?ep=37.5662952,126.9779451">
                      <img src="/images/kakaonavi.png" className='w-14 h-14 mb-2 rounded-full'/>
                      <span className='font-bold text-sm'>카카오내비</span>
                  </a> */}
                  <li className='grid justify-items-center'>
                    <a onClick={openNavi('kakaoNavi')}>
                        <img src="/images/kakaonavi.png" className='w-14 h-14 mb-2 rounded-full'/>
                        <span className='font-bold text-sm'>카카오내비</span>
                    </a>
                  </li>
                  <li className='grid justify-items-center'>
                    <a onClick={openNavi('naverMap')}>
                      <img src="/images/navermap.png" className='w-14 h-14 mb-2 rounded-full'/>
                      <span className='font-bold text-sm'>네이버지도</span>
                    </a>
                  </li>
                  <li className='grid justify-items-center'>
                    <a onClick={openNavi('kakaoMap')}>
                      <img src="/images/kakaomap.png" className='w-14 h-14 mb-2 rounded-full'/>
                      <span className='font-bold text-sm'>카카오맵</span>
                    </a>
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
      <div className="grid-cols-1 md:grid-cols-2 mt-2">
          <div className="info px-8 rounded-lg">
            <div className='text-left pb-3'>
              <p className='mt-5 text-left font-bold '>
                지하철 이용 시
              </p>
              <ul className='list-inside text-sm pt-3'>
                <li className='list-disc'>
                  {locationData != null? locationData.subway : ""}
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