import React, { useContext, useEffect, useState } from 'react'
import { MarriageContext } from '../context/MarriageContext';

const Timer = ({wedding_date}) => {
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    const { marriageData } = useContext(MarriageContext);

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
        <div className='mx-auto bg-white overflow-x-hidden 2xs:w-1/1 xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3 pt-3 pb-10'>
            <div className="">
                <div className='flex justify-center items-center '>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-xs text-gray-400 font-semibold pb-2">DAYS</span>
                        <span className="text-2xl font-semibold text-544f4f">{day} </span>
                    </div>
                    <div className='grid'>
                        <span>&nbsp;</span>
                        <span> : </span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-xs text-gray-400 font-semibold pb-2">HOUR</span>
                        <span className="text-2xl font-semibold text-544f4f">{hour}</span>
                    </div>
                    <div className='grid'>
                        <span>&nbsp;</span>
                        <span> : </span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-xs text-gray-400 font-semibold pb-2">MIN</span>
                        <span className="text-2xl font-semibold text-544f4f">{minute}</span>
                    </div>
                    <div className='grid'>
                        <span>&nbsp;</span>
                        <span> : </span>
                    </div>
                    <div className="flex flex-col items-center px-3">
                        <span className="text-xs text-gray-400 font-semibold pb-2">SEC</span>
                        <span className="text-2xl font-semibold text-544f4f">{second}</span>
                    </div>
                </div>
            </div>
            {marriageData && (
                <div className="text-544f4f text-md text-center mt-4 font-semibold">
                    <span className="">{marriageData.groom_ko.substr(1)}, {marriageData.bride_ko.substr(1)}의 결혼식이 </span>
                    <span className="text-rose-400 font-semibold">{day}일 </span>
                    <span className="">남았습니다.</span>
                </div>
            )}
        </div>
        
  )
}

export default Timer