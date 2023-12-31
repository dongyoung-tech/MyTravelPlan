import React from 'react'
import FreeBoardList from './FreeBoardList';
import { Routes, Route } from 'react-router-dom';
import FreeBoardView from './FreeBoardView';
import FreeBoardInsert from './FreeBoardInsert';
import FreeBoardModify from './FreeBoardModify';
const FreeBoard = () => { 

    return(
        <>
            <div className='Area-photo'><p>게시판</p></div>
            <div className='list-container'>
                <Routes>
                    <Route path="/" element={<FreeBoardList/>} />
                    <Route path="/FreeBoardView" element={<FreeBoardView/>}/>
                    <Route path="/FreeBoardInsert" element={<FreeBoardInsert/>}/>
                    <Route path = "/Modify" element ={<FreeBoardModify/>}/>
                </Routes>
            </div>
        </>
    )
}
export default FreeBoard;