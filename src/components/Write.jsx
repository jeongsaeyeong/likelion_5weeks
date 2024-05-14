import React, { useState } from 'react'
import Article from './Article';
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <>
            {show ? (
                <Article title={title} content={content} />
            ) : (
                <div className='write_wrap'>
                    <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='제목을 입력해주세요!' className='title' />
                    <textarea value={content} onChange={(e) => { setContent(e.target.value) }} placeholder='내용을 입력해주세요!' className='content' />
                    <div>
                        <button className="delete" onClick={() => { handleClick() }}>취소하기</button>
                        <button className="write" onClick={() => { setShow(true) }}>작성하기</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Write