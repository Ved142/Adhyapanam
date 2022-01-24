import { useEffect,useState } from "react";
import axios from 'axios';
import Modal from "@mui/material/Modal";
import Modalmentor from "./Modalmentor";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Rough from "./Rough";
import "./css/mentordash.css";
import Classcard from "./Classcard";
import Profile from "./Profile";

function Mentordash() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();
  const [mentor,setMentor] = useState({})
  const [myclass,setMyClass] = useState([]);
  const [format,setFormat] = useState("All");
  


  const callDash = async() => {
    try{
      const res = await fetch('/mentor/dash',{
        method: 'Get',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        credentials: "include"
      })

      const data = await res.json();
      setMentor(data);

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
  },[])

  useEffect(() => {
    const getClassData = ()=>{
      const data = {
          name : mentor.username,
          format: format
      };
  
  
     axios
        .post(`/mentor/myclasses`, data)
        .then((res) => {
          setMyClass(res.data)
        })
        .catch((err) => console.log(err));
  
    };
    getClassData();
  }, [mentor,format])



  return (
    <>
    <Rough name = {mentor.username} rte = {"mentor"} />
    <div className="mentor-dash" style={{display:'flex'}}>
      <div className="left-sec">
      <div className="m-3">
        <div className="fixit">
        <Card className="mx-auto" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Add a Class / Message
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Add class details , links or Test along with their important notification.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={handleOpen}>+ Add</Button>
      </CardActions>
    </Card>
    <br />
    <Card className="mx-auto" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
         <Profile name={mentor.username} email={mentor.email} specs={mentor.specs} />
        </CardContent>
      </CardActionArea>
    </Card>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
            <Modalmentor name = {mentor.username}/>
            </div>
          </Modal>
        </div>
      </div>
      </div>

      <div className="right-sec container" >

      <center className="my-3" style={{fontFamily: 'Nunito Sans'}}><h2>Welcome {mentor.username}</h2>
      <div className="container"><select
          className="form-control btn btn-warning"
          style={{width:"120px",margin:'10px'}}
          onChange={(e) => {
            setFormat(e.target.value);
          }}
          >
          <option value="All">All</option>
          <option value="Class">Class Link</option>
          <option value="Test">Class Test</option>
          <option value="Seminar">Seminar</option>
          <option value="Notification">Notification</option>
        </select></div></center>
      <div className="row container mx-auto">
        {myclass.map((element) => {
          return (
            <div className="col-md-6" key={element._id}>
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
      </div>
     
    </div>
    </>
  );
}

export default Mentordash;
