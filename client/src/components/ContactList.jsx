import React from 'react'

const ContactList = ({handleOpenContactList}) => {
  return (
    <div className="mx-auto sm:w-full md:w-2/5 fixed top-0 w-full h-full justify-center items-center z-50 overflow-scroll">
        <div className="bg-white py-6 px-6 ">
            <div className="">
                연락처 목록
            </div>
        </div>
    </div>
  );
};


export default ContactList