import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='h-screen w-screen absolute inset-y-0 right-0 top-12'>
        {/* 햄버거 아이콘 */}
        <ul className='gap-4 bg-white shadow-md rounded-md'>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>인사말 https://izizi.tistory.com/33</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>인터뷰</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>웨딩데이</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>갤러리</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>예식정보</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>게스트북</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>연락처</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '> 마음 전하실 곳</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>오시는 길</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold p-5 text-lg text-right right '>감사 인사</li>
          </Link>
        </ul>
      </div>
  )
}

export default Menu