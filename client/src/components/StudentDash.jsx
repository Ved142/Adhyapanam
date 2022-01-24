import React, { useEffect, useState } from "react";
import axios from "axios";
import Classcard from "./Classcard";
import Rough from "./Rough";
import { useNavigate } from "react-router-dom";

function StudentDash() {
  const [data, setData] = useState([]);
  const [standard, setStandard] = useState("all");
  const [subject, setSubject] = useState("all");
  const [student, setStudent] = useState({})
  let navigate = useNavigate();


  const fetchData = () => {
    const data = {
      standard: standard,
      subject: subject
    };

    axios
      .post(`/classes/display/filtered`, data)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  const callDash = async() => {
    try{
      const res = await fetch('/student/dash',{
        method: 'Get',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        credentials: "include"
      })

      const data = await res.json();
      console.log(data)
      setStudent(data);
      fetchData();

      if(!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    }catch(err){
      console.log(err);
      navigate('/')
    }
  }


  useEffect(() => {
    callDash();
  }, [standard,subject]);


  return (
    <>
      <Rough rte="student" name={student.username} />
        <center>
      <div className="container">
        <select
          className="btn btn-danger form-control"
          name={standard}
          style={{ width:'100px',margin:'10px'}}
          onChange={(e) => {
            setStandard(e.target.value);
          }}
        >
          <option value="all">Standard</option>
          <option value="10th">10th</option>
          <option value="9th">9th</option>
          <option value="8th">8th</option>
          <option value="7th">7th</option>
          <option value="6th">6th</option>
        </select>
        <select
          className="form-control btn btn-warning"
          name={subject}
          style={{ width:'140px',margin:'10px'}}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          >
          <option value="all">Subject</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Mathematics">Maths</option>
          <option value="Science">Science</option>
          <option value="Social Science">Social Science</option>
        </select>
      </div>
          </center>
      <div className="row container mx-auto" >
        {data.map((element) => {
          return (
            <div className="col-md-4" key={element._id}>
              <Classcard
                id={element._id}
                name={element.name}
                standard={element.standard}
                subject={element.subject}
                topic={element.topic}
                date={element.date}
                time={element.time}
                link={element.link}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StudentDash;
