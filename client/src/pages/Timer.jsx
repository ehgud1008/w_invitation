import React, { useEffect, useState } from 'react'

const Timer = ({wedding_date}) => {
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    useEffect( () => {
        if(wedding_date){
            console.log(wedding_date);
            const date = new Date(wedding_date);
            const today = new Date();
            
            //결혼날짜 - 오늘날짜 mill sec
            const dis = date.getTime() - today.getTime();
            const min1 = 1000 * 60; //밀리세컨드
            
            const d = Math.floor(dis/(min1*60*24));   //1000*60*60*24   일
            const h = Math.floor((dis%(min1*60*24))/(min1*60));  //1000*60*60   시간
            const m = Math.floor((dis%(min1*60))/ min1);       //1000*60    분
            const s = Math.floor((dis%min1)/1000);             //초
            
            setDay(d);
            setHour(h);
            setMinute(m);
            setSecond(s);
            
            const timer = setInterval( () => {
                //1초 마이너스
                if(parseInt(second) > 0){
                    setSecond(parseInt(second)-1);
                }
                
                //타이머 설정
                if(parseInt(second) === 0){
                    if(parseInt(minute) === 0 ){
                        if(parseInt(hour) === 0) {
                            if(parseInt(day) === 0){
                                clearInterval(timer);
                            }else{
                                setDay(parseInt(day)-1);
                                setHour(23);
                                setMinute(59);
                                setSecond(59);
                            }
                        }else{
                            setHour(parseInt(hour)-1);
                            setMinute(59);
                            setSecond(59);
                        }
                    }else{
                    setMinute(parseInt(minute)-1);
                    setSecond(59);
                }
            }
        }, 1000);
        
        return () => clearInterval(timer);
        }    
    }, [wedding_date, day, hour, minute, second]);
    return (
        <div className='mb-20'>
            <div className='flex justify-center items-center bg-white shadow-lg rounded-lg py-4'>
                <div className='mx-5 bg-gray-100 text-gray-800 rounded-lg shadow px-6 py-3 text-lg font-semibold'>
                    {day} <span className='text-sm text-gray-500'>Days</span>
                </div>
                <div className='mx-5 bg-gray-100 text-gray-800 rounded-lg shadow px-6 py-3 text-lg font-semibold'>
                    {hour} <span className='text-sm text-gray-500'>Hours</span>
                </div>
                <div className='mx-5 bg-gray-100 text-gray-800 rounded-lg shadow px-6 py-3 text-lg font-semibold'>
                    {minute} <span className='text-sm text-gray-500'>Minutes</span>
                </div>
                <div className='mx-5 bg-gray-100 text-gray-800 rounded-lg shadow px-6 py-3 text-lg font-semibold'>
                    {second} <span className='text-sm text-gray-500'>Seconds</span>
                </div>
            </div>
        </div>
  )
}

export default Timer