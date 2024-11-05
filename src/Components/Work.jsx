import React from 'react'
import Hero from './Hero'
import '../Styles/Work.css'
import Footer from './Footer'

export default function () {
  return (
    <div className="bodyWrap" id='bodyWrap'>
      <div className='Work' id=''>
        <Hero/>
        <div className="WorkText">
          <div className="proj1">
                <div className="proj11"></div>
                <div className="proj12"></div>
          </div>
            <h2>In Progress.</h2>
            <span>Work in various states of design and development, from concept ideation, to <br />&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;full-scale product implementation and feature enhancement.</span>
            <div className="proj2">
                <div className="proj21"></div>
                <div className="proj22"></div>
            </div>
        </div>
        <Footer/>
    </div>
    </div>
  )
}
