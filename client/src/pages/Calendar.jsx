import React, { useEffect, useState } from 'react'

const Calendar = () => {
    const [dates, setDates] = useState('');
    const date = new Date('2023-12-31 13:00:00');
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];  
    var weekNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]; 

    const [dateNum, setDateNum] = useState('');
    const [monthEng, setMonthEng] = useState('');
    const [viewWeek, setViewWeek] = useState('');
    const [viewDate, setViewDate] = useState('');


    const drawWeddingDate = () => {
        const weddingDate = date.getDate();
        
        for(let _date of document.querySelectorAll('.in')){
            if(+_date.innerText === weddingDate) {
                _date.classList.add('text-slate-50');
                _date.classList.add('bg-gray-950');
                _date.classList.add('rounded-full');
                break;
            }
        }
    }

    useEffect( () => {
        console.log(date);
        //db에서 결혼날짜 받아와서 세팅하는거로 변경 TODO
        const viewYear = date.getFullYear();
        const viewMonth = date.getMonth();

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

        setDateNum(date.getDate());
        setMonthEng(monthNames[date.getMonth()]);
        setViewWeek(weekNames[date.getDay()] + " ");
        const tmp = date.getHours() > 12 ? 'pm' : 'am';
        const tmp2 = date.getHours() % 12 ? date.getHours() % 12 : 12;
        const tmp3 = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
        setViewDate(tmp2+":"+tmp3 + " " + tmp);

    }, drawWeddingDate());

    
  return (
    <div className="md:px-40 calendar-section p-4 mb-10 mt-10">
      <div className="calendar-wrap">
        <div className="relative bg-white rounded-lg shadow-md p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="font-bold"><span className='text-xl'>{monthEng}</span> <span className='text-md'>{dateNum}</span> </div>
            <div className="day-time">
                <span className="text-sm">{viewWeek} {viewDate}</span>
            </div>
          </div>
          <table className="w-full text-center">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-red-500">Sun</th>
                <th className="py-2">Mon</th>
                <th className="py-2">Tue</th>
                <th className="py-2">Wed</th>
                <th className="py-2">Thu</th>
                <th className="py-2">Fri</th>
                <th className="py-2 text-blue-500">Sat</th>
              </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={ {__html:dates}}>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  )
}

export default Calendar
