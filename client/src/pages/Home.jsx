import React from 'react'
 
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20">
        <div className="flex font-bold mb-4 items-center">
          <span className='col'>
            <p className='text-md'>김 철 수</p>
            {/* <p className='text-xs'>Kim Cheolsu</p> */}
          </span>
          <span className='items-center'>
            <p className=''>April</p>
            <p className=''> 04 </p>
          </span>
          <span className='col'>
            <p className='text-md'>김 영 희</p>
            {/* <p className='text-xs'>Younghee Kim</p> */}
          </span>
        </div>
        <img src="/images/wedding_sample.jpg" alt="신랑 & 신부" className="rounded-full h-40 w-40 object-cover mb-4 animate-pulse" />
        <p className="text-lg text-gray-700 mb-8 text-center">환영합니다! 저희의 특별한 날을 함께해주세요.</p>
        <div className="max-w-md bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/3">
        <h2 className="text-2xl font-bold mb-4">날짜 & 시간</h2>
        <p className="text-gray-700 mb-4">날짜: 2024년 6월 15일</p>
        <p className="text-gray-700 mb-4">시간: 오후 4시</p>
        <h2 className="text-2xl font-bold mb-4">장소</h2>
        <p className="text-gray-700 mb-4">장소: 어딘가의 멋진 곳</p>
        <p className="text-gray-700 mb-4">주소: 서울시 강남구 예뻐요길 123</p>
        <a href="/rsvp" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 block text-center">RSVP</a>
        </div>
    </div>
  )
}

export default Home