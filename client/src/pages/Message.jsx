import React, { useContext, useEffect, useState } from 'react'
import {MessageContext} from '../context/MessageContext';
import { useParams } from 'react-router-dom';

const Message = ({seq}) => {
    const params = useParams();

    const {messageData, setMessageData} = useContext(MessageContext);
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(params.page || 1)
    const pageSize = 3;
    const limit = pageSize;
    const offset = (page-1) * pageSize;

    const [pageGroup, setPageGroup] = useState(1);
    const pageGroupSize = 5;

    // 페이지 번호 버튼 (현재 그룹에 해당하는 페이지만 표시)
    const startPage = (pageGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(pageGroup * pageGroupSize, pagination.totalPages);
 

    const handleChange = (e) => {
        const inputText = e.target.value;
        if(e.target.id == "message"){
            if (inputText.length > 200) {
                alert("최대 200자까지 입력 가능합니다.");
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    const handlePrevGroup = () => {
        if (pageGroup > 1) {
            const newPageGroup = pageGroup - 1;
            setPageGroup(newPageGroup);
            setPage((newPageGroup - 1) * pageGroupSize + 1); // 수정된 코드
          }
    }
    const handleNextGroup = () => {
        const totalGroups = Math.ceil(pagination.totalPages / pageGroupSize);
        if (pageGroup < totalGroups) {
            const newPageGroup = pageGroup + 1;
            setPageGroup(newPageGroup);
            setPage((newPageGroup - 1) * pageGroupSize + 1); // 수정된 코드
        }
    }
    //이전페이지
    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            // 페이지 그룹 업데이트
            if ((page - 1) % pageGroupSize === 0) {
                setPageGroup((page - 1) / pageGroupSize);
            }
        }
    }
    //다음페이지
    const handleNextPage = () => {
        if (page < pagination.totalPages) {
            setPage(page + 1);
            // 페이지 그룹 업데이트
            if ((page + 1 - 1) % pageGroupSize === 0) {
                setPageGroup((page + 1 - 1) / pageGroupSize + 1);
            }
        }
    }

    //페이지 선택
    const handlePageChange = (index) => {
        setPage(startPage + index - 1); // 수정된 코드
    }

    useEffect( () => {
        if(seq) {
            const fetchMessageData = async () => {
                try {
                    const res = await fetch(`/api/message/${seq}`, {
                        method: 'POST',
                        headers : {
                            'Content-Type': 'application/json', // JSON 형태로 데이터를 보낸다고 명시
                        },
                        body : JSON.stringify({
                            page : page,
                            pageSize : pageSize,
                            limit : limit,
                            offset : offset,
                        }),
                    });
                    const data = await res.json();
                    
                    setMessageData(data.data);
                    setPagination(data.pagination);

                } catch (error) {
                    console.log(error);
                }
            }
            fetchMessageData();
        }
    }, [seq, page]);

  return (
    <div className="md:px-40 bg-white px-5">
        <div className="py-8">
            <div className="grid place-items-center text-md font-bold mb-4">Guest Book</div>
            <div className="grid place-items-center text-sm mb-5">축하 메시지를 남겨주세요.</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mb-5'>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <input type="text" name="name" id="name" onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" placeholder="이름" maxLength='10' minLength='2' />
                    </div>
                    <div>
                        <input type="password" name="pw" id="pw" onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full" maxLength='4' minLength='4' placeholder="비밀번호" />
                    </div>
                </div>
                <div className="">
                    <textarea name="message" id="message" onChange={handleChange} className="border border-gray-300 rounded-md p-2 w-full h-24" placeholder='최대 200자' maxLength={200} ></textarea>
                </div>
                
                <div className='grid place-items-center'>
                    <button type="button" className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">등록하기</button>
                </div>
            </form>
            <div className="w-full h-1 bg-gray-100"/>
            <div className="mt-8 text-sm">
                {messageData ? 
                    (messageData.map( (message) => (
                        <ul key={message.seq}>    
                            <li className="border-b border-gray-300 py-4">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="font-bold">{message.name}</div>
                                    <div className="text-sm">{message.reg_date}</div>
                                </div>
                                <p className="mb-2">{message.message}</p>
                                <a href="" className="text-red-500">댓글삭제</a>
                            </li>
                        </ul>
                    ))) : 
                    (
                        ''
                    )
                }
            </div>
            <div className="flex justify-center mt-8">
                <button key="prev-group" onClick={handlePrevGroup} disabled={pageGroup === 1}
                        className='px-2 py-2 mx-1 rounded-md text-sm font-medium'>
                    {'<<'}
                </button>
                <button key="prev" onClick={handlePrevPage}
                        disabled={pagination.page === 1}
                        className='px-2 py-2 mx-1 rounded-md text-sm font-medium'>
                    {'<'}
                </button>
                {Array.from({ length: endPage - startPage+1 }, (_, i) => (
                    <button
                        key={startPage + i}
                        onClick={() => handlePageChange(i + 1)}
                        disabled={pagination.page === startPage + i}
                        className={`px-2 py-2 mx-1 rounded-md text-sm font-medium ${pagination.page === startPage + i ? 'bg-slate-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        {startPage + i}
                    </button>
                ))}
                <button key="next" onClick={handleNextPage}
                        disabled={pagination.page === pagination.totalPages} 
                        className='px-2 py-2 mx-1 rounded-md text-sm font-medium'>
                    {'>'}
                </button>
                <button key="next-group" onClick={handleNextGroup} disabled={pageGroup * pageGroupSize >= pagination.totalPages}
                        className='px-2 py-2 mx-1 rounded-md text-sm font-medium'>
                    {'>>'}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Message