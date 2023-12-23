import React, { useEffect, useState } from 'react'
import { Map } from 'react-kakao-maps-sdk';

const Map2 = () => {
  useEffect( ()=> {
    window.kakao.maps.load( () => {
      const container = document.getElementById('map');
      const options = {
        center : new window.kakao.maps.LatLng(37.5665, 126.9780), // 지도 중심 좌표
        level : 3,
      };
      const map = new window.kakao.maps.Map(container, options);
    })
  }, []);

  return (
    <div className='grid place-items-center'>
      <div id="map">
      </div>    
    </div>
  )
}

export default Map2