import React, { useContext, useEffect, useState } from "react";
import { ContactContext } from "../context/ContactContext";

const Contact = ({seq}) => {

  const {contactData, setContactData} = useContext(ContactContext);
  const [weddingInfo, setWeddingInfo] = useState({});
  //전화하기
  const handleCall = () => {
    const tel = "010-1234-5678"; // 전화번호를 여기에 입력하세요
    window.location.href = `tel:${tel}`;
  };
  
  const handleSms = () => {
    const tel = "010-1234-5678"; // 전화번호를 여기에 입력하세요
    window.location.href = `sms:${tel}`;
  };

  const handleContact = (contactType, phoneNumber) => {
    if (!phoneNumber) {
        alert('연락처 정보가 없습니다.');
        return;
    }

    if(contactType == 'sms') window.location.href = 'sms:'+phoneNumber;
    if(contactType == 'tel')  window.location.href = 'tel:'+phoneNumber;
  };

  useEffect( () => {
    if(seq) {
      const fetchContactData = async () => {
        try {
          const res = await fetch(`/api/contact/${seq}`);
          const data = await res.json();

          setContactData(data.data);
          setWeddingInfo(data.weddingInfo);
        } catch (error) {
          console.log(error);
        }
      }

      fetchContactData();
    }
  }, [seq])
  return (
    <div className='mx-auto bg-fafafa sm:w-full md:2/5 lg:w-1/4'>
      <p className="mb-3 text-sm">Contact</p>
      <p className="text-lg mb-3">축하를 전해보세요.</p>
      <div className="grid grid-cols-2">
        <div className="grid place-items-center">
          <img src="/images/groom_sample.jpg" className="aspect-[2/2] my-2 w-full pl-7 pr-2" />
          <div className="grid place-items-center pl-7">
            <div className="flex items-baseline mb-2">
              <span className="text-sm mr-1">신랑</span>
              <span className="text-lg">{weddingInfo.groom_ko}</span>
            </div>
            <div className="flex items-center mb-5">
              <button onClick={ () => handleContact('sms', weddingInfo.groom_contact)}>
                <img src="/images/phone.png" className="w-7 h-7 mr-4" alt="phone" />
              </button>
              <button onClick={ () => handleContact('sms', weddingInfo.groom_contact)}>
                <img src="/images/sms.png" className="w-7 h-7" alt="sms" />
              </button>
            </div>
            <div className="mt-2 grid place-items-center">
              <p className="text-sm font-bold tracking-tightest mb-3">
                신랑측 혼주 연락하기
              </p>
              <div className="">
                <div className="flex items-centermr-3">
                  <button onClick={ () => handleContact('sms', contactData.groom_f_contact)}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={ () => handleContact('sms', contactData.groom_f_contact)}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                  <div className="border-r-2 border-slate-500 mr-2"> </div>
                  <button onClick={ () => handleContact('sms', contactData.groom_m_contact)}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={ () => handleContact('sms', contactData.groom_m_contact)}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                </div>
                <div className="">
                  <div className="flex place-content-around text-xs">
                    <p className="py-3 mr-3">{weddingInfo.groom_father}<br/>아버님</p>
                    <p className="py-3">{weddingInfo.groom_mother}<br/>어머님</p>
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
              <span className="text-lg">{weddingInfo.bride_ko}</span>
            </div>
            <div className="flex items-center mb-5">
              <button onClick={ () => handleContact('sms', weddingInfo.bride_contact)}>
                <img src="/images/phone.png" className="w-7 h-7 mr-4" alt="phone"/>
              </button>
              <button onClick={ () => handleContact('sms', weddingInfo.bride_contact)}>
                <img src="/images/sms.png" className="w-7 h-7" alt="sms" />
              </button>
            </div>
            <div className="mt-2 grid place-items-center">
              <p className="text-sm font-bold tracking-tightest mb-3">
                신부측 혼주 연락하기
              </p>
              <div className="">
                <div className="flex items-centermr-3">
                  <button onClick={ () => handleContact('sms', contactData.bride_f_contact)}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone"/>
                  </button>
                  <button onClick={ () => handleContact('sms', contactData.bride_f_contact)}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                  <div className="border-r-2 border-slate-500 mr-2"> </div>
                  <button onClick={ () => handleContact('sms', contactData.bride_m_contact)}>
                    <img src="/images/phone.png" className="w-7 h-7 mr-2" alt="phone" />
                  </button>
                  <button onClick={ () => handleContact('sms', contactData.bride_m_contact)}>
                    <img src="/images/sms.png" className="w-7 h-7 mr-2" alt="sms" />
                  </button>
                </div>
                <div className="">
                  <div className="flex place-content-around text-xs">
                    <p className="py-3">{weddingInfo.bride_father}<br/>아버님</p>
                    <p className="py-3">{weddingInfo.bride_mother}<br/>어머님</p>
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
