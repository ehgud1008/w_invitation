import React, { useEffect, useState } from 'react'

const Timer = () => {
    const date = new Date('2023-12-31 12:31:00 PM');
    const today = new Date();

     //결혼날짜 - 오늘날짜 mill sec
    const dis = date.getTime() - today.getTime();
    const min1 = 1000 * 60; //밀리세컨드
    
    const d = Math.floor(dis/(min1*60*24));   //1000*60*60*24
    const h = Math.floor((dis%(min1*60*24))/(min1*60));  //1000*60*60
    const m = Math.floor((dis%(min1*60))/ min1);       //1000*60
    const s = Math.floor((dis%min1)/1000);             

    // console.log(min1);
    // console.log("일 = " + day);
    // console.log("시 = " + hour);
    // console.log("분 = " + minute);
    // console.log("초 = " + second);
    
    const [day, setDay] = useState(d);
    const [hour, setHour] = useState(h);
    const [minute, setMinute] = useState(m);
    const [second, setSecond] = useState(s);
    
    useEffect( () => {
        const timer = setInterval( () => {
            if(parseInt(second) > 0){
                setSecond(parseInt(second)-1);
            }

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
    }, [day, hour, minute, second]);
  return (
    <div className='mb-20'>
        {/* 디자인 추후 고려 */}
        <div className='flex place-content-center bg-rose-red'>
            <div className='mx-5 bg-yellow-950 text-slate-50 '>
                {day}
            </div>
            <div className='mx-5 bg-yellow-950 text-slate-50 '>
                {hour}
            </div>
            <div className='mx-5 bg-yellow-950 text-slate-50 '>
                {minute}
            </div>
            <div className='mx-5 bg-yellow-950 text-slate-50 '>
                {second}
            </div>
        </div>
    </div>
  )
}

export default Timer