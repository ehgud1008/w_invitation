import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu';
import { MarriageContext } from '../context/MarriageContext';

const Header = () => {
  const [isTop, setIsTop] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const weekNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]; 

  const { marriageData, setMarriageData } = useContext(MarriageContext);

  useEffect( () => {
    setIsTop(true);
    setMenuToggle(true);
    window.addEventListener('scroll', checkTop);
    return () => {
      window.removeEventListener('scroll', checkTop);
    }
  }, []);
  const checkTop = () => {
    const scrollTop = window.scrollY;
    if(scrollTop == 0)  {
      setIsTop(true);
    }
    else {
      setIsTop(false);
      setMenuToggle(false);
    }
  }


  const handleMenuToggle = () => { 
    
  }
  return (
  //   <header className={`w-full py-5 px-6 ${ menuToggle ? "hidden" : "block" } md:hidden`}
    (!isTop ? 
      <header className='shadow-md opacity-80 fixed  bg-white 
             w-full inset-x-0 top-0'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-12'>
            {/* <div>{marriageData.groom_en} & {marriageData.bride_en}</div> */}
            <button className='' onClick={ () => {setMenuToggle(!menuToggle); console.log(menuToggle);} }>
              <img src="/images/hamburger.png" className='w-7 h-7'/>
            </button>
          </div>
          { menuToggle 
            ? <Menu />
            : ''
          }
          
        </div>
      </header>
       : ''
    )
    
  )
}

export default Header