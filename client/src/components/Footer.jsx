import React from 'react'

const Footer = () => {
  return (
    <div className='mx-auto bg-white overflow-x-hidden 2xs:w-full xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3'>
        <div className="py-8">
            <div className="grid place-items-center text-md font-bold mb-4">Footer</div>
            <div className="flex flex-col items-center space-y-4">
                <button className="px-4 py-2 bg-rose-500 text-white rounded-full shadow hover:bg-rose-600 transition-colors duration-200">
                    카카오톡 공유하기
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-colors duration-200">
                    URL 복사
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer
