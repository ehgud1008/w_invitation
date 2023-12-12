import React from 'react'

const Home = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-4xl font-bold mb-4">신랑 & 신부의 결혼식</h1>
        <img src="bride_groom_image.jpg" alt="신랑 & 신부" class="rounded-full h-40 w-40 object-cover mb-4 animate-pulse" />
        <p class="text-lg text-gray-700 mb-8 text-center">환영합니다! 저희의 특별한 날을 함께해주세요.</p>
        <div class="max-w-md bg-white p-8 rounded-lg shadow-lg w-full lg:w-2/3">
        <h2 class="text-2xl font-bold mb-4">날짜 & 시간</h2>
        <p class="text-gray-700 mb-4">날짜: 2024년 6월 15일</p>
        <p class="text-gray-700 mb-4">시간: 오후 4시</p>
        <h2 class="text-2xl font-bold mb-4">장소</h2>
        <p class="text-gray-700 mb-4">장소: 어딘가의 멋진 곳</p>
        <p class="text-gray-700 mb-4">주소: 서울시 강남구 예뻐요길 123</p>
        <a href="/rsvp" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 block text-center">RSVP</a>
        </div>
    </div>
  )
}

export default Home