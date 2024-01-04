'use client';

import React, {useState} from 'react'

import courseData from './../app/courseData'
import { TiTick } from "react-icons/ti";
import { TiTickOutline } from "react-icons/ti"

const More = () => {

const [about, setAbout] = useState(true)
const [instructor, setInstructor] = useState(false)
const [review, setReview] = useState(false)


  return (
    <div>
      <div className='cardHeadingContainer'>
        {about ? 
        <button onClick={() => {setAbout(true)}}>
          <p style={{color: '#000000', fontWeight: 600, fontSize: 17, marginBottom: 5, borderBottomColor: '#7752FE', borderBottomWidth: 2 }}>About</p>
        </button>
        :
        <button onClick={() => {setAbout(true), setInstructor(false), setReview(false)}}>
          <p style={{color: '#7D7C7C', fontWeight: 600, fontSize: 17,}}>About</p>
        </button>
          }
        
        {instructor ?
        <button onClick={() => {setInstructor(true)}}>
          <p style={{color: '#000000', fontWeight: 600, fontSize: 17, marginBottom: 5, borderBottomColor: '#7752FE', borderBottomWidth: 2}}>Instructor</p>
        </button>
        : 
        <button onClick={() => {setInstructor(true), setAbout(false), setReview(false)}}>
          <p style={{color: '#7D7C7C', fontWeight: 600, fontSize: 17}}>Instructor</p>
        </button>
        }
        
        {review ? 
        <button onClick={() => {setReview(true)}}>
        <p style={{color: '#000000', fontWeight: 600, fontSize: 17, marginBottom: 5, borderBottomColor: '#7752FE', borderBottomWidth: 2}}>Reviews</p>
      </button>
        : 
        <button onClick={() => {setReview(true), setAbout(false), setInstructor(false)}}>
          <p style={{color: '#7D7C7C', fontWeight: 600, fontSize: 17, }}>Reviews</p>
        </button>
        }
      </div>
        {about ? 
        <div className='detailsContainer'>
        <p style={{fontSize: 24, fontWeight: 700}}>About the course</p>
        <p style={{marginTop: 12, fontWeight: 400, fontSize: 15,}}>{courseData.course.aboutText}</p>
        <p style={{marginTop: 12, fontWeight: 400, fontSize: 15,}}>{courseData.course.aboutText2}</p>
        
        <p style={{marginTop: 24, marginBottom: 12, fontSize: 24, fontWeight: 700}}>What to expect from the course</p>
        <ul>
          <li style={{display: 'flex', flexDirection: 'row', fontWeight: '500', fontSize: 16}}>
            <TiTick size={23} style={{marginRight: 8}}/>
            {courseData.course.what_to_expect.html_content.l1}</li>
          <li style={{display: 'flex', flexDirection: 'row', fontWeight: '500', fontSize: 16}}>
            <TiTick size={23} style={{marginRight: 8}}/>
            {courseData.course.what_to_expect.html_content.l2}</li>
          <li style={{display: 'flex', flexDirection: 'row', fontWeight: '500', fontSize: 16}}>
            <TiTick size={23} style={{marginRight: 8}}/>
            {courseData.course.what_to_expect.html_content.l3}</li>
          <li style={{display: 'flex', flexDirection: 'row', fontWeight: '500', fontSize: 16}}>
            <TiTick size={23} style={{marginRight: 8}}/>
            {courseData.course.what_to_expect.html_content.l4}</li>
        </ul>

        <p style={{marginTop: 24, fontWeight: 700, fontSize: 24}}>Key Topics covered</p>
        <p style={{marginTop: 12, fontWeight: 400, fontSize: 16,}}>{courseData.course.key_topics_body}</p>
        <ol style={{marginTop: 16}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TiTickOutline size={23} style={{marginRight: 12}}/>
            <li dangerouslySetInnerHTML={{__html:courseData.course.key_topics.html_content.l1}} 
            style={{width: '80%', fontWeight: '400'}}></li>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TiTickOutline size={23} style={{marginRight: 12}}/>
            <li dangerouslySetInnerHTML={{__html:courseData.course.key_topics.html_content.l2}}
            style={{width: '80%', fontWeight: '400', marginTop: 6}}></li>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TiTickOutline size={23} style={{marginRight: 12}}/>
            <li dangerouslySetInnerHTML={{__html:courseData.course.key_topics.html_content.l3}}
            style={{width: '80%', fontWeight: '400', marginTop: 6}}></li>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <TiTickOutline size={23} style={{marginRight: 12}}/>
            <li dangerouslySetInnerHTML={{__html:courseData.course.key_topics.html_content.l4}}
            style={{width: '80%', fontWeight: '400', marginTop: 6}}></li>
          </div>
        </ol>
      </div>
        : null}

      {instructor ? 
      <div style={{display: 'flex', alignItems: 'center', 
      justifyContent: 'center', width: '80%', marginTop: 64}}>
        <h1 style={{fontSize: 32, fontWeight: '700'}}>Stay tuned for details on <br /> {courseData.instructor.name}!</h1>
      </div>
      : null}

      {review ? 
        <div style={{display: 'flex', alignItems: 'center', 
        justifyContent: 'center', width: '80%', marginTop: 64}}>
          <h1 style={{fontSize: 32, fontWeight: '700'}}>Stay tuned for reviews on <br /> {courseData.instructor.name}!</h1>
        </div>
        : null}
    </div>
  )
}

export default More