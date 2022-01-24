import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function Classcard(props) {

  const imgList = ["https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/6083138522447872/6598392304107520/image/5960573118316544","https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/5959747388833792/4596525314342912/image/6504436274298880","https://lh3.googleusercontent.com/CnLTcR1IzgtVVFgzQfKKmwHgjFPd8aIvLos9Qs23h0tolC1H3_WN7VJ7CjD-GzL4cjSuDWLIAs2FIvevptPQN-ORHyUqfg=s620","https://www.educative.io/cdn-cgi/image/f=auto,fit=cover,w=620/v2api/collection/10370001/5668847440887808/image/5688506177290240"]
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius:'5px',
        margin: "10px auto",
        fontFamily: "'Baloo Tamma 2', cursive",
      }}
    >
      <CardMedia
        component="img"
        alt="user"
        height="180"
        image={imgList[Math.floor(Math.random()*4)]}
      />
      <CardContent style={{backgroundColor:'snow',color:'black'}}>
      <Typography
          variant="body2"
          color="black"
          style={{ marginTop: "5px" ,fontFamily: 'Nunito Sans'}}
        >
          Instructor : {props.name}
        </Typography>
        <Typography gutterBottom variant="h5" style={{fontWeight:'100rem',fontFamily: 'Nunito Sans'}} component="div">
          {props.topic}
          <Typography variant="body2" style={{fontFamily: 'Nunito Sans'}} color="black">
            <strong>Grade {props.standard}</strong>
            <strong>{` | ${props.subject}`}</strong>
          </Typography>
        </Typography>
        <br />

        <Typography variant="body2" style={{display: 'flex',fontFamily: 'Nunito Sans'}} color="black">
          <span>
          <span style={{ marginTop: "3px" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2370/2370279.png"
              style={{ height: "20px", width: "20px", textAlign: "center" }}
              alt="Date : "
              className="my-1"
            />{" "}
            {props.date}
          </span>
          <br />
          <span style={{ marginTop: "3px" }}>
            <img
              style={{ height: "20px", width: "20px", textAlign: "center" }}
              src="https://cdn-icons-png.flaticon.com/512/2972/2972531.png"
              alt="Time : "
              className="my-1"
            />{" "}
            {props.time}
          </span></span>
          <span style={{position: "relative",left:'45px'}}><button size="small" className="btn btn-light mt-2">
            <a href={props.link} style={{fontFamily: 'Nunito Sans'}} target="blank">
              Join Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 icon-right text-primary dark:text-primary-light"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </button></span>
        </Typography>

        
        <br />
          
      </CardContent>
    </Card>
  );
}

export default Classcard;
