import React from "react";

const Contact = () => {
  //전화하기
  const handleCall = () => {
    const tel = "010-1234-5678"; // 전화번호를 여기에 입력하세요
    window.location.href = `tel:${tel}`;
  };

  const handleSms = () => {
    const tel = "010-1234-5678"; // 전화번호를 여기에 입력하세요
    window.location.href = `sms:${tel}`;
  };
  return (
    <div className="md:px-40 grid place-items-center mt-10 ">
      <p className="mb-3 text-sm">Contact</p>
      <p className="text-lg mb-3">축하를 전해보세요.</p>
      <div className="grid grid-cols-2">
        <div className="grid place-items-center">
          <img src="/images/groom_sample.jpg" className="aspect-[2/2] my-2 w-full pl-7 pr-2" />
          <div className="grid place-items-center pl-7">
            <div className="flex items-baseline mb-2">
              <span className="text-sm mr-1">신랑</span>
              <span className="text-lg">김철수</span>
            </div>
            <div className="flex items-center mb-5">
              <button onClick={handleCall}>
                <img src="/images/phone.png" className="w-7 h-7 mr-4" alt="phone" />
              </button>
              <button onClick={handleSms}>
                <img src="/images/sms.png" className="w-7 h-7" alt="sms" />
              </button>
            </div>
            <div className="mt-2 grid place-items-center">
              <p className="text-sm font-bold tracking-tightest mb-3">
                신랑측 혼주 연락하기
              </p>
              <div className="">
                <div className="flex items-centermr-3">
                  <button onClick={handleCall}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={handleSms}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                  <div className="border-r-2 border-slate-500 mr-2"> </div>
                  <button onClick={handleCall}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={handleSms}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                </div>
                <div className="">
                  <div className="flex place-content-around text-xs">
                    <p className="py-3 mr-3">김철수<br/>아버님</p>
                    <p className="py-3">김철수<br/>어머님</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center">
          <img src="/images/bride_sample.jpg" className="aspect-[2/2] my-2 w-full pr-7 pl-2"/>
          <div className="grid place-items-center pr-7">
            <div className="flex items-baseline mb-2">
              <span className="text-sm mr-1">신부</span>
              <span className="text-lg">김영희</span>
            </div>
            <div className="flex items-center mb-5">
              <button onClick={handleCall}>
                <img src="/images/phone.png" className="w-7 h-7 mr-4" alt="phone"/>
              </button>
              <button onClick={handleSms}>
                <img src="/images/sms.png" className="w-7 h-7" alt="sms" />
              </button>
            </div>
            <div className="mt-2 grid place-items-center">
              <p className="text-sm font-bold tracking-tightest mb-3">
                신부측 혼주 연락하기
              </p>
              <div className="">
                <div className="flex items-centermr-3">
                  <button onClick={handleCall}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone"/>
                  </button>
                  <button onClick={handleSms}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                  <div className="border-r-2 border-slate-500 mr-2"> </div>
                  <button onClick={handleCall}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={handleSms}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                </div>
                <div className="">
                  <div className="flex place-content-around text-xs">
                    <p className="py-3">김영희<br/>아버님</p>
                    <p className="py-3">김영희<br/>어머님</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
