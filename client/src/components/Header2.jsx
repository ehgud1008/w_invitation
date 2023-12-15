import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        {/* 햄버거 아이콘 */}
        <div class="block lg:hidden">
          <div id="burger" class="flex items-center" onclick="toggleMenu()">
            <img src='/images/hamburger.png' className='w-7 h-7' alt='menu' />
          </div>
        </div>
        <ul className='flex gap-4 hidden lg:flex absolute  top-0 right-0 mt-16 mr-4 bg-white shadow-md rounded-md'>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>인사말</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>인터뷰</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>웨딩데이</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>갤러리</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>예식정보</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>게스트북</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>연락처</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'> 마음 전하실 곳</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>오시는 길</li>
          </Link>
          <Link to="">
            <li className='sm:inline text-slate-700 hover:underline font-bold'>감사 인사</li>
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header