import React from "react";

const style = {
  display: "inline-block",
  width: 320,
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px gray",
  fontFamily: 'baloo tamma 2'
};

const Profile = (props) => {
  return (
     <div className="mx-auto" style={style}>
       <div style={{display:'flex',borderRadius:"5px"}}>

     <img height="120px" width="120px"src="https://media-exp1.licdn.com/dms/image/C5603AQHgoC-2IxLwYQ/profile-displayphoto-shrink_400_400/0/1641400126819?e=1648080000&v=beta&t=6YSD5q-tijhhIzdTr42hBb2dcU8_8YdPhS7gY-Oi8fE" alt="User" />
     <div className="mx-auto my-auto p-0">

     <h3 style={{padding: '0px'}}>{props.name}</h3>
     <p style={{margin:'0px'}}>{props.email}</p>
     <p style={{margin:'0px'}}>{props.specs}</p>
     <p>Mentor</p>
     </div>
       </div>
     </div>
  );
};

export default Profile;
