import React from 'react';
import courseData from '@/app/courseData';

import { MdOndemandVideo } from "react-icons/md";
import { IoIosChatboxes } from "react-icons/io";

const FeesCard = () => {
  return (
    <div className='feesCard'>
        <p style={{fontWeight: '700', fontSize: 16, color: '#3D3B40'}}>Course Fees</p>
        <p style={{fontWeight: '700', fontSize: 24, color: '#000000'}}>{courseData.course.fee.currency ? <>₹</> : null}{courseData.course.fee.amount}</p>
        <div style={{marginTop: 10}}>
            <p style={{color: '#000000', fontWeight: '700', fontSize: 16,}}>What's included:</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <MdOndemandVideo size={22} style={{marginRight: 5,}}/>
                <p>{courseData.course.inclusions.on_demand_videos} on-demand videos</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <MdOndemandVideo size={22} style={{marginRight: 5,}}/>
                <p>{courseData.course.inclusions.livestream_sessions} livestream sessions</p>
            </div>
            {courseData.course.inclusions.live_qa_sessions ? 
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <IoIosChatboxes size={22} style={{marginRight: 5,}}/>
                <p>Live Q&A sessions with Nityanand Charan Das</p>
            </div>
            : null}
            {courseData.course.inclusions.whatsapp_community ? 
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <IoIosChatboxes size={22} style={{marginRight: 5,}}/>
                <p>An active whatsapp community</p>
            </div>
            : null}
        </div>
        <div className='registerBtnContainer'>
            <button className='registerBtn'>
                <p className='registerBtnText'>Register today</p>
            </button>
        </div>
    </div>
  )
}

export default FeesCard