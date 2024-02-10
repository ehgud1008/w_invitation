import React, { useEffect, useState } from 'react'

const ContactList = ({handleOpenContactList, contactData}) => {

  console.log(contactData );

  const handleContact = (contactType, phoneNumber) => {
    if (!phoneNumber) {
        alert('연락처 정보가 없습니다.');
        return;
    }
    console.log(contactType + ':' + phoneNumber);
    if(contactType == 'sms') window.location.href = 'sms:'+phoneNumber;
    if(contactType == 'tel')  window.location.href = 'tel:'+phoneNumber;
  };


  // useEffect( () => {
  //   const fetchContact = async () => {
  //     if(seq > 0){
  //       console.log(contactData);
  //       if(!contactData){
  //         console.log("ASDF");
  //         const res = await fetch(`/api/contact/${seq}`);
  //         const data = await res.json();
  //         setContactData(data.data);
  //         console.log("GHSDF");
  //       }
  //     }
  //   };
  //   fetchContact();
  // }, [contactData]);
  return (
    <div className="mx-auto sm:w-full md:w-2/5 fixed bg-contactList text-white top-0 w-full h-full justify-center items-center z-50 overflow-scroll p-4">
      <div className="py-6 pt-10 ">
          <span className='grid justify-center tracking-wide text-xs text-zinc-100 mb-1 uppercase'>Contact</span>
          <span className="grid justify-center tracking-wide ">연락하기</span>
          <button onClick={handleOpenContactList} type="button" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="white"></path>
              </svg>
          </button>
      </div>
      <div className="mb-6 p-5">
        <div className='flex items-end'>
          <span className="text-lg font-bold mb-2 pr-2">신랑</span>
          <span className='text-sm font-bold mb-2 tracking-wide'>GROOM</span>
        </div>
        <div className="custom-border border-b-2 mb-7"></div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신랑</span>
            <span className='flex-1'>{contactData && contactData.groom_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.groom_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('sms', contactData.groom_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신랑 아버지</span>
            <span className='flex-1'>{contactData && contactData.groom_f_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.groom_f_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('tel', contactData.groom_f_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신랑 어머니</span>
            <span className='flex-1'>{contactData && contactData.groom_m_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.groom_m_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('tel', contactData.groom_m_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className='flex items-end'>
          <span className="text-lg font-bold mb-2 pr-2">신부</span>
          <span className='text-sm font-bold mb-2 tracking-wide'>BRIDE</span>
        </div>
        <div className="custom-border border-b-2 mb-7"></div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신부</span>
            <span className='flex-1'>{contactData && contactData.bride_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.bride_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('tel', contactData.bride_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신부 아버지</span>
            <span className='flex-1'>{contactData && contactData.bride_f_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.bride_f_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('tel', contactData.bride_f_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
        <div className="mb-3">
          <div className="flex items-center px-2">
            <span className='flex-1'>신부 어머니</span>
            <span className='flex-1'>{contactData && contactData.bride_m_account_name}</span>
            <span className='contents'>
              <button onClick={ () => handleContact('tel', contactData.bride_m_contact)}><img className='w-4 h-4 mr-6' src='/images/call.png' /></button>
              <button onClick={ () => handleContact('tel', contactData.bride_m_contact)}><img className='w-5 h-6' src='/images/sms.png' /></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactList