import React, { useEffect, useState } from 'react'

const Calendar = () => {
    const [viewTitleDate, setViewTitleDate] = useState('');
    const [dates, setDates] = useState('');
    const date = new Date('2023-12-31 12:31 PM');

    const drawWeddingDate = () => {
        const weddingDate = date.getDate();

        console.log(document.querySelectorAll('.in'));
        for(let _date of document.querySelectorAll('.in')){
            console.log(_date);
            if(+_date.innerText === weddingDate) {
                _date.classList.add('text-slate-50');
                _date.classList.add('bg-gray-950');
                _date.classList.add('rounded-full');
                break;
            }
        }
    }

    useEffect( () => {
        //db에서 결혼날짜 받아와서 세팅하는거로 변경 TODO
        const viewYear = date.getFullYear();
        const viewMonth = date.getMonth();

        setViewTitleDate(viewYear + "년 " + (viewMonth+1) + "월");

        //지난달 마지막날, 요일
        const prevLastDate = new Date(viewYear, viewMonth, 0).getDate();
        const prevLastDay = new Date(viewYear, viewMonth, 0).getDay();
        
        //이번달 마지막 날, 요일
        const thisDate = new Date(viewYear, viewMonth+1, 0).getDate();
        const thisDay = new Date(viewYear, viewMonth+1, 0).getDay();

        const prevDates = [];
        const thisDates = [...Array(thisDate+1).keys()].slice(1);
        const nextDates = [];

        //지난달 날짜 넣어주기
        if(prevLastDay !== 6){
            for(var i = 0; i < prevLastDay + 1; i++){
                prevDates.unshift(prevLastDate - i);
            }
        }
        //다음달 날짜 넣어주기
        for(var i = 1; i < 7-thisDay; i++){
            nextDates.push(i); 
        }

        //지난날, 이번날, 다음날 합치기
        const dates = prevDates.concat(thisDates, nextDates);
        const firstDateIndex = dates.indexOf(1);    //이번달 1월의 인덱스
        const lastDateIndex = dates.lastIndexOf(thisDate);  //이번달 마지막날 인덱스
        
        //날짜 뿌리기
        for(var i = 1; i < (dates.length/7)+1; i++){
            for(var j = 7*(i-1); j < 7*(i-1)+7; j++){
                const condition = j >= firstDateIndex && j < lastDateIndex+1 ? 'in' : 'out';
                if(j == 7*(i-1)){
                    dates[j] = `<tr><td class="p-3 ${condition} text-center">${dates[j]}</td>`;    
                }else if (j == (7*(i-1)+7)-1){
                    dates[j] = `<td class="p-3 ${condition} text-center">${dates[j]}</td></tr>`;   
                }else{
                    dates[j] = `<td class="p-3 ${condition} text-center">${dates[j]}</td>`;
                 }
            }

        }

        setDates(dates.join(''));

        
    }, drawWeddingDate());

    
  return (
    <div className=''>
        <div className='flex place-content-center mb-5'>
            {/* <button className='text-lg '>&lt;</button> */}
            <p className='mx-5 text-2xl'>{viewTitleDate}</p>
            {/* <button className='text-lg '>&gt;</button> */}
        </div>
        <table>
            <thead className='place-content-center border-solid border-y-2 mb-10'>
                <tr className=''>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 text-red-500'>Sun</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 '>Mon</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 '>Tue</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 '>Wed</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 '>Thu</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 '>Fri</th>
                    <th className='lg:px-10 md:px-7 sm:px-4 px-4 py-2 text-blue-500'>Sat</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={ {__html:dates}}>
            </tbody>
        </table>
        {/* <div className='flex place-content-center border-solid border-y-2 p-2 mb-10'>
            <div className='mx-3'>Sun</div>
            <div className='mx-3'>Mon</div>
            <div className='mx-3'>Tue</div>
            <div className='mx-3'>Wed</div>
            <div className='mx-3'>Thu</div>
            <div className='mx-3'>Fri</div>
            <div className='mx-3'>Sat</div>
        </div> */}
        
    </div>
  )
}

export default Calendar
