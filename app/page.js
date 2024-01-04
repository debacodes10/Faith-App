import React from 'react';
import Image from 'next/image';
import './globals.css';

import courseData from './courseData.json';

import FeesCard from '../components/FeesCard';
import More from '@/components/More';
import Footer from '@/components/Footer';
import Quotes from '@/components/Quotes';

const App = () => {

  // console.log(courseData.course.key_topics.html_content.l1)

  return (
    <div className="container">
      <div style={{height: 400, width: '100%', overflow: 'hidden', zIndex: -1}}>
        <Image 
        className='bannerImage'
        src="/bannernew.avif"
        width={1}
        height={500}
        sizes='100vw'/>
      </div>
      <div className='bannerTextContainer'>
        <p className='bannerText'>{courseData.instructor.name}</p>
        <p className='bannerText2'>{courseData.course.title}</p>
      </div>
      <FeesCard />
      <More />
      <Footer />
      <Quotes />
    </div>
  )
}

export default App