import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/reglog.css";

function RegLog(props) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [specs,setSpecs] = useState("");
  const route = props.user.toLowerCase();
  const navigate = useNavigate();

  const invisible ={
    display:'none'
  }

  const refreshPage = () => {
    window.location.reload();
  };

  const gotonew = () => {
    navigate(`/loggedin/${route}`);
  };
  const Register = () => {
    const data = {
      username: username,
      email: email,
      password: password,
      specs: specs
    };

    axios
      .post(`/${route}/register`, data)
      .then((res) => {
        alert("Sign up successfully");
        refreshPage();
      })
      .catch((err) => console.log(err));
  };

  const Login = () => {
    const data = {
      email: email,
      password: password,
    };

    axios
      .post(`/${route}/login`, data)
      .then((res) => {
        gotonew();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="reglog">
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div method="post" className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign In"
                  onClick={() => {
                    Login();
                  }}
                />
              </div>
              <div className="hr"></div>
            </div>
            <div method="post" className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="label">
                  Username
                </label>
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  data-type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {/* //Specialization */}
              <div className="group" style={props.makevis?{}:invisible}>
                <label htmlFor="pass" className="label">
                  Specialization
                </label>
                <select className="input form-select form-select-sm" name={specs} style={{backgroundColor:'#6a6f8c61',marginBottom:'10px',padding:'auto'}} onChange={(e) => {
                  setSpecs(e.target.value);
                }} >
                  <option>Specialization</option>
                  <option value="Bachelor of Arts">Bachelor of Arts</option>
                  <option value="Bachelor of Science">
                    Bachelor of Science
                  </option>
                  <option value="Bachelor of Commerce">
                    Bachelor of Commerce
                  </option>
                  <option value="Bachelor of Engg./Tech">
                    Bachelor of Engg./Tech
                  </option>
                  <option value="BMS/BBA/BBS">BMS/BBA/BBS</option>
                  <option value="Bachelor of Law">Bachelor of Law</option>
                  <option value="MTech">MTech</option>
                  <option value="MA">MA</option>
                  <option value="Bachelor of Medicine (MBBS)">
                    Bachelor of Medicine (MBBS)
                  </option>
                  <option value="IIM 5-year Integrated Mgmt. Programme">
                    IIM 5-year Integrated Mgmt. Programme
                  </option>
                </select>
              </div>

              <div className="group">
                <input
                  type="submit"
                  className="button"
                  value="Sign Up"
                  onClick={() => {
                    Register();
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegLog;
