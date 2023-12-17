import React, { useEffect, useState } from 'react'

const Timer = () => {
    const date = new Date('2023-12-31 12:31 PM');

    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [sec, setSec] = useState('');
    
    const [time, setTime] = useState(''); //남은 단위
    const setTimer = () => {
        
    }

    useEffect( () => {
        //결혼날짜 - 오늘날짜 sec
        const today = new Date();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();
        const todayHour = today.getHours();
        const todayMin = today.getMinutes();
        const todayMill = today.getMilliseconds();


        const dis = date.getTime() - today.getTime();
        const min1 = 1000 * 60;
        console.log(dis);

        setDay(Math.floor(dis/min1*60*24));
        setHour(Math.floor(dis%(min1*60*24)) / (min1*60));

        console.log(day);
        console.log(hour);

        // const timer = setInterval( () => {
            
        // })
    })
  return (
    <div className='mb-20'>
        <div className='flex place-content-center'>
            <div className=''>
                달
            </div>
            <div className=''>
                일 ${day}
            </div>
            {/* 보통 한달에 720시간인데 3달 넘어가면 범위가 너무 커져서 굳이 ? */}
            {/* <div className=''>
                시 ${hour}
            </div>
            <div className=''>
                분
            </div>
            <div className=''>
                초
            </div> */}
        </div>
    </div>
  )
}

export default Timer