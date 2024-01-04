import React from 'react'
import Image from 'next/image'

import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

import courseData from './../app/courseData'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div>
            <p style={{fontSize: 24, fontWeight: 700, marginBottom: 8}}>About the instructor</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <Image src='/pfp.jpg'
                    height={150} width={150}
                    style={{borderRadius: 100, marginTop: 36, marginLeft: 8}} />
                <p style={{width: '36%', marginLeft: 36, }}>{courseData.course.about_instructor.at1}</p>
                <p style={{width: '40%', marginLeft: 36,}}>{courseData.course.about_instructor.at2}</p>
            </div>
            <div className='socialContainer'>
            <a href='https://www.facebook.com/NityanandCharanD/' target='_blank'>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                            <FaFacebook size={25} color='#316FF6'/>
                            <p style={{marginLeft: 8, fontWeight: 600, fontSize: 16,}}>Facebook</p>
                    </div>
                </a>
                <a href='https://twitter.com/nityananda_c?lang=en' target='_blank'>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <BsTwitterX size={25}/>
                        <p style={{marginLeft: 8, fontWeight: 600, fontSize: 16,}}>Twitter</p>
                    </div>
                </a>
                <a href='https://www.youtube.com/c/NityanandCharanDas' target='_blank'>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <FaYoutube size={25} color='#CD201F'/>
                        <p style={{marginLeft: 8, fontWeight: 600, fontSize: 16,}}>Youtube</p>
                    </div>
                </a>
                <a href='https://www.instagram.com/nityanand_charan_das/?hl=en' target='_blank'>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <BsInstagram className='instaIcon' size={25}/>
                        <p style={{marginLeft: 8, fontWeight: 600, fontSize: 16,}}>Instagram</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer