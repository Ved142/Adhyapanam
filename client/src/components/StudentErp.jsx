import React from 'react'
import RegLog from './RegLog'
import "./css/dashboard.css"

function StudentErp() {
    return (
        <div className="container m-3 mx-auto" style={{display: 'flex', flexDirection: "row"}}>
            <div className="image_anim container">
                <center><h3 className="portal_text"><strong>Student Portal</strong></h3></center>
                <img style={{width: '500px', height: '500px',objectFit:"contain"}} src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_dashboard.png" alt="User" />
            </div>
        <div className="container my-auto">
        <center className="short_text"><h2 ><strong>Student Portal</strong></h2></center>
            <RegLog makevis={false} user="Student"/>
        </div>
        </div>
    )
}

export default StudentErp
