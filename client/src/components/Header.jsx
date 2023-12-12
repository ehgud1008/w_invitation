import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <ul className='flex gap-4'>
          <Link to="">
            <li className='hidden sm:inline text-slate-700 hover:underline font-bold'>인사말</li>
          </Link>
          <Link to="">
            인터뷰
          </Link>
          <Link to="">
            웨딩데이
          </Link>
          <Link to="">
            갤러리
          </Link>
          <Link to="">
            예식정보
          </Link>
          <Link to="">
            게스트북
          </Link>
          <Link to="">
            연락처
          </Link>
          <Link to="">
            마음 전하실 곳
          </Link>
          <Link to="">
            오시는 길
          </Link>
          <Link to="">
            감사 인사
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header