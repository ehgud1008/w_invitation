//날짜 뽑아오기('Y', 'M', 'D', "H", "MM", "S", "W")
export const stringFormatDate = (dateString, format) => {
    const weekNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    const weekEngNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                        ];  
    if (!dateString || !format) return '';

    // 'YYYY-MM-DD hh:mm:ss' 형식의 문자열을 Date 객체로 변환
    const date = new Date(dateString);
  
    // 유효한 날짜인지 확인
    if (isNaN(date.getTime())) {
      return '';
    }
    
    switch (format) {
      case 'Y':
        return date.getFullYear().toString(); // 연도 반환
      case 'M':
        return (date.getMonth() + 1).toString().padStart(2, '0'); // 월 반환 (1을 더하고 두 자리로 표시)
      case 'M-en':
        return monthNames[date.getMonth()]; // 월 반환 (1을 더하고 두 자리로 표시)
      case 'D':
        return date.getDate().toString().padStart(2, '0'); // 일 반환 (두 자리로 표시)
      case 'H':
        return date.getHours().toString(); // 시
      case 'MM':
        return date.getMinutes().toString() === "0" ? "" : date.getMinutes().toString() + "분"; // 분
      case 'S':
        return date.getSeconds().toString(); // 초
      case 'W':
        return weekNames[date.getDay()]; // 요일
      case 'W-en':
        return weekEngNames[date.getDay()]; // 요일
      case 'A':
        return date.getHours() > 12 ? '오후' : '오전'; // 오전/오후
      default:
        return '';
    }
  };