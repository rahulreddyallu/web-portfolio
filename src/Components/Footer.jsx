import React from 'react'
import '../Styles/Footer.css'
export default function () {


  return (
    <div className='Footer' id='footer'>
        <div className="credits">© 2024 &nbsp; Rahul Reddy Allu
        </div>
        <div className="grids">
            <div className="head1">Elsewhere</div>
            <div className="head2">Contact</div>
            <div><a target='blank' href="https://github.com/rahulreddyallu">GitHub</a></div>
            <div><a href="/CV">CV</a></div>
            <div><a target='blank' href="https://www.linkedin.com/in/rahulreddyallu/">LinkedIn</a></div>
            <div><a href="/contact">Message</a></div>
        </div>
    </div>
  )
}
