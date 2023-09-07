import React from 'react'
import FreeBoardList from './FreeBoardList';
import { Routes, Route } from 'react-router-dom';
import FreeBoardView from './FreeBoardView';
const FreeBoard = () => { 

    return(
        <div className='list-container'>
             <h2>게시판</h2>
            <Routes>
                <Route path="/" element={<FreeBoardList/>} />
                <Route path="/FreeBoardView" element={<FreeBoardView/>}/>
            </Routes>
        </div>
    )
}
export default FreeBoard;