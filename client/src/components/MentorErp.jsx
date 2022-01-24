import React from 'react'
import RegLog from './RegLog'
import "./css/dashboard.css";

function MentorErp() {
    return (
        <div className="container m-3 mx-auto" style={{display: 'flex', flexDirection: "row"}}>
            <div className="image_anim container">
                <center><h3 className="portal_text"><strong>Mentor Portal</strong></h3></center>
                <img style={{width: '500px', height: '500px',objectFit:"contain"}} src="https://minimal-assets-api.vercel.app/assets/illustrations/illustration_register.png" alt="User" />
            </div>
        <div className="container my-auto">
        <center className="short_text"><h2 ><strong>Mentor Portal</strong></h2></center>
        <RegLog makevis={true} user="Mentor" />     
        </div>
        </div>
    )
}

export default MentorErp
