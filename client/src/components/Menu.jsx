import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='h-screen w-screen'>
        {/* 햄버거 아이콘 */}
        <ul className='gap-4 bg-white shadow-md rounded-md'>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>인사말</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>인터뷰</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>웨딩데이</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>갤러리</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>예식정보</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>게스트북</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>연락처</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'> 마음 전하실 곳</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>오시는 길</li>
          </Link>
          <Link to="">
            <li className='text-slate-700 hover:underline font-bold'>감사 인사</li>
          </Link>
        </ul>
      </div>
  )
}

export default Menu