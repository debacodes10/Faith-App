'use client'
import React from 'react'
import Image from 'next/image';

import courseData from './../app/courseData';

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

const Quotes = () => {

    const handleLeftQuote = () => {
        // code to show quote on left
    }

    const handleRightQuote = () => {
        // code to show quote on left
    }

  return (
    <div className='quotesContainer'>
        <div className='quotesBox'>
            <button onClick={()=>{handleLeftQuote}} style={{marginLeft: 24}} className='buttonCircle'>
                <FaAngleLeft size={25}/>
            </button>
            <div style={{width: '50%'}}>
                <p style={{fontSize: 24, fontWeight: 700, textAlign: 'center'}}>"{courseData.course.testimonial.text}"</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                    <Image src='/stock_pfp.jpg' 
                    width={50} height={50}
                    className='reviewer_pfp'/>
                    <div className='reviewBox'>
                        <p style={{fontSize: 14, fontWeight: 500}}>{courseData.course.testimonial.reviewer_name}</p>
                        <p style={{fontSize: 14}}>{courseData.course.testimonial.reviewer_designation}</p>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}} className='moreReview'>
                    <FaCircle color='#B4B4B3'/>
                    <FaCircle style={{marginLeft: 4}} color='#B4B4B3'/>
                    <FaCircle style={{marginLeft: 4}} color='#B4B4B3'/>
                </div>
            </div>
            <button onClick={()=>{handleRightQuote}} style={{marginRight: 24}} className='buttonCircle'>
                <FaAngleRight size={25}/>    
            </button>
        </div>
    </div>
  )
}

export default Quotes