import React, { useState } from 'react'
import Comment from '../assets/img/comment.svg'
import Hart from '../assets/img/hart.svg'
import HartFull from '../assets/img/hart_full.svg'

const Article = ({ content, title }) => {
    const [hart, setHart] = useState(false);

    return (
        <div className='article_wrap'>
            <div className="article">
                <h2>{title} 임시 제목입니다</h2>
                <p>
                    {content} 임시 텍스트
                </p>
                <div>
                    <div>
                        <img src={Comment} alt="comment" />
                        <p>0</p>
                    </div>
                    <div>
                        {hart ? (
                            <>
                                <img src={HartFull} alt="hartfull" onClick={() => { setHart(!hart) }} />
                                <p>1</p>
                            </>
                        ) : (
                            <>
                                <img src={Hart} alt="hart" onClick={() => { setHart(!hart) }} />
                                <p>0</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="comment">
                <input type="text" placeholder='댓글을 입력해주세요!' />
                <button>등록</button>
            </div>
        </div>
    )
}

export default Article