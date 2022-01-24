import {useState} from "react";
import axios from 'axios';
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: "0px 0px 5px gray",
  p: 4,
};

function Modalmentor(props) {

    const [name,setName] = useState("");
    const [standard,setStandard] = useState("");
    const [subject,setSubject]  = useState("");
    const [topic,setTopic] = useState("");
    const [format,setFormat] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("");
    const [link,setLink] = useState("");
    const mentorname = props.name;
    const refreshPage = () => {
        window.location.reload();
      };

    const Register = (e) => {
      e.preventDefault();
      setName(mentorname);
      console.log("hey i am trying")
        const data = {
            name : name,
            standard : standard,
            subject: subject,
            topic: topic,
            format: format,
            date: date,
            time: time,
            link: link
        };

        console.log(data);
        
    
        axios
          .post(`/mentor/schedule`, data)
          .then((res) => {
            alert("Class schedule updated successfully");
            refreshPage();
          })
          .catch((err) => console.log(err));
      };

  return (
    <div className="container m-5">
      <Box sx={style}>
        <div>
          <div className="modal-body">
          <h5 className="modal-title m-3" id="exampleModalLabel" style={{ color:"black" , textAlign:"center" }}>New message</h5>
            <form method="POST">
              <div className="mb-3">
                <select className="form-control" onChange={(e)=>{setStandard(e.target.value)}}>
                  <option>Standard</option>
                  <option value="10th">10th</option>
                  <option value="9th">9th</option>
                  <option value="8th">8th</option>
                  <option value="7th">7th</option>
                  <option value="6th">6th</option>
                </select>
              </div>

              <div className="mb-3">
                <select className="form-control" onChange={(e)=>{setSubject(e.target.value)}}>
                  <option>Subject</option>

                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Science">Science</option>
                  <option value="Social Science">Social Science</option>
                </select>
              </div>

              <div className="mb-3">
                <select className="form-control" onChange={(e)=>{setFormat(e.target.value)}} >
                  <option>Format</option>

                  <option value="Class">Class Link</option>
                  <option value="Test">Class Test</option>
                  <option value="Seminar">Seminar</option>
                  <option value="Notification">Notification</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                
                  onChange={(e)=>{setTopic(e.target.value)}}
                  className="form-control"
                  id="inputAddress"
                  placeholder="Topic"
                  style={{ color: "black" }}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                
                  onChange={(e)=>{setDate(e.target.value)}}
                  className="form-control"
                  id="inputAddress"
                  placeholder="Date"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
              
                  onChange={(e)=>{setTime(e.target.value)}}
                  className="form-control"
                  id="inputAddress"
                  placeholder="Time"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Link:
                </label>
                <textarea
                  className="form-control"
              
                  onChange={(e)=>{setLink(e.target.value)}}
                  id="message-text"
                ></textarea>
              </div>

              <div className="modal-footer">
                <button type="submit" onClick={Register} className="btn btn-tertiary">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Modalmentor;